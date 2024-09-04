# Lateinit

## Installation

```sh
yarn add @liplum/lateinit
# or
npm i @liplum/lateinit
# or
pnpm i @liplum/lateinit
```

## Usage

### Basic usage

```js
import lateinit from "@liplum/lateinit"
let counter = 0
const a = lateinit(() => ++counter)
console.log()
t.assert(a() === 1)
t.assert(a() === 1)
```
