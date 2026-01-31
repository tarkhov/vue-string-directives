import truncate from '../helpers/truncate'

export default {
  updated: function (el, binding) {
    let length = el.value.length
    if (length) {
      let omission = '...'
      let count = binding.arg

      if (binding.value) {
        if (typeof binding.value === 'object') {
          if (binding.value.count && binding.value.omission) {
            count = binding.value.count
            omission = binding.value.omission
          }
        } else {
          omission = binding.value
        }
      }

      if (length > count) {
        el.value = truncate(el.value, count, omission)
      }
    }
  }
}