import DOMPurify from 'dompurify'

export function formatDate(timestamp) {
  return new Date(timestamp * 1000).toISOString().slice(2, 10)
}

export function trimString(str, n) {
  if (str.length <= n) return str

  const subStr = str.slice(0, n-1)
  return subStr.slice(0, subStr.lastIndexOf(' ')) + '...'
}

export function sanitize(input) {
  return DOMPurify.sanitize(input)
}