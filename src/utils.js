const startsWithVowel = string => {
  const vowels = 'aeiou';
  const firstLetter = string[0];
  return vowels.indexOf(firstLetter) !== -1;
}

export { startsWithVowel };