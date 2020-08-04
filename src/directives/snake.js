import snakeCase from 'lodash/snakeCase'

export default {
  componentUpdated: function (el, binding) {
    if (typeof binding.value === 'undefined' || binding.value) {
      el.value = snakeCase(el.value)
    }
  }
}
