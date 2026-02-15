export default {
  updated: function (el, binding) {
    if (el.value.length) {
      el.value = el.value.replace(new RegExp(binding.value.regexp, binding.value.flags), binding.value.string || '')
    }
  }
}