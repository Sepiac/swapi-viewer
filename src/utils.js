const startsWithVowel = string => {
  const vowels = 'aeiou';
  const nullSafeString = string || '';
  const firstLetter = nullSafeString[0];
  return vowels.indexOf(firstLetter) !== -1;
}

const capitalizeFirstLetter = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { startsWithVowel, capitalizeFirstLetter };