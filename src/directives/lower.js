export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && (typeof binding.value === 'undefined' || binding.value)) {
      if (binding.modifiers?.first || binding.value?.first) {
        el.value = el.value.charAt(0).toLowerCase() + el.value.slice(1)
      } else {
        el.value = el.value.toLowerCase()
      }
    }
  }
}
