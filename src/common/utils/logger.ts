export const captureException = (exception: Error) => {
  if (__DEV__) {
    console.error(exception);
  }
};
