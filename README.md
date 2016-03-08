# Functional Switch

> A functional implementation of switch.

This library is in alpha now. It would be great if you help me try it.

## Installation

`npm install functional-switch --save`

## Usage

```js
import { cond, when, otherwise } from 'functional-switch'

// simple example
const isFruitOrVegetable = cond(
  when('apple', 'isFruit'),
  when('orange', 'isFruit'),
  when('eggplant', () => {
    return 'isVegetable'
  }),
  otherwise('isFruit')
)

isFruitOrVegetable('apple') // isFruit
```

## API

### `when()`

```js
when(
  clause: any,
  statement: any
): [clause, statement]
```

### `otherwise()`

```js
otherwise(
  statement: any
): [statement]
```

### `cond()`

```js
cond(
  ...conditions: [clause, statement] | [statement]
): (expression: any) => any
```
