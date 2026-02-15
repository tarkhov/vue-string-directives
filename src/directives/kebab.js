import { kebabCase } from 'string-filters'

export default {
  updated: function (el, binding) {
    if (el.value.length) {
      const numbers = binding.modifiers?.numbers || binding.value?.numbers
      const value = kebabCase(el.value, numbers)
      if (value !== null) el.value = value
    }
  }
}