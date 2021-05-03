module.exports = function newline(orig) {
    // From the original code we see that when the generator runs into a $
    // and the paragraph is getting long, it finishes the paragraph.
    // Tab characters are now hardcoded in config, so this doesn't matter.
    return orig + "\n" + "    ";
}
