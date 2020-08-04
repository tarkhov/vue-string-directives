import kebabCase from 'lodash/kebabCase'

export default {
  componentUpdated: function (el, binding) {
    if (typeof binding.value === 'undefined' || binding.value) {
      el.value = kebabCase(el.value)
    }
  }
}