class LCG中介 {
    同余乘数 = 214013;
    同余加数 = 2531011;
    同余模 = Math.pow(2, 32);
    来个小小数() {
        return ((Math.floor(Math
                    .random() *
                    this.同余模) *
                this.同余乘数 + this
                .同余加数) % this
            .同余模) / this.同余模;
    }
}
module.exports = LCG中介;
//((Number(new Date().valueOf()) * 214013 + 2531011) % Math.pow(2,32)) / Math.pow(2,32)