// You SHOULDN'T just use this, pick dicts on your own instead.
// Comments below are on why I pick those dicts
module.exports = (主题) => {
    return {
        "前面垫话": require("./前面垫话_aetherwu"), // much
        "后面垫话": require("./后面垫话_aetherwu"),
        "废话": require("./废话_aetherwu")(主题), // best wording
        "名人名言": require("./名人名言")(true), // fat
        "起段": "    ",
        "句号": "。"
    }
}