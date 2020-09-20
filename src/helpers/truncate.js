export default function (string, length = 32, omission='...') {
  return string.substring(0, length) + omission
}
