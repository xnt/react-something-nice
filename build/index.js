"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _messages = _interopRequireDefault(require("./messages"));

var _allowedLanguages = _interopRequireDefault(require("./allowedLanguages"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var SomethingNice = function SomethingNice(_ref) {
  var className = _ref.className,
      lang = _ref.lang,
      style = _ref.style,
      customMessage = _ref.customMessage;
  var message = (0, _react.useState)((0, _messages["default"])(lang));

  if (typeof customMessage == 'string' && customMessage) {
    message.push(customMessage);
  } else if (customMessage) {
    message.push.apply(message, _toConsumableArray(customMessage));
  }

  message[Math.floor(Math.random() * message.length)];
  return _react["default"].createElement("span", {
    style: style,
    className: className
  }, message);
};

SomethingNice.defaultProps = {
  lang: "en"
};
SomethingNice.propTypes = {
  className: _propTypes["default"].string,
  lang: _propTypes["default"].oneOf(_allowedLanguages["default"]),
  style: _propTypes["default"].object,
  customMessage: _propTypes["default"].any
};
var _default = SomethingNice;
exports["default"] = _default;