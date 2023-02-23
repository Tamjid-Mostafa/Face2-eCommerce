export const truncate = (str, length) => {
  if (!str || str.length <= length) return str
  return `${str.slice(0, length)}...`
}
export function capitalize(str) {
  if (!str || typeof str !== 'string') return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}
