import camel from '../directives/camel'
import capitalize from '../directives/capitalize'
import deburr from '../directives/deburr'
import kebab from '../directives/kebab'
import lower from '../directives/lower'
import pad from '../directives/pad'
import repeat from '../directives/repeat'
import replace from '../directives/replace'
import snake from '../directives/snake'
import truncate from '../directives/truncate'
import upper from '../directives/upper'

export default class VueStringDirectives {
  install (Vue) {
    Vue.directive('camel', camel)
    Vue.directive('capitalize', capitalize)
    Vue.directive('deburr', deburr)
    Vue.directive('kebab', kebab)
    Vue.directive('lower', lower)
    Vue.directive('pad', pad)
    Vue.directive('repeat', repeat)
    Vue.directive('replace', replace)
    Vue.directive('snake', snake)
    Vue.directive('truncate', truncate)
    Vue.directive('upper', upper)
  }
}
