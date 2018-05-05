module.exports = {
    "extends": "airbnb",
    "rules": {
        "comma-dangle": 0,
        "no-cond-assign": 2,
        "no-console": 2,
        "no-const-assign": 2,
        "no-constant-condition": 0,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-keys": 2,
        "no-empty": 0,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": 0,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-invalid-regexp": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-regex-spaces": 2, // disallow multiple spaces in a regular expression literal
        "no-reserved-keys": 0, // disallow reserved words being used as object literal keys (off by default)
        "no-sparse-arrays": 2, // disallow sparse arrays
        "no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
        "use-isnan": 2, // disallow comparisons with the value NaN
        "valid-jsdoc": 0, // Ensure JSDoc comments are valid (off by default)
        "valid-typeof": 2, // Ensure that the results of typeof are compared against a valid string

        "block-scoped-var": 0, // treat var statements as if they were block scoped (off by default)
        "complexity": 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
        "consistent-return": 0, // require return statements to either always or never specify values
        "curly": 2, // specify curly brace conventions for all control statements
        "default-case": 0, // require default case in switch statements (off by default)
        "dot-notation": 2, // encourages use of dot notation whenever possible
        "eqeqeq": [2, "allow-null"], // require the use of === and !==
        "guard-for-in": 0, // make sure for-in loops have an if statement (off by default)
        "no-alert": 2, // disallow the use of alert, confirm, and prompt
        "no-caller": 2, // disallow use of arguments.caller or arguments.callee
        "no-div-regex": 2, // disallow division operators explicitly at beginning of regular expression (off by default)
        "no-else-return": 0, // disallow else after a return in an if (off by default)
        "no-eq-null": 0, // disallow comparisons to null without a type-checking operator (off by default)
        "no-eval": 2, // disallow use of eval()
        "no-extend-native": 2, // disallow adding to native types
        "no-extra-bind": 2, // disallow unnecessary function binding
        "no-fallthrough": 2, // disallow fallthrough of case statements
        "no-floating-decimal": 2, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
        "no-implied-eval": 2, // disallow use of eval()-like methods
        "no-labels": 2, // disallow use of labeled statements
        "no-iterator": 2, // disallow usage of __iterator__ property
        "no-lone-blocks": 2, // disallow unnecessary nested blocks
        "no-loop-func": 0, // disallow creation of functions within loops
        "no-multi-str": 0, // disallow use of multiline strings
        "no-native-reassign": 0, // disallow reassignments of native objects
        "no-new": 2, // disallow use of new operator when not part of the assignment or comparison
        "no-new-func": 2, // disallow use of new operator for Function object
        "no-new-wrappers": 2, // disallows creating new instances of String,Number, and Boolean
        "no-octal": 2, // disallow use of octal literals
        "no-octal-escape": 2, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-proto": 2, // disallow usage of __proto__ property
        "no-redeclare": 0, // disallow declaring the same variable more then once
        "no-return-assign": 2, // disallow use of assignment in return statement
        "no-script-url": 2, // disallow use of javascript: urls.
        "no-self-compare": 2, // disallow comparisons where both sides are exactly the same (off by default)
        "no-sequences": 2, // disallow use of comma operator
        "no-unused-expressions": 0, // disallow usage of expressions in statement position
        "no-void": 2, // disallow use of void operator (off by default)
        "no-warning-comments": 0, // disallow usage of configurable warning terms in comments": 2,                        // e.g. TODO or FIXME (off by default)
        "no-with": 2, // disallow use of the with statement
        "radix": 2, // require use of the second argument for parseInt() (off by default)
        "semi-spacing": 2, // require a space after a semi-colon
        "vars-on-top": 0, // requires to declare all vars on top of their containing scope (off by default)
        "wrap-iife": 0, // require immediate function invocation to be wrapped in parentheses (off by default)
        "yoda": 2, // require or disallow Yoda conditions

        // Variables
        // These rules have to do with variable declarations.

        "no-catch-shadow": 2, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        "no-delete-var": 2, // disallow deletion of variables
        "no-label-var": 2, // disallow labels that share a name with a variable
        "no-shadow": 2, // disallow declaration of variables already declared in the outer scope
        "no-shadow-restricted-names": 2, // disallow shadowing of names such as arguments
        "no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undefined": 0, // disallow use of undefined variable (off by default)
        "no-undef-init": 2, // disallow use of undefined when initializing variables
        "no-unused-vars": [2, { "vars": "all", "args": "none" }], // disallow declaration of variables that are not used in the code
        "no-use-before-define": 0, // disallow use of variables before they are defined

        // Node.js
        // These rules are specific to JavaScript running on Node.js.

        "handle-callback-err": 2, // enforces error handling in callbacks (off by default) (on by default in the node environment)
        "no-mixed-requires": 2, // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
        "no-new-require": 2, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
        "no-path-concat": 2, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
        "no-process-exit": 0, // disallow process.exit() (on by default in the node environment)
        "no-restricted-modules": 2, // restrict usage of specified node modules (off by default)
        "no-sync": 0, // disallow use of synchronous methods (off by default)

        "prettier/prettier": [2, "fb", "@format"],

        "key-spacing": 0,
        "keyword-spacing": 2,
        "jsx-quotes": [2, "prefer-double"],
        "comma-spacing": 0,
        "no-multi-spaces": 0,
        "brace-style": 0,
        "camelcase": 0,
        "consistent-this": [2, "self"],
        "eol-last": 2,
        "func-names": 0,
        "func-style": 0,
        "new-cap": 0,
        "new-parens": 2,
        "no-nested-ternary": 0,
        "no-array-constructor": 2,
        "no-lonely-if": 0,
        "no-new-object": 2,
        "no-spaced-func": 2, // disallow space between function identifier and application
        "no-ternary": 0, // disallow the use of ternary operators (off by default)
        "no-trailing-spaces": 2, // disallow trailing whitespace at the end of lines
        "no-underscore-dangle": 0, // disallow dangling underscores in identifiers
        "no-mixed-spaces-and-tabs": 2, // disallow mixed spaces and tabs for indentation
        "quotes": [2, "double", "avoid-escape"], // specify whether double or single quotes should be used
        "quote-props": 0,
        "semi": 2,
        "sort-vars": 0,
        "space-in-brackets": 0,
        "space-in-parens": 0,
        "space-infix-ops": 2,
        "space-unary-ops": [
            2,
            {
                "words": true,
                "nonwords": false
            }
        ],
        "max-nested-callbacks": 0,
        "one-var": 0,
        "wrap-regex": 0,

        "max-depth": 0,
        "max-len": 0,
        "max-params": 0,
        "max-statements": 0,
        "no-bitwise": 2,
        "no-plusplus": 0,

        "react/display-name": 0,
        "react/jsx-boolean-value": 2,
        "react/jsx-no-comment-textnodes": 2,
        "react/jsx-no-duplicate-props": 2,
        "react/no-children-prop": 2,
        "react/no-deprecated": 2,
        "react/no-direct-mutation-state": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/void-dom-elements-no-children": 2,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-multi-comp": 2,
        "react/no-string-refs": 2,
        "react/no-unknown-property": 0,
        "react/prop-types": 0,
        "react/jsx-key": 2,
        "react/react-in-jsx-scope": 2,
        "react/self-closing-comp": 2,
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-closing-tag-location": 2,
        "react/wrap-multilines": 0,
        "react/boolean-prop-naming": 2,
        "react/destructuring-assignment": 2,
        "react/style-prop-object": 2,
        "react/jsx-wrap-multilines": 2,
        "react/sort-comp": 2,
        "react/jsx-tag-spacing": 2,
        "react/require-render-return": 2,
        "react/jsx-sort-props": [
            2,
            {
                "callbacksLast": true,
                "shorthandFirst": true
            }
        ],
        "react/jsx-pascal-case": 2
    }
};