# Simple Promisify
takes a functions expecting a nodestyle callback and returns a functions that returns a promise in stead.

## Batteries are not included
The library does not come with a promise shim

## usage
The promisiify function takes two arguments: the function context, and the function to be curried.

```js

const promisify = require('simple-promisify')
const fs = require('fs')

const readFile = promisify(fs, fs.readFile)

```


## Currying

The promisify function is curried:

```js

const promisify = require('simple-promisify')(null)

const foo = promisify(functionThatDoesNotRelyOnThis)
```
