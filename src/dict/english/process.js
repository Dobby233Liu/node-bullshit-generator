let roster = {}
roster["onTheme"] = function onTheme(theme)
{
    return theme.toLowerCase()
}
let prefix2Machine = null
let examplesMachine = null
let addingsMachine = null
let contrastsMachine = null

function ohNoes(arr, opt, rng) {
    let ret = opt["menzi11#175"] ? rng.洗牌遍历(arr) : {
        next: function () {
            return {
                value: rng.瞎选一个(arr),
                done: false
            }
        }
    }
    //console.log(ret)
    return ret
}
roster["onSegment"] = function onSegment(seg, dict, opt, useless, rng, type) {
    let lseg = seg
    if (lseg.indexOf("{prefix_2}") > -1) {
        if (!prefix2Machine) prefix2Machine = ohNoes(dict["prefix_2"], opt, rng)
        let val = prefix2Machine.next().value
        console.log(val)
        lseg = val + lseg.replace(/\{prefix_2\}/g, "")
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
    return seg
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
