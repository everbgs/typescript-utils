//Remove falsy values from array
const a = [1, 2, "b", 0, {}, "", NaN, 3, undefined, null, 5, []];
const b = a.filter(Boolean);  //[1, 2, "b", {}, 3, 5, []];

//Remove duplicate values in an array
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));  // [1, 2, 3, 4, 5, 6]

//Chunk 1#
const values = [3, 4, 5, 2, 6, 3, 2, 25, 5, 2, 45, 7];
const chunkSize = 5;
const chunks = Array.from({ length: Math.ceil(values.length / chunkSize) })
                    .map(() => values.splice(0, chunkSize));
/*Result
chunks = [[3, 4, 5, 2, 6], [3, 2, 25, 5, 2], [45, 7]] 
values = []
*/

//Chunk 2#
const values = [3, 4, 5, 2, 6, 3, 2, 25, 5, 2, 45, 7];
const chunkSize = 5;
const chunks = new Array(Math.ceil(values.length / chunkSize));
let index = 0, cindex = 0;
while (index < values.length)
    chunks[cindex++] = values.slice(index, (index += chunkSize))
/*Result
chunks = [[3, 4, 5, 2, 6], [3, 2, 25, 5, 2], [45, 7]] 
values = [3, 4, 5, 2, 6, 3, 2, 25, 5, 2, 45, 7]
*/
