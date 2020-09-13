export default function (string, numbers = true) {
  if (numbers) {
    return string.match(/[\p{L}\p{N}]+/gu)
  } else {
    return string.match(/[\p{L}]+/gu)
  }
}
