import upperFirst from '../helpers/upperFirst'
import words from '../helpers/words'

export default {
  componentUpdated: function (el, binding) {
    if (el.value.length && typeof binding.value === 'undefined' || binding.value) {
      let list = words(el.value)
      if (list.length > 1) {
        let camel = list.map(function (value) {
          return upperFirst(value, true)
        })
        el.value = camel.join('')
      }
    }
  }
}
