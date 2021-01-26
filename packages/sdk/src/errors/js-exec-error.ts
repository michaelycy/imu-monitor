export function injectJSExecErrorMonitor() {
  window.addEventListener('error', event => {
    console.log('event: ', event);
  });
}
