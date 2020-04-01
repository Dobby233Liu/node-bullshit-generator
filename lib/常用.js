class 中文常用 {
    static 能否以句号结束(tmp2) {
        return !tmp2.endsWith("。") && !tmp2.endsWith(".") && !tmp2.endsWith("：") && !tmp2.endsWith(":") && !tmp2.endsWith("？") && !tmp2.endsWith("?") && !tmp2.endsWith("！") && !tmp2.endsWith("!") && !tmp2.endsWith(",") && !tmp2.endsWith("，");
    }
    static 合并对象(much, less) {
        var aPhoenixGraveSNewBirth = {};
        var i = 0; // quick fix
        for(i in much) {
            // “如果老婆跟我意见相同“... (same NaN or same as told by == or === op)
            if((isNaN(much[i]) && isNaN(less[i])) || (isNaN(less[i]) && isNaN(much[i])) || much[i] == less[i] || much[i] === less[i]) {
                // “听老婆的”
                aPhoenixGraveSNewBirth[i] = much[i];
            } else if(less[i]) {
                // “不然听我的，如果有的话”
                aPhoenixGraveSNewBirth[i] = less[i];
            } else {
                // “还不然就听老婆的”
                aPhoenixGraveSNewBirth[i] = much[i];
            }
        }
        for(i in less) {
            if(!aPhoenixGraveSNewBirth[i]) { // extra: add props that "less" has but not "much"
                aPhoenixGraveSNewBirth[i] = less[i];
            }
        }
        return aPhoenixGraveSNewBirth;
    }
}
module.exports = 中文常用;