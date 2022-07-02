const originalFamous = require("../default/前面垫话.js");
const nagisaVonPlusBefore = [
    "说过一句很有深度的话",
    "说的我很认同",
    "有句名言",
];
const windydanceBefore = [
    "强调过",
    "在接受采访时说过",
    "在分享他的成功经验时强调",
];
const acfboyBefore = ["是这么认为的", "曾把这句话日日夜夜吟诵"];
module.exports = originalFamous
    .concat(nagisaVonPlusBefore)
    .concat(windydanceBefore)
    .concat(acfboyBefore);
