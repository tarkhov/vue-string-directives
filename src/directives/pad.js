import { pad } from 'string-filters'

export default {
  updated: function (el, binding) {
    if (el.value.length) {
      const count = binding.value?.count || binding.arg
      const chars = binding.value?.chars || binding.value
      if (binding.modifiers?.start || binding.value?.start) {
        el.value = el.value.padStart(count, chars)
      } else if (binding.modifiers?.end || binding.value?.end) {
        el.value = el.value.padEnd(count, chars)
      } else {
        el.value = pad(el.value, count, chars)
      }
    }
  }
}