window._config_ = {
    historyApi: !!history,
    errorHndl: true,
};

function 获取网址参数(参数) {
    return new URL(window.location.href).searchParams.get(参数);
}
function appendParamToUrlString(name, cnt, url = window.location.href) {
    let fussyURL = new URL(url);
    if (!fussyURL.searchParams.has(name)) {
        fussyURL.searchParams.append(name, cnt);
    } else {
        fussyURL.searchParams.set(name, cnt);
    }
    return fussyURL.href;
}

const $ = function (selector) {
    return document.querySelector(selector);
};

function appendArticle(文章) {
    for (i in 文章) {
        let newOwn = document.createElement("div");
        newOwn.innerHTML = 文章[i];
        $("#文章").appendChild(newOwn);
    }
}
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const rootTitle = document.title;
const bullshitClass = new window.bullshit();

function _gen_wrapper(__主题) {
    try {
        if (__主题) $("#主题 input").value = __主题;
        let 主题 = $("#主题 input").value;
        let 文章 = bullshitClass.生成(主题, 6000, {
            返回段落列表: true,
        });
        $("#文章").appendChild(document.createElement("hr"));
        let themeHeader = document.createElement("h2");
        themeHeader.innerHTML = escapeHtml(主题);
        $("#文章").appendChild(themeHeader);
        appendArticle(文章);
        document.title = `${rootTitle} - 主题：${主题} - 请勿将生成的文章用于正规用途`;
        if (window._config_.historyApi) {
            history.pushState(
                { 主题: 主题 },
                document.title,
                appendParamToUrlString("主题", 主题)
            );
        }
        $("#文章").classList.remove("有错误");
    } catch (ex) {
        if (window._config_.errorHndl) {
            try {
                文章 = `${ex.message}\n\n${
                    ex.stack || ex.stacktrace || "[无法获取堆栈跟踪]"
                }`.split("\n");
                $("#文章").classList.add("有错误");
                $("#文章").appendChild(document.createElement("hr"));
                appendArticle(文章);
                $("#文章").appendChild(document.createElement("hr"));
            } catch (e) {
                console.error(e);
            }
        }
        console.error(ex);
    }
}

if ((_主题 = 获取网址参数("主题"))) {
    window.onload = () => _gen_wrapper(_主题);
}
