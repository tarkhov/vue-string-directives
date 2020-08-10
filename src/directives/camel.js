import camelCase from 'lodash/camelCase'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && typeof binding.value === 'undefined' || binding.value) {
      el.value = camelCase(el.value)
    }
  }
}
