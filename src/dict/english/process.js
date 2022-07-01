let roster = {};
roster["onTheme"] = function onTheme(theme) {
    return theme.toLowerCase();
};
let prefix2Machine = null;
let examplesMachine = null;
let addingsMachine = null;
let contrastsMachine = null;

function ohNoes(arr, opt, rng) {
    return opt["menzi11#175"]
        ? rng.洗牌遍历(arr)
        : {
              next: function () {
                  return {
                      value: rng.瞎选一个(arr),
                      done: false,
                  };
              },
          };
}

roster["onSegment"] = function onSegment(_seg, dict, opt, useless, rng, type) {
    let seg = _seg;
    if (!opt["v3语法改进"] || rng.取随机数(5) <= 3) {
        if (type == "名人名言") {
            if (!examplesMachine)
                examplesMachine = ohNoes(dict["examples"], opt, rng);
            if (seg.includes("{prefix_2}")) {
                if (!prefix2Machine)
                    prefix2Machine = ohNoes(dict["prefix_2"], opt, rng);
                return (
                    examplesMachine.next().value +
                    prefix2Machine.next().value +
                    seg.replace(/\{prefix_2\}/g, "")
                );
            }
            return examplesMachine.next().value + seg;
        } else if (type == "废话") {
            if (Math.floor(Math.random() * 100) - 20 <= 45) {
                if (!addingsMachine)
                    addingsMachine = ohNoes(dict["addings"], opt, rng);
                return addingsMachine.next().value + seg;
            }
            if (!contrastsMachine)
                contrastsMachine = ohNoes(dict["contrasts"], opt, rng);
            return contrastsMachine.next().value + seg;
        }
    }
    return seg;
};

function sentences(str) {
    return str.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g);
}

function clean(str) {
    return str
        .replace(/  /g, " ")
        .replace(/\. \./g, ".")
        .replace(/\? \./g, "?")
        .replace(/, \./g, ",")
        .replace(/\.\./g, ".")
        .replace(/[a-z]/i, (x) => x.toUpperCase())
        .trim();
}
roster["onArticle"] = function onArticle(article) {
    let articleNew = [];
    for (i in article) {
        let part = article[i];
        part = clean(part);
        let sentencesLst = sentences(part);
        for (i in sentencesLst) {
            sentencesLst[i] = clean(sentencesLst[i]);
        }
        articleNew.push(sentencesLst.join(" "));
    }
    return articleNew;
};
module.exports = roster;
