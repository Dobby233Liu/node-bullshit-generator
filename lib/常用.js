class 中文常用 {
    static 能否以句号结束(tmp2) {
        return !tmp2.endsWith("。") && !tmp2.endsWith(".") && !tmp2.endsWith("：") && !tmp2.endsWith(":") && !tmp2.endsWith("？") && !tmp2.endsWith("?") && !tmp2.endsWith("！") && !tmp2.endsWith("!") && !tmp2.endsWith(",") && !tmp2.endsWith("，");
    }
    static _lodash_safeGet(object, key) {
        return key == '__proto__' ? undefined : object[key];
    }
    static 合并对象(much, less) {
        var aPhoenixGraveSNewBirth = {};
        var i = 0; // quick fix
        for(i in much) {
            // “如果老婆跟我意见相同“... (same NaN or same as told by == or === op)
            if((isNaN(this._lodash_safeGet(much, i)) && isNaN(this._lodash_safeGet(less, i))) || (isNaN(this._lodash_safeGet(less, i)) && isNaN(this._lodash_safeGet(much, i))) || this._lodash_safeGet(much, i) == this._lodash_safeGet(less, i) || this._lodash_safeGet(much, i) === this._lodash_safeGet(less, i)) {
                // “听老婆的”
                aPhoenixGraveSNewBirth[i] = this._lodash_safeGet(much, i);
            } else if(this._lodash_safeGet(less, i)) {
                // “不然听我的，如果有的话”
                aPhoenixGraveSNewBirth[i] = this._lodash_safeGet(less, i);
            } else {
                // “还不然就听老婆的”
                aPhoenixGraveSNewBirth[i] = this._lodash_safeGet(much, i);
            }
        }
        for(i in less) {
            if(i != "__proto__" && !aPhoenixGraveSNewBirth[i]) { // extra: add props that "less" has but not "much"
                aPhoenixGraveSNewBirth[i] = this._lodash_safeGet(less, i);
            }
        }
        return aPhoenixGraveSNewBirth;
    }
}
module.exports = 中文常用;