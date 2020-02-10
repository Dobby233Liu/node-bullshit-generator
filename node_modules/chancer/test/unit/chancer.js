// jscs:disable maximumLineLength
'use strict';

var assert = require('proclaim');
var expect = require('chai').expect;

// jshint maxstatements:21
describe('lib/chancer', function () {
    var chancer;

    beforeEach(function () {
        chancer = require('../../lib/chancer');
    });

    it('should be an object', function () {
        assert.isObject(chancer);
    });

    it('should have a `seed` method', function () {
        assert.isFunction(chancer.seed);
    });

    describe('chancer.seed()', function () {
        it('should return true if a valid integer is passed', function () {
            var result = chancer.seed(123);
            assert.strictEqual(result, true);
        });

        it('should return `undefined` if no arguments specified', function () {
            var result = chancer.seed();
            assert.strictEqual(result, undefined);
        });

        it('should return `undefined` if a non-integer argument is specified', function () {
            var result = chancer.seed('string');
            assert.strictEqual(result, undefined);
        });
    });

    it('should have a `random` method', function () {
        assert.isFunction(chancer.random);
    });

    describe('chancer.random()', function () {
        it('should return a floating-point number between 0 and 1', function () {
            var result = chancer.random();
            assert.greaterThanOrEqual(result, 0);
            assert.lessThan(result, 1);
        });
    });

    it('should have a `float` method', function () {
        assert.isFunction(chancer.float);
    });

    describe('chancer.float()', function () {
        it('should return a floating-point number between 1 and 10', function () {
            var result = chancer.float(1, 10);
            assert.greaterThanOrEqual(result, 1);
            assert.lessThan(result, 10);
        });

        it('should return `undefined` if no arguments specified', function () {
            var result = chancer.float();
            assert.strictEqual(result, undefined);
        });

        it('should return `undefined` if neither argument are numbers', function () {
            var result = chancer.float('zero', 'one');
            assert.strictEqual(result, undefined);
        });
    });

    it('should have a `int` method', function () {
        assert.isFunction(chancer.int);
    });

    describe('chancer.int()', function () {
        it('should return a integer number between 1 and 10', function () {
            var result = chancer.int(1, 10);
            assert.greaterThanOrEqual(result, 1);
            assert.lessThanOrEqual(result, 10);
        });

        it('should return `undefined` if no arguments specified', function () {
            var result = chancer.int();
            assert.strictEqual(result, undefined);
        });

        it('should return `undefined` if no arguments are not numbers', function () {
            var result = chancer.int('zero', 'one');
            assert.strictEqual(result, undefined);
        });
    });

    it('should have a `coinToss` method', function () {
        assert.isFunction(chancer.coinToss);
    });

    describe('chancer.coinToss()', function () {
        it('should return a 0 or 1 to represent a coin toss', function () {
            var result = chancer.coinToss();
            assert.include([0, 1], result);
        });

        it('should return a true or false to represent a coin toss', function () {
            var result = chancer.coinToss(true, false);
            assert.include([true, false], result);
        });

        it('should return a heads or tails to represent a coin toss', function () {
            var result = chancer.coinToss('heads', 'tails');
            assert.include(['heads', 'tails'], result);
        });
    });

    it('should have a `fromArray` method', function () {
        assert.isFunction(chancer.fromArray);
    });

    describe('chancer.fromArray()', function () {
        it('should return a random item from an array', function () {
            var result = chancer.fromArray([0,1,2,3,4,5]);
            assert.include([0,1,2,3,4,5], result);
        });

        it('should return `undefined` if no argument specified', function () {
            var result = chancer.fromArray();
            assert.strictEqual(result, undefined);
        });

        it('should return `undefined` if argument is not an array', function () {
            var result = chancer.fromArray('[0,1,2,3,4,5]');
            assert.strictEqual(result, undefined);
        });
    });

    it('should have a `shuffleArray` method', function () {
        assert.isFunction(chancer.shuffleArray);
    });

    describe('chancer.shuffleArray()', function () {
        it('should return an array shuffled into a random order', function () {
            var result = chancer.shuffleArray([0,1,2,3,4,5]);
            var expected = [0,1,2,3,4,5];
            assert.isArray(result);
            expect(result).to.deep.have.same.members(expected);
            assert.notStrictEqual(result, expected);
        });

        it('should return `undefined` if no argument specified', function () {
            var result = chancer.shuffleArray();
            assert.strictEqual(result, undefined);
        });

        it('should return `undefined` if argument is not an array', function () {
            var result = chancer.shuffleArray('[0,1,2,3,4,5]');
            assert.strictEqual(result, undefined);
        });
    });

    it('should have a `fillArray` method', function () {
        assert.isFunction(chancer.fillArray);
    });

    describe('chancer.fillArray()', function () {
        it('should return an array of integers between 0 and 10 (inclusive)', function () {
            var result = chancer.fillArray(0, 10);
            var expected = [0,1,2,3,4,5,6,7,8,9,10];
            assert.isArray(result);
            expect(result).to.deep.have.same.members(expected);
        });

        it('should return an array of 5 integers between 0 and 10 (inclusive)', function () {
            var result = chancer.fillArray(0, 10, 5);
            var expected = [0,1,2,3,4,5,6,7,8,9,10];
            assert.isArray(result);
            assert.lengthEquals(5);
            for (var i = 0; i < result.length; i++) {
                expect(expected).to.contain(result[i]);
            }
        });
    });

    it('should have a `uuid` method', function () {
        assert.isFunction(chancer.uuid);
    });

    describe('chancer.uuid()', function () {
        it('should return a random value as a universally unique identifier (UUID) version 4', function () {
            var result = chancer.uuid();
            var regex = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
            assert.match(result, regex);
        });
    });
});
