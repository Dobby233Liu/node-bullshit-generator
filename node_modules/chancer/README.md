Chancer
=======

[![NPM version][shield-npm]][info-npm]
[![Node.js version support][shield-node]][info-node]
[![MIT licensed][shield-license]][info-license]
[![Code coverage][shield-coverage]][info-coverage]
[![Build status][shield-build]][info-build]

Simple collection of tools for generating random behaviour in Javascript. Uses a [Mersenne Twister](https://www.npmjs.com/package/mersenne-twister) for more accurate random behaviour and repeatability.

Try out the [test page](http://howlingmad.github.io/chancer/) in your browser.

Getting Started
---------------

You can use Chancer on the server side with [Node.js](node) and npm:

```sh
npm install chancer
```

you can then include *Chancer* in your script by using require:

```js
var chancer = require('chancer');
```

On the client side, you can include *Chancer* in your page (found in [build/chancer.js](build/chancer.js)):

```html
<script src="chancer.js"></script>
```

If you're including via a ```<script>``` tag, ```chancer``` is available as a global variable.

Seeding
-------

You can specify a particular seed in order to get a repeatable random sequence:

### chancer.seed( num )
Generates a seed that will always produce the same random sequence  
**num:** *(number)* Integer to use as seed 
```js
chancer.seed(123);
```

Methods
-------

### chancer.random()
Generates a floating-point number between 0 and 1  
**return:** *(float)* Returns the floating point number
```js
chancer.random(); // 0.32831766246818006
```

### chancer.float( min, max )
Generates a floating-point number between *min* (inclusive) and *max* (exclusive)   
**min:** *(number)* Minimum inclusive number  
**max:** *(number)* Maximum exclusive number  
**return:** *(float)* Returns the floating point number
```js
chancer.float(1, 10); // 2.794354454614222
```

### chancer.int( min, max )
Generates an integer between *min* (inclusive) and *max* (inclusive)  
**min:** *(number)* Minimum inclusive number  
**max:** *(number)* Maximum inclusive number  
**return:** *(integer)* Returns the integer number
```js
chancer.int(1, 10); // 3
```

### chancer.coinToss( heads, tails )
Generates a 0 or 1 to represent a coin toss  
Optionally associate any other values for the coin sides (true/false, yes/no, heads/tails, etc)  
**heads:** Value for the head  
**tails:** Value for the tails  
**return:** Returns the chosen value
```js
chancer.coinToss(); // 1
chancer.coinToss(true, false); // true
chancer.coinToss('heads', 'tails'); // tails
```

### chancer.fromArray( arr )
Generates a random item from an array  
**arr:** *(array)* Array of items  
**return:** *(integer)* Returns the randomly selected item
```js
chancer.fromArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]); // 6
```

### chancer.shuffleArray( arr )
Generates an array shuffled into a random order  
**arr:** *(array)* Array of items  
**return:** *(array)* Returns the array shuffled into a random order
```js
chancer.shuffleArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]); // [7, 3, 9, 4, 1, 6, 2, 5, 8]
```

### chancer.fillArray( min, max, total )
Generates an array of integers between *min* (inclusive) and *max* (inclusive)  
If no *total* specified return all possible values between *min* and *max*  
**min:** *(number)* Minimum inclusive number  
**max:** *(number)* Maximum inclusive number  
**total:** *(number)* Total number of results | all   
**return:** *(array)* Returns the chosen values
```js
chancer.fillArray(1,10); // [3, 5, 4, 1, 6, 7, 8, 2, 10, 9]
chancer.fillArray(1,100,10); // [40, 66, 74, 39, 17, 99, 50, 70, 6, 15]
```

### chancer.uuid()
Generates a random value as a universally unique identifier (UUID) version 4 (RFC4122)   
**return:** *(string)* Returns string representation of a UUIDv4
```js
chancer.uuid(); // 73f765b2-958a-45fb-be10-b9fcebdd6838
```

## Browser Support
Tested in the following browsers

Chrome  | Opera | Firefox | Safari | IE | iOS | Android | WindowsPhone
-------- | -------- | -------- | -------- | -------- | -------- | -------- | --------
![chrome](http://browserbadge.com/chrome/15) | ![Opera](http://browserbadge.com/opera/10) | ![firefox](http://browserbadge.com/firefox/3) | ![safari](http://browserbadge.com/safari/4) |  ![ie](http://browserbadge.com/ie/6) | 3+ | 2.2+ | 8.1+

License
-------

Chancer is licensed under the [MIT][info-license] license.  
Copyright &copy; 2015, Alex Kilgour

[info-npm]: https://www.npmjs.com/package/chancer
[info-node]: package.json
[info-license]: LICENSE
[info-coverage]: https://coveralls.io/github/howlingmad/chancer
[info-build]: https://travis-ci.org/howlingmad/chancer

[shield-npm]: https://img.shields.io/npm/v/chancer.svg
[shield-node]: https://img.shields.io/badge/node.js%20support-0.12–4-brightgreen.svg
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg
[shield-coverage]: https://img.shields.io/coveralls/howlingmad/chancer.svg
[shield-build]: https://img.shields.io/travis/howlingmad/chancer/master.svg
