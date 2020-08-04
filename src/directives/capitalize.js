export default {
  componentUpdated: function (el, binding) {
    if (typeof binding.value === 'undefined' || binding.value) {
      el.value = el.value.charAt(0).toUpperCase() + el.value.slice(1).toLowerCase()
    }
  }
}
