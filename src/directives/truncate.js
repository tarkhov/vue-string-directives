import { truncate } from 'string-filters'

export default {
  updated: function (el, binding) {
    let length = el.value.length
    if (length) {
      let omission = binding.value?.omission || binding.value
      let count = binding.value?.count || binding.arg
      if (length > count) el.value = truncate(el.value, count, omission)
    }
  }
}