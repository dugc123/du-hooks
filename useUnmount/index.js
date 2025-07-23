function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import { useEffect, useRef } from 'react';
import { isFunction } from "../utils";
import isDev from "../utils/isDev";
var useUnmount = function useUnmount(fn) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error("useUnmount expected parameter is a function, got ".concat(_typeof(fn)));
    }
  }
  //todo
  var fnRef = useRef(fn);
  useEffect(function () {
    return function () {
      fnRef.current();
    };
  }, []);
};
export default useUnmount;