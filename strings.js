const upperCaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

upperCaseWords('hello world'); // 'Hello World'


function stringifySearch(search) {
  return Object.entries(search)
    .reduce(
      (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,  Object.keys(search).length ? "?" : "" ).replace(/&$/, "");
}

const search = stringifySearch({name: "fatfish", age: 100});

const link = `https://medium.com/${search}`; //"https://medium.com/?name=fatfish&age=100" 
