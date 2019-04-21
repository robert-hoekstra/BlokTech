# Summary of Chapter 1

## Values, Types, and operators

All date is stores as long sequences of bits and is thus fundamentally alike.

Bits are mostly describes as zeros and ones. 

Binary numbering goes from 1 2 4 8 16 32 64 128 and so on.
Combinations of binary code like 0 0 1 0 1 0 0 0 make 20.

## Values
Chunks of information are called values in JavaScript.
Values can be numbers, text and even functions.

## Numbers
Values of the 'number' type are numeric values.
If dealing with astronomical numbers. Make sure you are not causing an overflow by lack of memory!

Fractional numbers are writtin by using a dot. Like `17.23`
For very big or small or numbers a scientific notation is allowed. like `2.998e7`
Which translates to `2.998x10^7`

Whole numbers are called integers.

## Arithmetic
`+ *` are operators. They are used to execute actions on numbers.
Parentheses can be used to change the order of mathematics. Also called precedence.

`+` Add
`*` Multiply
`-` Subtract
`/` Divide
`%` Remainder

## Special Numbers

`Infinity` and `-Infinity`. Postive infinite and negative infinite.
NaN stand for not a number. 

## Strings
Strings are text as a datatype.
Strings need to be enclosed in quotes.
Quotes can be single, double or backticks. As long as they are the same on both sides.

Use `\` to indicate a special character within a quote. As in a quotation mark for example.

`\n` forms a new line within the same quote.

We can use the + operator to concatenate strings together.
Backtic quotes can do a few more tricks than the other quoting techniques for strings. for instance `half of 100 is ${100 / 2}`

The above string will be computed and will be formed as a total string eventually.

## Unary Operators
Some operators are written as words instead of symbols. Just like the typeof operator. Operators that use two values are binary operators. the ones that only take 1 value are called unary operators. So the minus can behave as both!

## Boolean Values
Boolean Values are used in JavaScript as either True or False.
`>` greater than
`<` smaller than
`>=` greater than or equal to
`<=` smaller than or equal to
`==` equal to
`!=` not equal to

Not only numbers but also strings can be compared with the < and > operators. Javascript will take a look at the unicode of the first letter from left to right of both strings. So Z and a are different than z and A!

Only one value is not equal to itself, its the NaN value.

## Logical Operators
`&&` and both values need to be true
`||` or  one of the values need to be true
`!` not flips the value given to it true becomes false

`?` conditional operator is the only ternary operator
It picks the value to the left og the question mark and then checks which of the two other values will come out. True is the middle value, false is the right value.

## Empty Values
null and undefined are values themself without carrying information.
many operations are undefined because they don't carry value.

## Automatic Type Conversion
When a operator is wrongly used between two values. JavaScript will try to fix it in a smart way without the user noticing.

This ic called type coercion. `Null` becomes `-` and `"5"` becomes `5` (from string to numberic)

When you get a NaN make sure to look out for accidental type conversions

`null == undefined` produces true
`null == 0 produces` false

Type conversion can be confusing because you migjht not know if the conversion is actually happening or if the value don't hold anything. We can use
`===`
`!==` operators in that way false stays false and true stays true. without conversion ofcourse.
`§`

Short circuit evaluation can be tricky as bigger parts of code might not be ran because of a false or true expression.







