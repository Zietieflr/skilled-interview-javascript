/*
  Given that you have an already valid JSON string where the keys are
  all kebab-case, write a function called transformKebabCaseToCamelCase 
  that takes in this JSON string and returns a JSON string where all
  the keys are transformed to be camelCase.

  Turn a JSON string to an object
    JSON.parse(data: string): object

  Turn an object to a JSON string
    JSON.stringify(data: object): string

  Get the keys of an object into an array
    Object.keys(data: object): Array(string)
  
  Iterate through each key of an object.
    for (const property in object) {
      console.log(`${property}: ${object[property]}`);
    }
*/

const exampleJson = `{
  "first-name": "Jeff",
  "last-name": "Green",
  "city-and-state": "Boston, MA",
  "zip": "12345-1234"
}`;

// Take 2
const exampleJson = `{
  "first-name": "Jeff",
  "last-name": "Green",
  "city-and-state": "Boston, MA",
  "zip": "12345-1234"
}`;

// Take 2
function transformKebabCaseToCamelCase(data) {
  const dataObject = JSON.parse(data);
  let camelCaseData = {};
  for (const [key, value] of Object.entries(dataObject)) {
    camelCaseData[transformKey(key)] = value;
  }
  return JSON.stringify(camelCaseData);
}

function transformKey(key) {
  let camelCaseKey = "";
  let word = "";
  for (let i = 0; i < key.length; i++) {
    if (key.charAt(i) === "-") {
      camelCaseKey += word
      word = "";
    } else if (key.charAt(i -1) === "-") {
      word += key.charAt(i).toUpperCase()
    }else {
      word += key.charAt(i);
    }
  }
  camelCaseKey += word
  return camelCaseKey;
}

const result = transformKebabCaseToCamelCase(exampleJson);
console.log(result);
document.getElementById("app").innerHTML = result;

// Take 1.5
// function transformKebabCaseToCamelCase(data) {
//   const dataObject = JSON.parse(data);
//   const objectKeys = Object.keys(dataObject);
//   let camelCaseData = {};
//   objectKeys.forEach((objectKey) => {
//     camelCaseData[transformKey(objectKey)] = dataObject[objectKey];
//   });
//   return JSON.stringify(camelCaseData);
// }

// function transformKey(key) {
//   const keyWords = key.split("-");
//   for (let i = 1; i < keyWords.length; i++) {
//     keyWords[i] =
//       keyWords[i].charAt(0).toUpperCase() + keyWords[i].substring(1);
//   }
//   return keyWords.join("");
// }

// const result = transformKebabCaseToCamelCase(exampleJson);
// console.log(result);
// document.getElementById("app").innerHTML = result;
