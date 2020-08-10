export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && binding.value && binding.value.regex && binding.value.string) {
      el.value = el.value.replace(binding.value.regex, binding.value.string)
    }
  }
}
