import { createApp } from 'vue'
import camel from './directives/camel'
import capitalize from './directives/capitalize'
import kebab from './directives/kebab'
import lower from './directives/lower'
import pad from './directives/pad'
import repeat from './directives/repeat'
import replace from './directives/replace'
import snake from './directives/snake'
import truncate from './directives/truncate'
import upper from './directives/upper'
import StringDirectivesMixin from './mixins/StringDirectivesMixin'

const VueStringDirectives = {
  install(app) {
    app.directive('camel', camel)
    app.directive('capitalize', capitalize)
    app.directive('kebab', kebab)
    app.directive('lower', lower)
    app.directive('pad', pad)
    app.directive('repeat', repeat)
    app.directive('replace', replace)
    app.directive('snake', snake)
    app.directive('truncate', truncate)
    app.directive('upper', upper)
  }
}

const app = createApp({})
app.use(VueStringDirectives)

export {
  camel,
  capitalize,
  kebab,
  lower,
  pad,
  repeat,
  replace,
  snake,
  truncate,
  upper,
  StringDirectivesMixin
}

export default VueStringDirectives