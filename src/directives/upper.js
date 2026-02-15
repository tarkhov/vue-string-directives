import { capitalize, titleCase } from 'string-filters'

export default {
  updated: function (el, binding) {
    if (el.value.length) {
      const options = binding.value || binding.modifiers
      if (options?.first) {
        if (options?.every) {
          const value = titleCase(el.value)
          if (value !== null) el.value = value
        } else {
          el.value = capitalize(el.value)
        }
      } else {
        el.value = el.value.toUpperCase()
      }
    }
  }
}