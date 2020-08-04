import truncate from 'lodash/truncate'

export default {
  componentUpdated: function (el, binding) {
    if (binding.value) {
      el.value = truncate(el.value, binding.value)
    }
  }
}
