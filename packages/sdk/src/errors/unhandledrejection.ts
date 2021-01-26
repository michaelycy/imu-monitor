export function injectUnhandledrejectionMonitor() {
  window.addEventListener('unhandledrejection', event => {
    console.log('unhandledrejection: ', event);
  });
}
