export default {
  componentUpdated: function (el, binding) {
    if (binding.arg) {
      const chars = binding.value ? binding.value : ' '
      if (binding.modifiers?.start) {
        el.value = el.value.padStart(binding.arg, chars)
      } else if (binding.modifiers?.end) {
        el.value = el.value.padEnd(binding.arg, chars)
      } else {
        el.value = el.value.padStart(binding.arg, chars).padEnd(binding.arg, chars)
      }
    }
  }
}
