export default {
  componentUpdated: function (el, binding) {
    if (binding.value) {
      el.value = el.value.repeat(binding.value)
    }
  }
}
