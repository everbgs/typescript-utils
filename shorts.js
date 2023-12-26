let x: number | undefined;
// Without short-circuit assignment
if (!x)
  x = 42;
// With short-circuit assignment
x ||= 42; // x is 42 if null or undefined

let scores: number[] | undefined;
// Without short-circuit assignment
if (!!scores) {
  scores = [];
  scores.push(99);
}
// With short-circuit assignment
(scores ??= []).push(99);
