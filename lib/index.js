"use strict";

exports.__esModule = true;

exports["default"] = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      MemberExpression: function MemberExpression (path, state) {
        if (path.get("object").matchesPattern("process.env")) {
          var key = path.toComputedKey();
          if (t.isStringLiteral(key)) {
            var name = key.value;
            var value = (state.opts.env && name in state.opts.env) ? state.opts.env[name] : process.env[name];
            path.replaceWith(t.valueToNode(value));
          }
        }
      }
    }
  };
};

module.exports = exports["default"];
