/**
 * 需要串联运行的生成步骤
 * @author Dobby233Liu
 * @see {@link https://docgov.dev/posts/npm-scripts/}
 */

let { spawnSync } = require("child_process");
let rimraf = require("rimraf");

let exec = (cmd, args=[]) => {
    console.log(`> ${cmd} ${args.join(" ")}`);
    let data = spawnSync(cmd, args, {
        stdio: "inherit",
    });
    if (data.error) {
        console.log("");
        console.error(data.error);
        console.error(`Process ${data.signal ? `was killed with signal ${data.signal}` : `exited with code ${data.status}`}`);
        process.exit(data.signal ? 1 : data.status);
    }
}

const srcDir = "./src";
const libDir = "./lib";
const distDir = "./dist";
const libFile = "狗屁库.js";
const libMinifiedFile = "狗屁库.min.js";
const libBrowserName = "bullshit";

let runBabel = () => exec("npx", ["babel", srcDir, "--out-dir", libDir]);
let runBundle = () => exec("npx", ["browserify", "-e", `${libDir}/${libFile}`, "-s", libBrowserName, "-o", `${distDir}/${libFile}`]);
let runMinifyBundle = () => exec("npx", ["terser", `${distDir}/${libFile}`, "-o", `${distDir}/${libMinifiedFile}`, "-m", "-c", "--warn"]);
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

let param = process.argv[2];
console.log(`> ${param}`);
let step = steps[param];
if (step)
    if (typeof step == "function")
        step();
    else
        for (func of step)
            func();
else
    console.error("No such step");