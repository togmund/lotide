# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Contributors

- [@froyonom](https://github.com/FroyoNom)
- [@togmund](https://github.com/togmund)

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countOnly: (arrayItems: any, itemsToCount: any) => {}`:
  * Count the occurences of values in an array.
* `eqArrays: (arrayOne: any, arrayTwo: any) => boolean`:
  * Compare whether two arrays are perfectly equal.
* `eqObjects: (objectOne: any, objectTwo: any) => boolean`:
  * Compare whether two objects share a perfect set of key:value pairs.
* `findKey: (object: any, value: any) => string`:
  * Find a key in an object when given a possible value.
* `letterPosition: (stringToCount: any) => {}`:
  * Find the positions of each letter in a string (excluding spaces).
* `flatten: (array: any) => any`:
  * Create a single-level array given an array including nested arrays.
* `head: (array: any) => any`:
  * Find the first element of an array.
* `middle: (array: any) => any[]`:
  * Find the middle-most elements of an array.
* `tail: (array: any) => any`:
  * Find all elements excluding the first element of an array.

### Style Choices

#### Functions

- src for functions
- test for tests
- functions
  - Arrow Functions
  - Newlines for function executions
- double-ticks for strings

#### Tests

- Tests are name in camelcase and non plural
- When importing files, we will not be adding .js at the end of a file:

```js

const variable = require(../src/functionName)

```
