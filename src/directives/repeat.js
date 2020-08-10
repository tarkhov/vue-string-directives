export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && binding.value) {
      el.value = el.value.repeat(binding.value)
    }
  }
}
