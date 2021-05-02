module.exports = (主题) => {
    return {
        "废话": require("./废话")(主题),
        "名人名言": require("./名人名言"),
        "起段": "\n",
        "句号": "."
    }
}