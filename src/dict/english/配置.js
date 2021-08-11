const db = require("./db")
const processer = require("./process")
module.exports = {
    "废话": db["bullshits"],
    "名人名言": require("./名人名言"),
    "前面垫话": db["prefix"],
    "prefix_2": db["prefix_2"],
    "后面垫话": db["suffix"],
    "addings": db["addings"],
    "examples": db["examples"],
    "contrasts": db["contrasts"],
    "主题处理": processser["onTheme"],
    "缓冲处理": processser["onSegment"],
    "文章处理": processser["onArticle"],
}
