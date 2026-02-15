import { titleCase } from 'string-filters'

export default {
  updated: function (el, binding) {
    if (el.value.length) {
      const lower = binding.modifiers?.lower || binding.value?.lower
      const value = titleCase(el.value, lower)
      if (value !== null) el.value = value
    }
  }
}