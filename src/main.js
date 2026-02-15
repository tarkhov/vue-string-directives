import camel from './directives/camel'
import capitalize from './directives/capitalize'
import flat from './directives/flat'
import kebab from './directives/kebab'
import lower from './directives/lower'
import pad from './directives/pad'
import pascal from './directives/pascal'
import repeat from './directives/repeat'
import replace from './directives/replace'
import snake from './directives/snake'
import title from './directives/title'
import train from './directives/train'
import truncate from './directives/truncate'
import upper from './directives/upper'
import StringDirectivesMixin from './mixins/StringDirectivesMixin'

const VueStringDirectives = {
  install(app) {
    app.directive('camel', camel)
    app.directive('capitalize', capitalize)
    app.directive('flat', flat)
    app.directive('kebab', kebab)
    app.directive('lower', lower)
    app.directive('pad', pad)
    app.directive('pascal', pascal)
    app.directive('repeat', repeat)
    app.directive('replace', replace)
    app.directive('snake', snake)
    app.directive('title', title)
    app.directive('train', train)
    app.directive('truncate', truncate)
    app.directive('upper', upper)
  }
}

export {
  VueStringDirectives,
  camel,
  capitalize,
  flat,
  kebab,
  lower,
  pad,
  pascal,
  repeat,
  replace,
  snake,
  title,
  train,
  truncate,
  upper,
  StringDirectivesMixin
}