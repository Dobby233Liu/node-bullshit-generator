module.exports = (function () {
    const db = require("./db");
    const authors = db["author"];
    const sayings = db["saying"];

    let ret = [];
    for (let i in sayings) {
        ret.push(authors[i] + "{前面垫话}" + sayings[i] + " {后面垫话}");
    }
    return ret;
})();
