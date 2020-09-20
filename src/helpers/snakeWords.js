export default function (string, numbers = false) {
  if (numbers) {
    return string.match(/[\p{L}\p{N}_]+/gu)
  } else {
    return string.match(/[\p{L}_]+/gu)
  }
}
