// you don't have to specify a return type, its inferred. Hmmmm interestingly this wouldn't compile with ts-node:

// function returnSame(input) {
//   return input;
// }
// let number1 = returnSame(1);
// let string1 = returnSame("hello");

// but it's clearer to use a generic, stating that the input is of type T. Notice the output still doesn't have to be specified because it will be inferred. That means we could actually do anything to the input inside the function and it still won't cause an error.

function generic<T>(input: T) {
  return [input, "added something but still no TS error"];
}
let number2 = generic(1); // sets this type as (number | string)[]
let string2 = generic("hello"); // sets this type as (string)[]

// but as soon as you specify a return type, you will get an error if it doesn't match:

// function genericReturn<T>(input: T): T {
//   return [input]; // this has an error because its trying to return a type of T[]
// }

// a cool practical application. Easiest to think of T as a placeholder for something you'll specify later.

function createKeyValueStore<T>() {
  // btw a record is a way of creating an object type with a specific key and value type
  const store: Record<string, T> = {};
  return {
    get: (key: string): T | undefined => {
      return store[key];
    },
    set: (key: string, value: T) => {
      store[key] = value;
    },
    // note that delete is a safe operation and won't error if the key doesn't exist. Can also return the result.
    remove: (key: string): boolean => {
      return delete store[key];
    },
    returnStore: () => {
      return store;
    },
  };
}

const numberStore = createKeyValueStore<number>();
numberStore.set("bananas", 100);
numberStore.set("apples", 200);
// numberStore.set("oranges", "300"); will cause an error because its expecting a number now.
console.log(numberStore.get("potatoes"));
console.log(numberStore.returnStore());
