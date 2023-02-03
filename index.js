const a = [1, 2, "b", 0, {}, "", NaN, 3, undefined, null, 5, []];

const b = a.filter(Boolean);  //[1, 2, "b", {}, 3, 5, []]
