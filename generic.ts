// you don't have to specify a return type, its inferred
function returnSame(input) {
  return input;
}
let number1 = returnSame(1);
let string1 = returnSame("hello");

// but it's clearer to use a generic, stating that the input is of type T. Notice the output still doesn't have to be specified because it will be inferred. That means we could actually do anything to the input inside the function and it still won't cause an error.

function genericReturn<T>(input: T) {
  return [input, "added something but still no TS error"];
}
let number2 = genericReturn(1); // sets this type as (number | string)[]
let string2 = genericReturn("hello"); // sets this type as (string)[]
