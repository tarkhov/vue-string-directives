import { camelCase } from 'string-filters'

export default {
  updated: function (el, binding) {
    if (el.value.length) {
      const options = binding.value || binding.modifiers
      const value = camelCase(el.value, options)
      if (value !== null) el.value = value
    }
  }
}