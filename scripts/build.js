/**
 * 需要串联运行的生成步骤
 * @author Dobby233Liu
 * @see {@link https://docgov.dev/posts/npm-scripts/}
 */

const process = require("process");
const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const rimraf = require("rimraf");

const cwdTrue = path.join(__dirname, "..");

const exec = (cmd, args = [], cwd = cwdTrue) => {
    console.log(`> ${cmd} ${args.join(" ")}`);
    const data = spawnSync(cmd, args, {
        stdio: "inherit",
        shell: true,
        cwd: cwd,
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

const srcDir = "src";
const libDir = "lib";
const distDir = "dist";
const libBrowserName = "bullshit";

/* not 狗屁库.js, otherwise when the script gets to the
   browserify step, it would just fail mysteriously */
const libFile = "bullshit.js";
const libFileDistTemp = `${distDir}/bullshit.js`;
const libMinifiedFileTemp = `${distDir}/bullshit.min.js`;
const libFileDist = `${distDir}/狗屁库.js`;
const libMinifiedFile = `${distDir}/狗屁库.min.js`;

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
const npx = `"${findExecutable("npx")}"`;

// TODO: probably rewrite this to use babel api
// when my brain is ready
const runBabel = () => exec(npx, ["babel", srcDir, "--out-dir", libDir]);

// TODO: probably rewrite this to use browserify api
const runBundle = () =>
    exec(npx, [
        "browserify",
        "-e",
        `${libDir}/${libFile}`,
        "-s",
        libBrowserName,
        "-o",
        libFileDistTemp,
    ]);

// TODO: probably rewrite this to use terser api
const runMinifyBundle = (bundleFile, outputFile) => () =>
    exec(npx, ["terser", bundleFile, "-o", outputFile, "-m", "-c", "--warn"]);

const doMoveFile = (fnOld, fnNew) => {
    console.log(`> mv "${fnOld}" "${fnNew}"`);
    fs.renameSync(fnOld, fnNew);
};
const fixFilenames = () => {
    doMoveFile(libFileDistTemp, libFileDist);
    doMoveFile(libMinifiedFileTemp, libMinifiedFile);
};

const doRm = (dir) => {
    console.log(`> rm -rf "${dir}"`);
    rimraf.sync(dir);
};
const runClean = () => {
    doRm(libDir);
    doRm(distDir);
};

const steps = {
    babel: runBabel,
    bundle: [runClean, runBabel, runBundle, fixFilenames],
    "minify-bundle": [
        runMinifyBundle(libFileDistTemp, libMinifiedFileTemp),
        fixFilenames,
    ],
    "bundle+min": [
        runClean,
        runBabel,
        runBundle,
        runMinifyBundle(libFileDistTemp, libMinifiedFileTemp),
        fixFilenames,
    ],
    clean: runClean,
};

function main() {
    const param = process.argv[2];
    console.log(`> ${param}`);
    const step = steps[param];
    if (step)
        if (typeof step == "function") step();
        else for (func of step) func();
    else {
        console.error("No such step: " + step);
        process.exit(1);
    }
}
main();
