module.exports = (主题) => {
    return {
        "前面垫话": require("./前面垫话"),
        "后面垫话": require("./后面垫话"),
        "废话": require("./废话")(主题),
        "名人名言": require("./名人名言"),
        "起段": "    ",
        "句号": "."
    }
}