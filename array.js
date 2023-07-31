//Remove falsy values from array
const a = [1, 2, "b", 0, {}, "", NaN, 3, undefined, null, 5, []];
const b = a.filter(Boolean);  //[1, 2, "b", {}, 3, 5, []];

//Remove duplicate values in an array
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));  // [1, 2, 3, 4, 5, 6]
