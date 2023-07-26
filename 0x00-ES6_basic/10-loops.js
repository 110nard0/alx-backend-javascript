export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];

  for (let value of array) {
    let newString = appendString + value;
    newArray.push(newString);
  }
  
  return newArray;
}
