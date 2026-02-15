import { trainCase } from 'string-filters'

export default {
  updated: function (el, binding) {
    if (el.value.length) {
      const options = binding.value || binding.modifiers
      const value = trainCase(el.value, options)
      if (value !== null) el.value = value
    }
  }
}