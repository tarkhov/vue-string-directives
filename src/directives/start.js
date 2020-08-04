import startCase from 'lodash/startCase'

export default {
  componentUpdated: function (el, binding) {
    if (typeof binding.value === 'undefined' || binding.value) {
      el.value = startCase(el.value)
    }
  }
}
