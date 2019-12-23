module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "plugins": ["react"],
  "rules": {
    'import/export': 0,
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    "jsx-a11y/no-static-element-interactions": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "class-methods-use-this": 0,
    "max-len": ["error", 250, 2],
    "no-extend-native": 1,
    "no-debugger": "warn",
    "react/require-default-props": [0, { "forbidDefaultForRequired": false }],
    'no-plusplus': [2, { "allowForLoopAfterthoughts": true }],
    "no-shadow": 0,
    "react/no-array-index-key": 0,
    "array-callback-return": 0,
    "consistent-return": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": 0,
    "react/style-prop-object": 0,
    "react/jsx-boolean-value": 0,
    "react/no-danger": 0,
    "no-loop-func": 0,
    "linebreak-style": 0,
  }
};
