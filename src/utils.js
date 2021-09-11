import moment from "moment";

const startsWithVowel = string => {
  const vowels = 'aeiou';
  const nullSafeString = string || '';
  const firstLetter = nullSafeString[0];
  return vowels.indexOf(firstLetter) !== -1;
}

const capitalizeFirstLetter = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getFormattedDate = (dateString = '') => {
  return moment(dateString).format('MM/DD/yyyy')
}

export { startsWithVowel, capitalizeFirstLetter, getFormattedDate };