import upperFirst from './upperFirst'

export default function (string, capitalize = false) {
  return string.replace(/\p{L}+/gu, function (text) {
    return upperFirst(text, capitalize)
  })
}