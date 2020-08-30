export default function (string, numbers = true) {
  let regExp = '[\\p{L}'
  if (numbers === true) {
    regExp += '\\p{N}'
  }
  regExp += ']+'
  return string.match(new RegExp(regExp, 'gu'))
}
