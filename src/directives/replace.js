export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && binding.value && binding.value.regexp) {
      el.value = el.value.replace(new RegExp(binding.value.regexp, binding.value.flags), binding.value.string || '')
    }
  }
}
