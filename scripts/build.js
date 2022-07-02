/**
 * 需要串联运行的生成步骤
 * @author Dobby233Liu
 * @see {@link https://docgov.dev/posts/npm-scripts/}
 */

let { spawnSync } = require("child_process");
let rimraf = require("rimraf");
const path = require("path");
const fs = require("fs");

let exec = (cmd, args = []) => {
    console.log(`> ${cmd} ${args.join(" ")}`);
    let data = spawnSync(cmd, args, {
        stdio: "inherit",
    });
    if (data.status != 0 || data.signal) {
        console.log("");
        console.error(data);
        console.error(
            `Process ${
                data.signal
                    ? `was killed with signal ${data.signal}`
                    : `exited with code ${data.status}`
            }`
        );
        process.exit(data.signal ? 1 : data.status);
    }
};

const srcDir = "./src";
const libDir = "./lib";
const distDir = "./dist";
const libFile = "bullshit.js";
const libFileDistTemp = `${distDir}/bullshit.js`;
const libMinifiedFileTemp = `${distDir}/bullshit.min.js`;
const libFileDist = `${distDir}/狗屁库.js`;
const libMinifiedFile = `${distDir}/狗屁库.min.js`;
const libBrowserName = "bullshit";

/**
 * @param {string} exe executable name (without extension if on Windows)
 * @return {Promise<string|null>} executable path if found
 * @see {@link https://abdus.dev/posts/checking-executable-exists-in-path-using-node/}
 * */
function findExecutable(exe) {
    const envPath = process.env.PATH || "";
    const envExt = process.env.PATHEXT || "";
    const pathDirs = envPath
        .replace(/["]+/g, "")
        .split(path.delimiter)
        .filter(Boolean);
    const extensions = envExt.split(";");
    const candidates = pathDirs.flatMap((d) =>
        extensions.map((ext) => path.join(d, exe + ext))
    );
    for (filePath of candidates)
        try {
            if (fs.statSync(filePath).isFile()) return filePath;
        } catch (e) {}
    throw new Error("Did not find executable: " + exe);
}
let npx = findExecutable("npx");
let runBabel = () => exec(npx, ["babel", srcDir, "--out-dir", libDir]);
let runBundle = () =>
    exec(npx, [
        "browserify",
        "-e",
        `${libDir}/${libFile}`,
        "-s",
        libBrowserName,
        "-o",
        `${libFileDistTemp}`,
    ]);
let runMinifyBundle = () =>
    exec(npx, [
        "terser",
        `${libFileDistTemp}`,
        "-o",
        `${libMinifiedFileTemp}`,
        "-m",
        "-c",
        "--warn",
    ]);
let doMoveFile = (fnOld, fnNew) => {
    console.log(`> mv "${fnOld}" "${fnNew}"`);
    fs.renameSync(fnOld, fnNew)
}
let fixFilenames = () => {
    doMoveFile(libFileDistTemp, libFileDist);
    doMoveFile(libMinifiedFileTemp, libMinifiedFile);
}
let doRimraf = (dir) => {
    console.log(`> rimraf "${dir}"`);
    rimraf.sync(dir);
};
let runClean = () => {
    doRimraf(libDir);
    doRimraf(distDir);
};

let steps = {
    babel: runBabel,
    bundle: [runBabel, runBundle, fixFilenames],
    "minify-bundle": [runMinifyBundle, fixFilenames],
    "bundle+min": [runBabel, runBundle, runMinifyBundle, fixFilenames],
    clean: runClean,
};

let param = process.argv[2];
console.log(`> ${param}`);
let step = steps[param];
if (step)
    if (typeof step == "function") step();
    else for (func of step) func();
else console.error("No such step");
