# Program Structure

## Expressions and Statements
A fragmant of code that produces a value is called an expression
a value written within parentheses is also called an expression.

A progra is a list of statements
1;
!false;
above code is already a program.

Printing a value to the console counts as changing the world. It is an external effect. However if a value causes an internal change it is called a side effect.

the semicolon is used to omit the end of a statement. Sometimes it is not needed at all. But JavaScript might think the next line in the code is also part of the statement.

## Bindings
Old values will dissipate for new values. However JavasScript offers a thing called a binding, or variable.

For example let, const and var.

Those definitions are called keywords. It defines the following value as a binding.

After a binding has been defined it's name van be used as an expressions.

let sommetje = 2+2
console.log(sommetje * sommetje)

The = operator does not bind a value forever. It can also be used to unbind a value by giving a different value to the binding.

Mood = "happy"
console.log (Mood)
Mood = "notHappy"
console.log(Mood)

a siongle let statement can define multiple bindings. We do so by seperating the values with commas.

let rowNumber = 1, rowColumn = 2

var and const can be used in the same way.

const stands for constant, points at the same value for as long as it lives
var stands for variable (used pre 2015)

## Binding Names
Binding can include & or _ and they can also contain numbers. However they can not start with numbers.

Words with a special meaning can not be used binding names. so `let = let` is not possible.

all special words are:
`break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield`

## The Environment
The collection of bindings and their values that exist at a given time.
Opening a program fills already a part of the environment. As the language a program is built in consists of functions that make the language work.

## Functions
A function is a piece of program wrapped in a value. 
`prompt('Please enter your passcode')`

exectuing a function is either called Invoking, calling of applying. 

Arguements are values given to functions.

The prompt function isn't used that much in web programming. As the function offers no control to the programmer in it's way how it looks.

## The Console.log Function
`console.log` is a function that prints a value hold up in the console of a browser. Binding names can't have a '.' in it's name however `console.log` has one. This is because .`log` is a property that calls the value held in the console.

## Return Values
A lot of functions are causing side effects. Those effects van be usefull. They can also produce value for example the `Math.max` takes any amount of number arguments and gives back the greatest.

A value that has been produced is also said to be a return value.

## Control Flow
When a program contains more that one statement, the statements are executed from top to bottom.

## Conditional Execution
Not all programs are lineair. We can also make branching roads within the program. this is where If statements come in place.

A block is a group of statements within `{}`
You can combine if and else statements to execute different statements if a value is true or false. You can chain statements by using else if. 

## While and Do Loops
Run a piece of code for multiple times is called a 'loop'.
the While statement can be used to execute a certain function untill the value hits 'false'

`while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera
`

Do loops are almost the same as while loops. Except a do loop will always execute it's body statements 1 time. After that it checks if the statement needs to be ran anymore.

`let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
`

## Indenting Code
Indenting code is important for the readability op your program. Indent blocks within blocks to show the level of te blocks in your code.

## For Loops

`for (let number = '7"; number.length <= #; number = number + "#") {
  console.log(number);
}
`

Above piece of code is an example of the 'for-loop'
parentheses after the keyword for needs to contain atleast 2 semicolons. the first semicolon inititializes the loop. The second expression checks if the loop needs to be executed or if it has reached the given limit.

`let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);`

## Breaking out of a Loop
Having a false condition is not the only way to break out of a loop.
The break statement jumps out of the given loop.

`for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}`

the counterpart of break is continue. the statement does just that, it start the iteration back in a loop again.

## Updating Bindings Succinctly
`counter = counter + 1;`

Can be written as

`counter += 1;`

This is handy to shorten your code

## Dispatching on a value with switch
Switch code is a bit like if code. However it works with cases rather then statements. It is vert sensitive to break statements within it's cases. Or else it might run something completely different.

Also a default expression is mandatory in a switch case!

## Capitzalization

`fuzzylittleturtle
fuzzy_little_turtle
FuzzyLittleTurtle
fuzzyLittleTurtle`

multiple ways to write bindings. It is important to be consistent. So other people can easy read and understand your written code.

## Comments
To write a single line comment we can use two slash characters `//`
To write a block comment we can use `/*` ended by `*/`





