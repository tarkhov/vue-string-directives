# Vue string directives

Vue string directives library can change form input value dynamically. All languages are supported.

### Contents

1. [Compatibility](#compatibility)
2. [Installation](#installation)
   1. [NodeJS](#nodejs)
   2. [Manually](#manually)
3. [Usage](#usage)
   1. [CLI](#cli)
   2. [CDN](#cdn)
4. [Examples](#examples)
5. [Author](#author)
6. [License](#license)

## Compatibility

Library | Version
------- | -------
Vue | >= 3.5

## Installation

### NodeJS

```bash
npm install vue-string-directives
```

### Manually

[Download](https://github.com/tarkhov/vue-string-directives/releases/download/v1.0.0/vue-string-directives.zip) package and unpack it or use following commands:

```bash
wget https://github.com/tarkhov/vue-string-directives/releases/download/v1.0.0/vue-string-directives.zip
unzip vue-string-directives.zip
```

## Usage

### CLI

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

### CDN

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue string directives</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.rawgit.com/tarkhov/vue-string-directives/v1.0.0/dist/vue-string-directives.umd.cjs"></script>
  </body>
</html>
```

## Examples

Letter case.

```html
<!-- Uppercase -->
<!-- Input: uppercase. Output: UPPERCASE. -->
<input type="text" v-model="text" v-upper>
<!-- Input: uppercase. Output: Uppercase. -->
<input type="text" v-model="text" v-upper.first>
<!-- Input: uppercase. Output: Uppercase. -->
<input type="text" v-model="text" v-upper.first.capitalize>
<!-- Input: uppercase one two three. Output: Uppercase One Two Three. -->
<input type="text" v-model="text" v-upper.first.every>
<!-- Input: uppercase one two three. Output: Uppercase One Two Three. -->
<input type="text" v-model="text" v-upper.first.capitalize.every>

<!-- Lowercase -->
<!-- Input: UPPERCASE. Output: uppercase. -->
<input type="text" v-model="text" v-lower>
<!-- Input: UPPERCASE. Output: uPPERCASE. -->
<input type="text" v-model="text" v-lower.first>

<!-- Capitalize -->
<!-- Input: uppercase. Output: Uppercase. -->
<input type="text" v-model="text" v-capitalize>
```

Word case.

```html
<!-- Camelcase -->
<!-- Input: camel case. Output: camelCase. -->
<input type="text" v-model="text" v-camel>
<!-- Input: camel case. Output: CamelCase. -->
<input type="text" v-model="text" v-camel.first>
<!-- Input: camel 123 case. Output: camel123Case. -->
<input type="text" v-model="text" v-camel.numbers>
<!-- Input: camel 123 case. Output: Camel123Case. -->
<input type="text" v-model="text" v-camel.first.numbers>

<!-- Kebabcase -->
<!-- Input: kebab case. Output: kebab-case. -->
<input type="text" v-model="text" v-kebab>
<!-- Input: kebab 123 case. Output: kebab-123-case. -->
<input type="text" v-model="text" v-kebab.numbers>

<!-- Snakecase -->
<!-- Input: snake case. Output: snake_case. -->
<input type="text" v-model="text" v-snake>
<!-- Input: snake 123 case. Output: snake_123_case. -->
<input type="text" v-model="text" v-snake.numbers>
```

Replacing.

```html
<!-- Pad -->
<!-- Input: pad. Output: ___pad____. -->
<input type="text" v-model="text" v-pad:10="_">
<!-- Input: pad. Output: _________pad. -->
<input type="text" v-model="text" v-pad:10.start="_">
<!-- Input: pad. Output: pad_______. -->
<input type="text" v-model="text" v-pad:10.end="_">

<!-- Repeat -->
<!-- Input: repeat. Output: repeat-----. -->
<input type="text" v-model="text" v-repeat:5="-">

<!-- Replace -->
<!-- Input: replace123. Output: replace---. -->
<input type="text" v-model="text" v-replace="{ regexp: '[0-9]', flags: 'g', string: '-' }">

<!-- Truncate -->
<!-- Input: truncate. Output: trunc... -->
<input type="text" v-model="text" v-truncate:5="'...'">
```

## Author

* [Twitter](https://x.com/tarkhovich)
* [Medium](https://medium.com/@tarkhov)

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.