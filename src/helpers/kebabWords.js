export default function (string, numbers = false) {
  if (numbers) {
    return string.match(/[\p{L}\p{N}-]+/gu)
  } else {
    return string.match(/[\p{L}-]+/gu)
  }
}