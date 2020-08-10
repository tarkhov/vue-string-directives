import upperFirst from '../helpers/upperFirst'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && typeof binding.value === 'undefined' || binding.value) {
      el.value = upperFirst(el.value, true)
    }
  }
}
