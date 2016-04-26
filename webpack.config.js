var path = require('path');

module.exports = {
    entry: path.join(__dirname, "js/app.js"),
    output: {
        path: __dirname,
        filename: "app.bundle.js"
    },
    module: {

    },
    node: {
       fs: "empty"
    }
};