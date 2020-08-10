import upperFirst from 'upperFirst'

export default function (string) {
  return string.replace(/\p{L}+/gu, function (text) {
    return upperFirst(text)
  })
}
