const upperCaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

upperCaseWords('hello world'); // 'Hello World'
