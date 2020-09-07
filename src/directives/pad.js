import pad from '../helpers/pad'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && binding.arg) {
      const chars = binding.value ? binding.value : ' '
      if (binding.modifiers?.start) {
        el.value = el.value.padStart(binding.arg, chars)
      } else if (binding.modifiers?.end) {
        el.value = el.value.padEnd(binding.arg, chars)
      } else {
        el.value = pad(el.value, binding.arg, chars)
      }
    }
  }
}
