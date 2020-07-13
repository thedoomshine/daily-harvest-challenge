// randomly generated string function
// https://stackoverflow.com/a/10727155

export default (length = 8) => {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1)
}
