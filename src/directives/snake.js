import words from '../helpers/words'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && typeof binding.value === 'undefined' || binding.value) {
      let list = words(el.value, binding.modifiers?.numbers)
      if (list.length > 1) {
        list = list.map(function (value) {
          return value.toLowerCase()
        })
        el.value = list.join('_')
      }
    }
  }
}
