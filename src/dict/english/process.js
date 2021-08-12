let roster = {}
roster["onTheme"] = function onTheme(theme)
{
    return theme.toLowerCase()
}
var prefix2Machine = null
var examplesMachine = null
var addingsMachine = null
var contrastsMachine = null

function ohNoes(arr, opt, rng) {
    return opt["menzi11#175"] ? rng.洗牌遍历(arr) : {
        next: function () {
            return {
                value: rng.瞎选一个(arr),
                done: false
            }
        }
    }
}
roster["onSegment"] = function onSegment(seg, dict, opt, useless, rng, type) {
    var lseg = seg
    if (lseg.includes("{prefix_2}")) {
        if (!prefix2Machine) prefix2Machine = ohNoes(dict["prefix_2"], opt, rng)
        lseg = prefix2Machine.next().value + lseg.replace(/\{prefix_2\}/g, "")
        console.log(lseg)
    }
    if (type == "名人名言") {
        if (!examplesMachine) examplesMachine = ohNoes(dict["examples"], opt, rng)
        lseg = examplesMachine.next().value + lseg
    } else if (type == "废话") {
        if ((Math.floor(Math.random() * 100) - 20) <= 45) {
            if (!addingsMachine) addingsMachine = ohNoes(dict["addings"], opt, rng)
            lseg = addingsMachine.next().value + lseg
        } else {
            if (!contrastsMachine) contrastsMachine = ohNoes(dict["contrasts"], opt, rng)
            lseg = contrastsMachine.next().value + lseg
        }
    }
    return lseg
}

function sentences(str) {
    return str.match(/\(?[A-Z][^\.]+[\.!\?]\)?(\s+|$)/g)
}
roster["onArticle"] = function onArticle(article) {
    article = article.replace('  ', ' ').replace('. .', '.').replace('? .', '?').replace(', .', ',').replace('..', '.').replace(/[a-z]/i, (x) => x.toUpperCase()).trim()
    let sentencesLst = sentences(article)
    for (i in sentencesLst) {
        sentencesLst[i] = sentencesLst[i].replace('  ', ' ').replace('. .', '.').replace('? .', '?').replace(', .', ',').replace('..', '.').replace(/[a-z]/i, (x) => x.toUpperCase()).trim()
    }
    return sentencesLst.join(' ')
}
module.exports = roster