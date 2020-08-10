import upperFirst from '../helpers/upperFirst'
import startCase from '../helpers/startCase'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && typeof binding.value === 'undefined' || binding.value) {
      if (binding.modifiers?.first) {
        el.value = upperFirst(el.value)
      } else if (binding.modifiers?.start) {
        el.value = startCase(el.value)
      } else {
        el.value = el.value.toUpperCase()
      }
    }
  }
}
