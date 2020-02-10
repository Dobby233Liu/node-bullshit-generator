'use strict';

var MersenneTwister = require('mersenne-twister');
var generator = new MersenneTwister();

var chancer = module.exports = {
    seed: seed,
    random: random,
    float: float,
    int: int,
    coinToss: coinToss,
    fromArray: fromArray,
    shuffleArray: shuffleArray,
    fillArray: fillArray,
    uuid: uuid
};

// Specify a seed in order to get a repeatable random sequence
function seed (num) {
    if (typeof num === 'number' && (num % 1) === 0) {
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        generator.init_seed(num);
        return true;
    }
    else {
        return undefined;
    }
}

// Returns a floating-point number between 0 and 1
function random () {
    return generator.random();
}

// Returns a floating-point number between <min> (inclusive) and <max> (exclusive)
function float (min, max) {
    if (typeof min === 'number' && typeof max === 'number') {
        return generator.random() * (max - min) + min;
    }
    else {
        return undefined;
    }
}

// Returns an integer between <min> (inclusive) and <max> (inclusive)
function int (min, max) {
    if (typeof min === 'number' && typeof max === 'number') {
        return Math.floor(generator.random() * (max - min + 1)) + min;
    }
    else {
        return undefined;
    }
}

// Returns a 0 or 1 to represent a coin toss
// Optionally associate any other values for the coin sides (true/false, yes/no, heads/tails, etc)
function coinToss (heads, tails) {
    var first = (typeof heads !== 'undefined') ? heads : 0;
    var second = (typeof tails !== 'undefined') ? tails : 1;
    return (Math.floor(generator.random() * 2) === 0) ? first : second;
}

// Returns a random item from an array
function fromArray (obj) {
    if (typeof obj !== 'undefined' && obj && obj.constructor === Array) {
        return obj[Math.floor(generator.random() * obj.length)];
    }
    else {
        return undefined;
    }
}

// Returns an array shuffled into a random order
function shuffleArray (obj) {
    if (typeof obj !== 'undefined' && obj && obj.constructor === Array) {
        return shuffle(obj);
    }
    else {
        return undefined;
    }
}
function shuffle (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        var j = chancer.int(0, i);
        /* istanbul ignore else  */
        if (j !== i) {
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    return arr;
}

// Returns an array of integers between <min> (inclusive) and <max> (inclusive)
// If no <total> specified return all possible values between <min> and <max>
function fillArray (min, max, total) {
    if (typeof min === 'number' && typeof max === 'number') {
        var num = (total) ? total : (max - min) + 1;
        var arr;
        /* istanbul ignore else  */
        if (typeof num === 'number' && (((max - min) + 1) >= num)) {
            arr = generateArray(min, max, num);
        }
        return arr;
    }
    else {
        return undefined;
    }
}
function generateArray (min, max, total) {
    var arr = [];
    while (arr.length < total) {
        var randomNumber = chancer.int(min, max);
        var found = false;
        for (var i = 0; i < arr.length; i++) {
            /* istanbul ignore else  */
            if (arr[i] === randomNumber) {
                found = true;
                break;
            }
        }
        /* istanbul ignore else  */
        if (!found) {
            arr[arr.length] = randomNumber;
        }
    }
    return arr;
}

// Returns a random value as a universally unique identifier (UUID) version 4 (RFC4122)
// xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
// where x is any hexadecimal digit and y is one of 8, 9, A, or B
// e.g., efe1f2aa-1e99-40f2-83fa-8519acd8c34c
function uuid () {
    var template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return template.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
