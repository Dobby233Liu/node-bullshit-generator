let roster = {};
roster["onTheme"] = function onTheme(theme) {
    return theme.toLowerCase();
};
let prefix2Machine = null;
let examplesMachine = null;
let addingsMachine = null;
let contrastsMachine = null;

function generateIterator(arr, opt, rng) {
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

roster["onSegment"] = function onSegment(seg, dict, opt, _, rng, type) {
    if (type == "名人名言") {
        if (!examplesMachine)
            examplesMachine = generateIterator(dict["examples"], opt, rng);
        // if not random.random() > 0.3: - there is no weighted random here
        if (seg.includes("{prefix_2}")) {
            if (!prefix2Machine)
                prefix2Machine = generateIterator(
                    dict["prefix_2"],
                    opt,
                    rng
                );
            return (
                examplesMachine.next().value +
                prefix2Machine.next().value +
                seg.replace(/\{prefix_2\}/g, "")
            );
        }
        return examplesMachine.next().value + seg;
    } else if (type == "废话") {
        if (rng.取随机数(100) - 20 <= 45) {
            if (!addingsMachine)
                addingsMachine = generateIterator(
                    dict["addings"],
                    opt,
                    rng
                );
            return addingsMachine.next().value + seg;
        }
        if (!contrastsMachine)
            contrastsMachine = generateIterator(
                dict["contrasts"],
                opt,
                rng
            );
        return contrastsMachine.next().value + seg;
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
        // part = clean(part);
        let sentencesLst = sentences(part);
        for (i in sentencesLst) {
            sentencesLst[i] = clean(sentencesLst[i]);
        }
        articleNew.push(sentencesLst.join(" "));
    }
    return articleNew;
};
module.exports = roster;
