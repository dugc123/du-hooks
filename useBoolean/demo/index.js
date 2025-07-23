function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * desc: 切换 boolean，可以接收默认值。
 */

import { useBoolean } from "../..";
import React from 'react';
export default (function () {
  var _useBoolean = useBoolean(true),
    _useBoolean2 = _slicedToArray(_useBoolean, 2),
    state = _useBoolean2[0],
    _useBoolean2$ = _useBoolean2[1],
    toggle = _useBoolean2$.toggle,
    setTrue = _useBoolean2$.setTrue,
    setFalse = _useBoolean2$.setFalse;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Effects\uFF1A", JSON.stringify(state)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggle
  }, "Toggle"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: setFalse,
    style: {
      margin: '0 16px'
    }
  }, "Set false"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: setTrue
  }, "Set true")));
});