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

## While and Do Loops

## Indenting Code

## For Loops

## Breaking out of a Loop

## Updating Bindings Succinctly

## Dispatching on a value with switch

## Capitzalization

## Comments






