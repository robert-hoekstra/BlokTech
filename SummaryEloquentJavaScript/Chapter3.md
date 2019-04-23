# Summary of Chapter 3

## Defining a Function
A function definition is a regular binding where the value of the binding is a function.

A function is created with an expression that starts with the keyword `function`. Functions have a set of parameters and a body. The body contains the statements that are to be executed when the function is called. 

Parameters are values inserted in the function in which the body utlizes those given values. A function can hold mutliple, single or no parameters at all.

Some functions produce value with a return statement. And some functions don't return a value at all, these functions return side effects.

Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.

## Bindings and Scopes
Each binding has a scope which is the part of the program in which the binding is visible. Every binding defined outside of a block or function is in the global environment of the program. 

Bindings createf for function parameters or declaren inside a function can only be used in that function, those are in the local environment of a chunk of code. 

Binding declared with `let` and `const` are local if declared in a block.

Each scope can see into a scope around it. However if there are more than one bindings declared with the same name. It will see and use the innermost binding. local before global.

## Nested Scope
Lexical Scoping is a binding visibility technique to write down code in a way it is prett understandable as somebody that did not write the code.

It is a big block of code that contains several blocks that are nested within eachother. Hierarchy and functionality become visible in a nice way. It also shows the functionality of JavaScript. The functions can see all the local functions within eachother. And all of them are globally visible.

## Functions as Values
A function binding acts as a name for a specific piece of the program. However the function value can be used as any other normal value. We can use arbitrary expressions on them. It is possible to store a function value in a new binding, pass it as an argument tot a function.

`
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
`

##Declaration Notation

When the keyword `function` is used then the binding behind it is going to be the nameholder voor a new function.

Function declarations don't follow the top to bottom reading behaviour that we would expect from JavaScript. so a function can be called upon even if the function is declared somewhere else.

This can become quite handy if you want to code in a way that you don't have to bother defining functions etc. Also for the cleaniness of your code it becomes quite at handy.

## Arrow functions
Instead of the `function` keyword. one can also use `=>`.

For instance:
`const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
`

Arrow notation has been introduced in 2015 to JavaScript. It is a method to write functions with a smaller amount of code.

The arrow comes after the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”.

If there is only one parameter you can remove the parantheses around the parameter-list. If the body is a single expression, rather than a block in braces, that expression will be returned from the function.

`const square1 = (x) => { return x * x; };
const square2 = x => x * x;`

Above code does the exact same thing.


## The Call Stack
If a function has been called, the program will run that function untill it comes to its end (or after calling a second function) it will go back to the line where it initially was called. thus we get the following scheme and code.

`function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
`

Scheme:

`not in function
   in greet
        in console.log
   in greet
not in function
   in console.log
not in function
`

In order for a computer to remember a value it needs to return out of a function. The context where the computer stores this information is called the Call Stack. A stack can become too big or too slow. mostly because of memory shortage or an infinite loop.

## Optional Arguments
`
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
`

Above code will run just fine. While it has too many given parameters. JavaScript will ignore the extra parameters. It will choose the first one that is usable in the code. If a function get less than the required amount it will fill it with `undefined` variables.

## Closure
What happens to local bindings when the function call that created them is no longer active?

`function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
`

Referencing to a value in an enclosing scope is called closure.
This behaviour frees us from having to worry about lifetimes of bindings.

## Recursion
A function that calls itself (probably with an increment of a value) is called recursion. 

`
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));
// → 8
`

Bare in mind that running a for loop is 3 times faster than making a recursive function. As calling a function in JavaScript is mostly slower than for loops.

Efficiency is something that's up to the programmer. Balancing speed with Human Interaction and Computer possibilities. 

To handle this, write code first, improve it afterwards. It makes way for a more efficient way of coding. Most of the time improving code is not neccesary for the functionality and speed of your program.

## Growing Functions
basically there are two ways to introduce functions to a program.
You either rewrite them with small tweaks. 

The second way is to write a some functionality that deserves a function by itself. 

It is a good habit to write functions in a way that it makes sense. But also that it is readible by other people, to understand your program.

## Functions and Side Effects

Function can be roughly divided into those that are called for their side effects and those that are called for their return value.

A pure function is a function that does not rely on side effects from other function. And it also does not produce side effects on it's own.



## Summary
