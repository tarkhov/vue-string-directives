# Vue string directives

Vue string directives library can change form input value dynamically. All languages are supported.

### Contents

1. [Compatibility](#compatibility)
2. [Installation](#installation)
   1. [NodeJS](#nodejs)
   2. [Manually](#manually)
3. [Usage](#usage)
   1. [CLI](#cli)
   2. [Nuxt](#nuxt)
   3. [Local](#local)
   4. [CDN](#cdn)
4. [Directives](#directives)
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
import VueStringDirectives from 'vue-string-directives'

Vue.use(VueStringDirectives)
```

Your `main.js` will look like this:

```js
import Vue from 'vue'
import App from './App.vue'
import VueStringDirectives from 'vue-string-directives'

Vue.use(VueStringDirectives)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

Alternatively you can use a specific directive to import it into a specific component:

```js
import { upper, lower } from 'vue-string-directives'
export default {
 name: 'MyComponent',
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
 name: 'MyComponent',
 mixins: [StringDirectivesMixin]
}
```

### Nuxt

If you are using nuxt, you need to create a file **vue-string-directives.js** in the plugins folder of your nuxt project with the following content:

```js
import Vue from 'vue'
import VueStringDirectives from 'vue-string-directives'

Vue.use(VueStringDirectives)
```

Then add the following lines to the nuxt.config.js:

```js
plugins: [
 { src: '~plugins/vue-string-directives' }
]
```

### Local

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Vue string directives</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="dist/vue.min.js"></script>
    <script src="vue-string-directives.umd.min.js"></script>
  </body>
</html>
```

### CDN

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Vue string directives</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="https://cdn.rawgit.com/tarkhov/vue-string-directives/v0.1.0/dist/vue-string-directives.umd.min.js"></script>
  </body>
</html>
```

## Directives

Letter case.

```html
<!-- Uppercase -->
<input type="text" v-model="text" v-upper>
<input type="text" v-model="text" v-upper.first>
<input type="text" v-model="text" v-upper.first.capitalize>
<input type="text" v-model="text" v-upper.first.every>
<input type="text" v-model="text" v-upper.first.capitalize.every>

<!-- Lowercase -->
<input type="text" v-model="text" v-lower>
<input type="text" v-model="text" v-lower.first>

<!-- Capitalize -->
<input type="text" v-model="text" v-capitalize>
```

Word case.

```html
<!-- Camelcase -->
<input type="text" v-model="text" v-camel>
<input type="text" v-model="text" v-camel.first>
<input type="text" v-model="text" v-camel.numbers>
<input type="text" v-model="text" v-camel.first.numbers>

<!-- Kebabcase -->
<input type="text" v-model="text" v-kebab>
<input type="text" v-model="text" v-kebab.numbers>

<!-- Snakecase -->
<input type="text" v-model="text" v-snake>
<input type="text" v-model="text" v-snake.numbers>
```

Raplacing.

```html
<!-- Pad -->
<input type="text" v-model="text" v-pad:10="_">
<input type="text" v-model="text" v-pad:10.start="_">
<input type="text" v-model="text" v-pad:10.end="_">

<!-- Repeat -->
<input type="text" v-model="text" v-repeat:5="-">

<!-- Replace -->
<input type="text" v-model="text" v-replace="{ regexp: '[0-9]', flags: 'g', string: '-' }">

<!-- Truncate -->
<input type="text" v-model="text" v-truncate:5="'...'">
```

## Author

* [Twitter](https://x.com/tarkhovich)
* [Medium](https://medium.com/@tarkhov)

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.