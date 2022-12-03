function generateHashtag(str) {
  // checking for undefined or empty string input
  if (typeof str === 'undefined' || str.trim().length === 0) {
    return false
  }
  // we convert input into an array to use map and aply uppercase to the first letter of each word
  const arrayStr = str.trim().split(' ')
  const capitalizedStr = arrayStr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )
  // we add # to the beginning of the hashtag and return it if its total length is less than 140 characters
  const hashtag = `#${capitalizedStr.join('')}`
  return hashtag.length > 140 ? false : hashtag
}
