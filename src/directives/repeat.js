export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && binding.arg && binding.value) {
      el.value = el.value + binding.value.repeat(binding.arg)
    }
  }
}
