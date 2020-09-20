import pad from '../helpers/pad'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length) {
      let count = 0
      let chars = ' '

      if (binding.value) {
        if (typeof binding.value === 'object') {
          if (binding.value.chars && binding.value.count) {
            count = binding.value.count
            chars = binding.value.chars
          }
        } else {
          count = binding.arg
          chars = binding.value
        }
      }

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
