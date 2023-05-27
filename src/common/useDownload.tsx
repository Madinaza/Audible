import {useCallback, useRef, useState} from 'react';
import ReactNativeBlobUtil, {
  FetchBlobResponse,
  StatefulPromise,
} from 'react-native-blob-util';

type DownloadResult =
  | {
      ok: true;
      path: string;
    }
  | {
      ok: false;
      error?: unknown;
      canceled?: boolean;
    };

export const useDownload = () => {
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle');
  const [result, setResult] = useState<DownloadResult | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const promise = useRef<StatefulPromise<FetchBlobResponse> | null>();

  const execute = useCallback(
    async (url: string, folder: string, fileName: string) => {
      console.log('execute', url, folder, fileName);
      setStatus('pending');
      setResult(null);
      setProgress(0);
      try {
        promise.current = ReactNativeBlobUtil.config({
          fileCache: true,
          followRedirect: true,
        })
          .fetch('GET', url)
          .progress({count: 10}, (received, total) => {
            console.log('progress', received / total);
            setProgress(Math.round((received / total) * 100) / 100);
          });
        const resp = await promise.current;
        promise.current = null;
        const statusCode = resp.info().status;
        if (statusCode >= 400) {
          throw resp;
        }
        const folderExists = await ReactNativeBlobUtil.fs.exists(folder);
        if (!folderExists) {
          await ReactNativeBlobUtil.fs.mkdir(folder);
        }
        await ReactNativeBlobUtil.fs.mv(resp.path(), `${folder}/${fileName}`);
        const res: DownloadResult = {
          ok: true,
          path: `${folder}/${fileName}`,
        };
        setResult(res);
        setProgress(1);
        setStatus('success');
        return res;
      } catch (err) {
        if (
          (err as Error)?.name === 'AbortError' ||
          (err as Error)?.message === 'canceled'
        ) {
          const res: DownloadResult = {
            ok: false,
            canceled: true,
          };
          setResult(res);
          setStatus('idle');
          return res;
        }
        const res: DownloadResult = {
          ok: false,
          error: err,
        };
        setResult(res);
        setStatus('error');
        return res;
      }
    },
    [],
  );

  const cancel = useCallback(() => {
    if (promise.current) {
      promise.current.cancel();
    }
  }, []);

  return {cancel, execute, status, result, progress};
};
