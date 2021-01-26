export function injectResourceLoadingErrorMonitor() {
  window.addEventListener('error', event => {
    console.log('event: ', event);
  });
}
