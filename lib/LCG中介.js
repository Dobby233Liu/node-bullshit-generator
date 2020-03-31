class LCG中介 {
    种子 = 0;
    my种子 = 0;
    同余乘数 = 214013;
    同余加数 = 2531011;
    同余模 = Math.pow(2, 32);
    constructor(seed = NaN) {
        this.my种子 = seed;
        this.下种(this.my种子);
    }
    下种(seed) {
        if(isNaN(seed)) {
            this.种子 = Math.floor(Math.random() * this.同余模); // Number(new Date().valueOf());
        } else {
            this.种子 = seed;
        }
        this.种子 = (this.种子 * this.同余乘数 + this.同余加数) % this.同余模;
        return this.种子;
    }
    来个小小数() {
        this.下种(this.my种子);
        return this.种子 / this.同余模;
    }
}
module.exports = LCG中介;
//((Number(new Date().valueOf()) * 214013 + 2531011) % Math.pow(2,32)) / Math.pow(2,32)