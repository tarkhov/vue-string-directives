export default function (string, capitalize = false) {
  let first = string.charAt(0).toUpperCase()
  let text = string.slice(1)
  if (capitalize) {
    text = text.toLowerCase()
  }
  return `${first}${text}`
}