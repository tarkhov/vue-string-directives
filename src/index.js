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

const VueStringDirectives = {
  install (Vue) {
    Vue.directive('camel', camel)
    Vue.directive('capitalize', capitalize)
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

export default VueStringDirectives

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueStringDirectives)
}
