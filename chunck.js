const values = [3, 4, 5, 2, 6, 3, 2, 25, 5, 2, 45, 7];
const chunkSize = 5;
const lengthNew = Math.ceil(values.length / chunkSize); //to cover all values
const chunks = Array.from({ length: lengthNew }).map(() => values.splice(0, chunkSize));

/*Result
chunks = [[3, 4, 5, 2, 6], [3, 2, 25, 5, 2], [45, 7]] 
values = []
*/
