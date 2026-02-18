# Vue String Directives

Vue string directives library can change form input value dynamically. All languages are supported.

### Contents

1. [Compatibility](#compatibility)
2. [Installation](#installation)
   1. [NPM](#npm)
3. [Usage](#usage)
   1. [Camel case](#camel-case)
   2. [Capitalize](#capitalize)
   3. [Flat case](#flat-case)
   4. [Kebab case](#kebab-case)
   5. [Lower case](#lower-case)
   6. [Pad](#pad)
   7. [Pascal case](#pascal-case)
   8. [Repeat](#repeat)
   9. [Replace](#replace)
   10. [Snake case](#snake-case)
   11. [Title case](#title-case)
   12. [Train case](#train-case)
   13. [Truncate](#truncate)
   14. [Upper case](#upper-case)
4. [Author](#author)
5. [License](#license)

## Compatibility

Library | Version
------- | -------
Vue | >= 3.5

## Installation

### NPM

```bash
npm install vue-string-directives
```

## Usage

Add following code to your `main.js` file created by Vue CLI:

```js
import { createApp } from 'vue'
import { VueStringDirectives } from 'vue-string-directives'
import App from './App.vue'

const app = createApp(App)
app.use(VueStringDirectives)
app.mount('#app')
```

Alternatively you can use a specific directive to import it into a specific component:

```js
import { upper, lower } from 'vue-string-directives'

export default {
 directives: {
   upper,
   lower
  }
}
```

Also you can import all directives to component:

```js
import { StringDirectivesMixin } from 'vue-string-directives'

export default {
 mixins: [StringDirectivesMixin]
}
```

### Camel case

```js
const camel = defineModel('camel')
```

```html
<template>
  <!-- Input: camel 123 case. Output: camelCase. -->
  <input type="text" v-model="camel" v-camel>

  <!-- Input: camel 123 case. Output: camel123Case. -->
  <input type="text" v-model="camel" v-camel.numbers>
  <!-- Or -->
  <input type="text" v-model="camel" v-camel="{ numbers: true }">

  <!-- Input: cameL 123 casE. Output: camelCase. -->
  <input type="text" v-model="camel" v-camel.lower>
  <!-- Or -->
  <input type="text" v-model="camel" v-camel="{ lower: true }">

  <!-- Input: cameL 123 casE. Output: camel123Case. -->
  <input type="text" v-model="camel" v-camel.numbers.lower>
  <!-- Or -->
  <input type="text" v-model="camel" v-camel="{ numbers: true, lower: true }">
</template>
```

### Capitalize

```js
const capitalize = defineModel('capitalize')
```

```html
<template>
  <!-- Input: capitalize. Output: Capitalize. -->
  <input type="text" v-model="capitalize" v-capitalize>

  <!-- Input: cApitalizE. Output: Capitalize. -->
  <input type="text" v-model="capitalize" v-capitalize.lower>
  <!-- Or -->
  <input type="text" v-model="capitalize" v-capitalize="{ lower: true }">
</template>
```

### Flat case

```js
const flat = defineModel('flat')
```

```html
<template>
  <!-- Input: Flat 123 Case. Output: flatcase. -->
  <input type="text" v-model="flat" v-flat>

  <!-- Input: Flat 123 Case. Output: flat123case. -->
  <input type="text" v-model="flat" v-flat.numbers>
  <!-- Or -->
  <input type="text" v-model="flat" v-flat="{ numbers: true }">
</template>
```

### Kebab case

```js
const kebab = defineModel('kebab')
```

```html
<template>
  <!-- Input: Kebab 123 Case. Output: kebab-case. -->
  <input type="text" v-model="kebab" v-kebab>

  <!-- Input: Kebab 123 Case. Output: kebab-123-case. -->
  <input type="text" v-model="kebab" v-kebab.numbers>
  <!-- Or -->
  <input type="text" v-model="kebab" v-kebab="{ numbers: true }">
</template>
```

### Lower case

```js
const lower = defineModel('lower')
```

```html
<template>
  <!-- Input: LOWERCASE. Output: lowercase. -->
  <input type="text" v-model="lower" v-lower>

  <!-- Input: LOWERCASE. Output: lOWERCASE. -->
  <input type="text" v-model="lower" v-lower.first>
  <!-- Or -->
  <input type="text" v-model="lower" v-lower="{ first: true }">
</template>
```

### Pad

```js
const lower = defineModel('plowerd')
```

```html
<template>
  <!-- Input: pad. Output: ___pad____. -->
  <input type="text" v-model="pad" v-pad:10="_">
  <!-- Or -->
  <input type="text" v-model="pad" v-pad="{ count: 10, chars: '_' }">

  <!-- Input: pad. Output: _________pad. -->
  <input type="text" v-model="pad" v-pad:10.start="_">
  <!-- Or -->
  <input type="text" v-model="pad" v-pad="{ count: 10, chars: '_', start: true }">

  <!-- Input: pad. Output: pad_______. -->
  <input type="text" v-model="pad" v-pad:10.end="_">
  <!-- Or -->
  <input type="text" v-model="pad" v-pad="{ count: 10, chars: '_', end: true }">
</template>
```

### Pascal case

```js
const pascal = defineModel('pascal')
```

```html
<template>
  <!-- Input: pascal 123 case. Output: PascalCase. -->
  <input type="text" v-model="pascal" v-pascal>

  <!-- Input: pascal 123 case. Output: Pascal123Case. -->
  <input type="text" v-model="pascal" v-pascal.numbers>
  <!-- Or -->
  <input type="text" v-model="pascal" v-pascal="{ numbers: true }">

  <!-- Input: pascaL 123 casE. Output: PascalCase. -->
  <input type="text" v-model="pascal" v-pascal.lower>
  <!-- Or -->
  <input type="text" v-model="pascal" v-pascal="{ lower: true }">

  <!-- Input: pascaL 123 casE. Output: Pascal123Case. -->
  <input type="text" v-model="pascal" v-pascal.numbers.lower>
  <!-- Or -->
  <input type="text" v-model="pascal" v-pascal="{ numbers: true, lower: true }">
</template>
```

### Repeat

```js
const repeat = defineModel('repeat')
```

```html
<template>
  <!-- Input: repeat. Output: repeat-----. -->
  <input type="text" v-model="repeat" v-repeat:5="-">
  <!-- Or -->
  <input type="text" v-model="repeat" v-repeat="{ count: 5, string: '-' }">
</template>
```

### Replace

```js
const replace = defineModel('replace')
```

```html
<template>
  <!-- Input: replace123. Output: replace---. -->
  <input type="text" v-model="replace" v-replace="{ regexp: '[0-9]', flags: 'g', string: '-' }">
</template>
```

### Snake case

```js
const snake = defineModel('snake')
```

```html
<template>
  <!-- Input: Snake 123 Case. Output: snake_case. -->
  <input type="text" v-model="snake" v-snake>

  <!-- Input: Snake 123 Case. Output: snake_123_case. -->
  <input type="text" v-model="snake" v-snake.numbers>
  <!-- Or -->
  <input type="text" v-model="snake" v-snake="{ numbers: true }">
</template>
```

### Title case

```js
const title = defineModel('title')
```

```html
<template>
  <!-- Input: title 123 case. Output: Title Case. -->
  <input type="text" v-model="title" v-title>

  <!-- Input: title 123 case. Output: Title 123 Case. -->
  <input type="text" v-model="title" v-title.numbers>
  <!-- Or -->
  <input type="text" v-model="title" v-title="{ numbers: true }">

  <!-- Input: titlE 123 casE. Output: Title Case. -->
  <input type="text" v-model="title" v-title.lower>
  <!-- Or -->
  <input type="text" v-model="title" v-title="{ lower: true }">

  <!-- Input: titlE 123 casE. Output: Title 123 Case. -->
  <input type="text" v-model="title" v-title.numbers.lower>
  <!-- Or -->
  <input type="text" v-model="title" v-title="{ numbers: true, lower: true }">
</template>
```

### Train case

```js
const train = defineModel('train')
```

```html
<template>
  <!-- Input: train 123 case. Output: Train-Case. -->
  <input type="text" v-model="train" v-train>

  <!-- Input: train 123 case. Output: Train-123-Case. -->
  <input type="text" v-model="train" v-train.numbers>
  <!-- Or -->
  <input type="text" v-model="train" v-train="{ numbers: true }">

  <!-- Input: traiN 123 casE. Output: Train-Case. -->
  <input type="text" v-model="train" v-train.lower>
  <!-- Or -->
  <input type="text" v-model="train" v-train="{ lower: true }">

  <!-- Input: traiN 123 casE. Output: Train-123-Case. -->
  <input type="text" v-model="train" v-train.numbers.lower>
  <!-- Or -->
  <input type="text" v-model="train" v-train="{ numbers: true, lower: true }">
</template>
```

### Truncate

```js
const truncate = defineModel('truncate')
```

```html
<template>
  <!-- Input: truncate. Output: trunc... -->
  <input type="text" v-model="truncate" v-truncate:5="'...'">
  <!-- Or -->
  <input type="text" v-model="truncate" v-truncate="{ count: 5, omission: '...' }">
</template>
```

### Upper case

```js
const upper = defineModel('upper')
```

```html
<template>
  <!-- Input: uppercase. Output: UPPERCASE. -->
  <input type="text" v-model="upper" v-upper>

  <!-- Input: uppercase. Output: Uppercase. -->
  <input type="text" v-model="upper" v-upper.first>
  <!-- Or -->
  <input type="text" v-model="upper" v-upper="{ first: true }">

  <!-- Input: uppercase one two three. Output: Uppercase One Two Three. -->
  <input type="text" v-model="upper" v-upper.first.every>
  <!-- Or -->
  <input type="text" v-model="upper" v-upper="{ first: true, every: true }">
</template>
```

## Author

* [Twitter](https://x.com/tarkhovich)
* [Medium](https://medium.com/@tarkhov)

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.