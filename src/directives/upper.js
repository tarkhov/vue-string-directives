import upperFirst from '../helpers/upperFirst'
import startCase from '../helpers/startCase'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && typeof binding.value === 'undefined' || binding.value) {
      if (binding.modifiers?.first) {
        if (binding.modifiers?.every) {
          el.value = startCase(el.value)
        } else {
          el.value = upperFirst(el.value)
        }
      } else {
        el.value = el.value.toUpperCase()
      }
    }
  }
}
