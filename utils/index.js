function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
export var isObject = function isObject(value) {
  return value !== null && _typeof(value) === 'object';
};
export var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
export var isString = function isString(value) {
  return typeof value === 'string';
};
export var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};
export var isNumber = function isNumber(value) {
  return typeof value === 'number';
};
export var isUndef = function isUndef(value) {
  return typeof value === 'undefined';
};