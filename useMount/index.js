function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import isDev from "../utils/isDev";
import { useEffect } from 'react';
import { isFunction } from "../utils";
var useMount = function useMount(fn) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error("useMount: parameter `fn` expected to be a function, but got \"".concat(_typeof(fn), "\"."));
    }
  }
  useEffect(function () {
    fn === null || fn === void 0 || fn();
  }, []);
};
export default useMount;