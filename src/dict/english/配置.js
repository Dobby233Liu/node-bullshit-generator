const db = require("./db")
module.exports = {
    "废话": db["bullshits"],
    "名人名言": require("./名人名言"),
    "前面垫话": db["prefix"],
    "prefix_2": db["prefix_2"],
    "后面垫话": db["suffix"],
    "addings": db["addings"],
    "examples": db["examples"],
    "contrasts": db["contrasts"]
}