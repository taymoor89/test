export default function (str) {
  //immediatly return if string is not provided or is empty
  if(!str) return 0;
  
  //validate string is alphanumeric
  const regex = /^[a-z0-9]+$/;
  if(!RegExp(regex, 'i').test(str))
    throw new Error('String must be aplhanumeric');
  
  let count = 0;
  let frequencies = {};
  
  //calculate frequency for each character
  for(let char of str) {
  	char = char.toLowerCase();
    if(frequencies[char])
      frequencies[char]++;
    else
      frequencies[char] = 1;
  }

	//count characters that are appeared more than once
  for(let char of Object.keys(frequencies)) {
    if(frequencies[char] > 1)
      count++;
  }
  
  return count;
}