module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "react-native",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "comma-dangle": 0,
        "no-shadow": 0,
        "no-console": 0,
        "no-restricted-syntax": 1,
        "new-cap": 1,
        "no-continue": 1,
        "no-underscore-dangle": 1,
        "global-require": 1,
        "react/no-multi-comp": 1,
        "react/jsx-filename-extension": 0,
        "react/sort-comp": 0,
        "react/no-array-index-key": 0,
        "camelcase": 1,
        "import/no-unresolved": 1,
        "import/prefer-default-export": 1,
        "import/extensions": 1,
        "no-return-assign": 1,
        "max-len": 1,
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2
    },
    "ecmaFeatures": {
        "jsx": true
    },
    "globals": {
        "navigator": true,
        "isAndroid": true,
        "FormData": true,
        "__DEV__": true,
        "fetch": true,
        "isIOS": true
    }
};