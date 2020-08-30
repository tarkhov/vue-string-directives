import upperFirst from '../helpers/upperFirst'
import words from '../helpers/words'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && typeof binding.value === 'undefined' || binding.value) {
      let list = words(el.value, binding.modifiers?.numbers)
      if (list.length > 1) {
        if (binding.modifiers?.first) {
          list = list.map(function (value) {
            return upperFirst(value, true)
          })
        } else {
          let first = list.shift().toLowerCase()
          list = list.map(function (value) {
            return upperFirst(value, true)
          })
          list.unshift(first)
        }
        el.value = list.join('')
      }
    }
  }
}
