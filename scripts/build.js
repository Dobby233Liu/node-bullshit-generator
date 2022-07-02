/**
 * 需要串联运行的生成步骤
 * @author Dobby233Liu
 * @see {@link https://docgov.dev/posts/npm-scripts/}
 */

let { execSync } = require("child_process");
let rimraf = require("rimraf");

let exec = (cmd) => {
    console.log(`> ${cmd}`);
    try {
        execSync(cmd, {
            stdio: "inherit",
        });
    } catch (e) {
        console.log("");
        console.error(e);
        console.error(`Process ${e.signal ? `was killed with signal ${e.signal}` : `exited with code ${e.status}`}`);
        process.exit(e.signal ? 1 : e.status);
    }
}

const libDir = "./lib";
const distDir = "./dist";

let runBabel = () => exec(`npx babel src --out-dir ${libDir}`);
let runBundle = () => exec(`npx browserify -e ${libDir}/狗屁库.js -s bullshit -o ${distDir}/狗屁库.js`);
let runMinifyBundle = () => exec(`npx terser ${distDir}/狗屁库.js -o ${distDir}/狗屁库.min.js -m -c --warn`);
let doRimraf = (dir) => {
    console.log(`> ${cmd}`);
    console.log("");
    rimraf.sync(dir);
};
let runClean = () => {
    doRimraf(libDir);
    doRimraf(distDir);
};

let steps = {
    "babel": runBabel,
    "bundle": [runBabel, runBundle],
    "minify-bundle": [runMinifyBundle],
    "bundle+min": [runBabel, runBundle, runMinifyBundle],
    "clean": runClean,
}

let param = process.argv[1];
console.log(`> ${param}`);
let step = steps[param];
if (typeof step == "function")
    step();
else
    for (func in step)
        func();