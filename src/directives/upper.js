import upperFirst from '../helpers/upperFirst'
import upperEvery from '../helpers/upperEvery'

export default {
  updated: function (el, binding) {
    if (el.value.length && (typeof binding.value === 'undefined' || binding.value)) {
      if (binding.modifiers?.first || binding.value?.first) {
        const capitalize = binding.modifiers?.capitalize || binding.value?.capitalize
        if (binding.modifiers?.every || binding.value?.every) {
          el.value = upperEvery(el.value, capitalize)
        } else {
          el.value = upperFirst(el.value, capitalize)
        }
      } else {
        el.value = el.value.toUpperCase()
      }
    }
  }
}