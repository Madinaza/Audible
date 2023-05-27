import {useCallback, useState} from 'react';
import ReactNativeBlobUtil from 'react-native-blob-util';

import {useDownload} from './useDownload';
import {captureException} from './utils/logger';
import {saveFileToStorage} from './utils/saveFileToStorage';
import {removeFileFromStorage} from './utils/removeFileFromStorage';
export const EBOOKS_FOLDER = `${ReactNativeBlobUtil.fs.dirs.DocumentDir}/eBooks`;

export type FileStatus = 'checking' | 'online' | 'downloading' | 'offline';

export enum PublicationFormat {
  Audiobook = 'audiobook',
  Zip = 'zip',
}

const getExtension = (format: PublicationFormat) => {
  switch (format) {
    case PublicationFormat.Audiobook:
      return 'mp3';
    case PublicationFormat.Zip:
      return 'zip';
  }
};

export const useBookFile = (
  id: string,
  format: PublicationFormat,
  _item: any,
) => {
  const download = useDownload();
  const [fileStatus, setFileStatus] = useState<FileStatus>('checking');

  const path = `${EBOOKS_FOLDER}/${id}.${getExtension(format)}`;

  const checkFile = useCallback(
    async (setInitialStatus = true) => {
      if (setInitialStatus) {
        setFileStatus('checking');
      }
      try {
        const exists = await ReactNativeBlobUtil.fs.exists(path);
        const status = exists ? 'offline' : 'online';
        setFileStatus(status);
        return status;
      } catch (err: unknown) {
        captureException(err as Error);
        throw err;
      }
    },
    [path],
  );

  const handleDownload = useCallback(
    async (downloadUri: string) => {
      setFileStatus('downloading');
      const result = await download.execute(
        downloadUri,
        EBOOKS_FOLDER,
        `${id}.${getExtension(format)}`,
      );
      console.log(_item);
      if (result.ok) {
        saveFileToStorage(_item);
      }

      if (!result.ok) {
        if (result.error) {
          captureException(result.error as Error);
        }
        setFileStatus('online');
      }
      // setTimeout to fix issue on Android where the file is not found
      setTimeout(() => {
        checkFile(false);
      });
      return result;
    },
    [checkFile, download, format, id, _item],
  );

  const removeFile = useCallback(async () => {
    try {
      const status = await checkFile(false);
      if (status === 'online') {
        setFileStatus(status);
        return;
      }
      await ReactNativeBlobUtil.fs.unlink(path);
      await removeFileFromStorage(id);
      setFileStatus('online');
      return true;
    } catch (err) {
      // TODO show error
      captureException(err as Error);
      return false;
    }
  }, [checkFile, path, id]);

  return {
    cancel: download.cancel,
    checkFile,
    fileStatus,
    path,
    download: handleDownload,
    downloadProgress: download.progress,
    removeFile,
  };
};
