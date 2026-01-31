import upperFirst from '../helpers/upperFirst'
import words from '../helpers/words'

export default {
  updated: function (el, binding) {
    if (el.value.length && (typeof binding.value === 'undefined' || binding.value)) {
      let list = words(el.value, binding.modifiers?.numbers || binding.value?.numbers)
      if (list.length > 1) {
        if (binding.modifiers?.first || binding.value?.first) {
          list = list.map(function (value) {
            return upperFirst(value)
          })
        } else {
          let first = list.shift()
          list = list.map(function (value) {
            return upperFirst(value)
          })
          list.unshift(first)
        }
        el.value = list.join('')
      }
    }
  }
}