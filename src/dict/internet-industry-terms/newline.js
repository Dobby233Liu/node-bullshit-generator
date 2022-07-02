module.exports = function newline(orig) {
    // From the original code we see that when the generator runs into a $
    // and the paragraph is getting long, it finishes the paragraph.
    // Make the generator make a new line for us.
    return orig + "\n";
};
