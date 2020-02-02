'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var classNames = _interopDefault(require('classnames'));
var reactFeather = require('react-feather');
var styled = _interopDefault(require('@emotion/styled'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    transition: all 0.35s;\n    max-width: 60%;\n    span {\n      transition: all 0.35s;\n      width: 8px;\n      & > * {\n        opacity: 0;\n        transition: all 0.1s;\n      }\n    }\n    &:hover {\n      padding-left: 50px;\n      span {\n        width: 30px;\n        & > * {\n          opacity: 1;\n          transition: all 0.5s;\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Alert = function Alert(_ref) {
  var message = _ref.message,
      type = _ref.type,
      className = _ref.className,
      id = _ref.id,
      _ref$handleClose = _ref.handleClose,
      handleClose = _ref$handleClose === void 0 ? function () {} : _ref$handleClose,
      others = _objectWithoutPropertiesLoose(_ref, ["message", "type", "className", "id", "handleClose"]);

  var classes = classNames("bg-white font-light relative", "border border-solid border-" + type + " rounded-md", 'block mt-3 mx-auto py-2 px-5', className);
  var spanClasses = classNames('h-full cursor-pointer', 'absolute left-0 top-0', "bg-" + type + " color-white", "border border-solid border-" + type);
  var Alert = styled.div(_templateObject());
  return React.createElement(Alert, Object.assign({
    className: classes
  }, others), React.createElement("span", {
    className: spanClasses
  }, React.createElement(reactFeather.X, {
    className: "absolute pos-center",
    color: "white",
    onClick: function onClick() {
      return handleClose(id);
    }
  })), message);
};

exports.Alert = Alert;
//# sourceMappingURL=dale.cjs.development.js.map
