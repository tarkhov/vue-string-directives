import truncate from '../helpers/truncate'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && binding.value) {
      const omission = binding.value ? binding.value : '...'
      el.value = truncate(el.value, binding.arg, omission)
    }
  }
}
