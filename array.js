//Remove falsy values from array
const a = [1, 2, "b", 0, {}, "", NaN, 3, undefined, null, 5, []];
const b = a.filter(Boolean);  //[1, 2, "b", {}, 3, 5, []];

//Remove duplicate values in an array
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));  // [1, 2, 3, 4, 5, 6]

//Chunk 1#
const values = [3, 4, 5, 2, 6, 3, 2, 25, 5, 2, 45, 7];
const chunkSize = 5;
const lengthNew = Math.ceil(values.length / chunkSize); //to cover all values
const chunks = Array.from({ length: lengthNew }).map(() => values.splice(0, chunkSize));
/*Result
chunks = [[3, 4, 5, 2, 6], [3, 2, 25, 5, 2], [45, 7]] 
values = []
*/
