export default function (string, length, chars = ' ') {
  const startLength = Math.floor((length - string.length) / 2) + string.length
  return string.padStart(startLength, chars).padEnd(length, chars)
}