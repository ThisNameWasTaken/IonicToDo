export default function getSrcFromImageFile(file: any) {
  return new Promise((resolve, reject) => {
    const dataUrlWorker = new Worker(
      // @ts-ignore
      new URL('../workers/data-url.worker.js', import.meta.url)
    );

    function handleWorkerMessage(event: any) {
      const { src, err } = event.data;
      err ? reject(err) : resolve(src);

      dataUrlWorker.removeEventListener('message', handleWorkerMessage);
      dataUrlWorker.terminate();
    }

    dataUrlWorker.postMessage({ file });
    dataUrlWorker.addEventListener('message', handleWorkerMessage);
  });
}
