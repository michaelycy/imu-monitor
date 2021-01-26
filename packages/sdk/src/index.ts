import {
  injectJSExecErrorMonitor,
  injectUnhandledrejectionMonitor,
  injectResourceLoadingErrorMonitor,
} from './errors';

(() => {
  injectJSExecErrorMonitor();
  injectUnhandledrejectionMonitor();
  injectResourceLoadingErrorMonitor();
})();
