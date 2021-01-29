module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "settings": {
        "import/resolver": {
            "babel-module": {}
        }
    },
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
    }
};
