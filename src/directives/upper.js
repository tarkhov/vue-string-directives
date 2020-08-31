import upperFirst from '../helpers/upperFirst'
import upperEvery from '../helpers/upperEvery'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && typeof binding.value === 'undefined' || binding.value) {
      if (binding.modifiers?.first) {
        const capitalize = binding.modifiers?.capitalize
        if (binding.modifiers?.every) {
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
