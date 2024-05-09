let x: number | undefined;
// Without short-circuit assignment
if (!x) x = 42;
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

//String methods
"Hello".charAt(4)                // o
"Hello".concat(" ", "world")     // Hello world
"Hello".includes("a")            // false
"Hello".match(/[A-Z]/g)          //['H']
"Hello".repeat(3)                // HelloHelloHello
"Hello".startsWith("H")          // true
"Hello".endsWith("o")            // true
"Hello".indexOf("l")             // 2  
"Hello".lastIndexOf("l")         // 3
"Hello".replace("ello", "i")     // Hi
"Hello".search("e")              // 1
"Hello".padStart(6, "!")         // !Hello
"Hello".padEnd(6, "!")           // Hello!
"Hello".slice(1,3)               // el
"Hello".split(" ")               // ['Hello']
"Hello".substring(2,5)           // llo
"Hello".toLowerCase()            // hello
"Hello".toUpperCase()            // HELLO
" Hello ".trim()                 // Hello
" Hello ".trimStart()            // "Hello "
" Hello ".trimEnd()              // " Hello"

//Math methods
Math.PI;                              // 3.141592653589793
Math.round(3.5)                       // rounds to nearest integer
Math.ceil(2.4)                        // rounds up to nearest integer
Math.floor(4.9)                       // rounds down to nearest integer
Math.trunc(4.2)                       // returns integer part of number
Math.sign(-4)                         // returns -1 when x is negative, 0 if x is null and 1 if x is positive
Math.pow(2, 3)                        // x to the power of y (2^3)
Math.sqrt(64)                         // square root
Math.abs(-5)                          // returns absolute/positive value of number
Math.sin(90 * Math.PI / 180)          // the sine of the angle x
Math.cos(0 * Math.PI / 180)           // the cosine of the angle x 
Math.min(0, 65, 231, -90, 3)          // lowest value in list
Math.max(0, 65, 231, -90, 3)          // highest value in list
Math.random()                         // a random number between 0 and 1 
Math.floor(Math.random() * 5) + 1;    // random integer between 1 and 5
Math.log(2)                           // natural logarithm of x
Math.log2(8)                          // base 2 logarithm of x
Math.log10(1000)                      // base 10 logarithm of x





