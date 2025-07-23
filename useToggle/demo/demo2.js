function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * title: 在任意两个值之间切换
 * desc: 接受两个可选参数，在它们之间进行切换。
 */

import { useToggle } from "../..";
import React from 'react';
export default (function () {
  var _useToggle = useToggle('Hello', 'World'),
    _useToggle2 = _slicedToArray(_useToggle, 2),
    state = _useToggle2[0],
    _useToggle2$ = _useToggle2[1],
    toggle = _useToggle2$.toggle,
    set = _useToggle2$.set,
    setLeft = _useToggle2$.setLeft,
    setRight = _useToggle2$.setRight;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Effects\uFF1A", state), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggle
  }, "Toggle"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return set('Hello');
    },
    style: {
      margin: '0 8px'
    }
  }, "Set Hello"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return set('World');
    }
  }, "Set World"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: setLeft,
    style: {
      margin: '0 8px'
    }
  }, "Set Left"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: setRight
  }, "Set Right")));
});