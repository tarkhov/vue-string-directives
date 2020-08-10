import truncate from 'lodash/truncate'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && binding.value) {
      el.value = truncate(el.value, binding.value)
    }
  }
}
