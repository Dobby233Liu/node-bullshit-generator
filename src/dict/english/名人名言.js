module.exports = (function (db) {
    let authors = db["author"];
    let sayings = db["saying"];

    let ret = [];
    for (let i in sayings) {
        ret.push(authors[i] + "{前面垫话}" + sayings[i] + " {后面垫话}");
    }
    return ret;
})(require("./db"));
