module.exports = (function () {
    const db = require("./db");
    const authors = db["author"];
    const sayings = db["saying"];

    function format(a, b) {
        return a + "{前面垫话}" + b + " {后面垫话}";
    }
    let ret = [];
    for (i in sayings) {
        ret.push(format(authors[i], sayings[i]));
    }
    return ret;
})();
