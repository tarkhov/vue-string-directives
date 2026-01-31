export default {
  updated: function (el, binding) {
    if (el.value.length && binding.value) {
      if (typeof binding.value === 'object') {
        if (binding.value.string && binding.value.count) {
          el.value = el.value + binding.value.string.repeat(binding.value.count)
        }
      } else if (binding.arg) {
        el.value = el.value + binding.value.repeat(binding.arg)
      }
    }
  }
}