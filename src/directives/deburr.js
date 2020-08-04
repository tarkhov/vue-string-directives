import deburr from 'lodash/deburr'

export default {
  componentUpdated: function (el, binding) {
    if (typeof binding.value === 'undefined' || binding.value) {
      el.value = deburr(el.value)
    }
  }
}
