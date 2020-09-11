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

const exampleJsonExpanded = `[{
  "first-name": "Jeff",
  "last-name": "Green",
  "address": {
  "city-and-state": "Boston, MA",
  "zip": "12345-1234"
  },
  "pets": [{
  "pet-gender": "male",
  "pet-name": "Bruno"
  }, {
  "pet-gender": "female",
  "pet-name": "Lana-Kane"
  }]
  }]`;

function transformKebabCaseToCamelCase(data) {
  const parsedData = JSON.parse(data);
  const camelCasedData = handleDataType(parsedData);
  return JSON.stringify(camelCasedData);
}

function handleDataType(data) {
  if (typeof data === "object") {
    return Array.isArray(data) ? handleArrayData(data) : handleObjectData(data);
  } else {
    return data;
  }
}

// this function can handle either array or object, chose to split
// to eliminate running transformKey(key) on array indexes
function handleObjectData(data) {
  let camelCaseData = {};
  for (const [key, value] of Object.entries(data)) {
    camelCaseData[transformKey(key)] = handleDataType(value);
  }
  return camelCaseData;
}

function handleArrayData(data) {
  return data.map((element) => handleDataType(element));
}

function transformKey(key) {
  let camelCaseKey = "";
  for (let i = 0; i < key.length; i++) {
    if (key.charAt(i - 1) === "-") {
      camelCaseKey += key.charAt(i).toUpperCase();
    } else if (key.charAt(i) !== "-") {
      camelCaseKey += key.charAt(i);
    }
  }
  return camelCaseKey;
}

const result = transformKebabCaseToCamelCase(exampleJson);
console.log(result);
console.log("expanded", transformKebabCaseToCamelCase(exampleJsonExpanded));
document.getElementById("app").innerHTML = result;
