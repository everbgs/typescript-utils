interface User {
  name: string;
} 

function isUser(value: unknown): value is User {
  return typeof value === "object" && value !== null && "name" in value;
}

function assertIsUser(value: unknown): asserts value is User {
  if (typeof value !== "object" || value === null || !("name" in value)) {
    throw new Error("Expected a User");
  }
}

const data = JSON.parse('{"name": "Stefan"}'); 
if (isUser(data))
  data.name.toUpperCase(); //restrito dentro do escopo da condição 
 
const data2 = JSON.parse('{"name": "Stefan"}'); 
assertIsUser(data2); //Exception se não for um User
 
data.name.toUpperCase(); //restrito após a assertion
