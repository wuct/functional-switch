# Functional Switch

> A functional implementation of switch.

It just an idea right now and I have not written any code, yet. Discussions are welcome!

## Installation

`npm install functional-switch --save`

## Usage

```js
import { cond, when, otherwise } from 'functional-switch'

// simple example
const isFruitOrVegetable = cond(
  when('apple', 'isFruit'),
  when('orange', 'isFruit'),
  when('eggplant', 'isVegetable'),
  otherwise('isFruit')
)

isFruitOrVegetable('apple') // isFruit
```

`when` is curried

```js
when('apple')('isFruit')
```

`when` also accepts a function and a regular expression

```js
when(/apple/)
when(str => str.includes('eggplant'))
```
