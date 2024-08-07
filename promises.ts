type Bar = { x: number };
type Baz = { y: number };

// just describe what the function returns
function returnBar(): Bar {
  return { x: 1 };
}
function returnBaz(): Baz {
  return { y: 2 };
}

function noReturn(): void {
  console.log("no return");
}

function promiseMakerBar(func: () => Bar): Promise<Bar> {
  return Promise.resolve(func());
}

const decider = false;

// note that the reject can be of any type, the promise type only describes what it will resolve to. That makes sense since you're unlikely to pass on the reject value to the rest of your application.
function promiseMakerBaz(func: () => Baz): Promise<Baz> {
  return new Promise((resolve, reject) => {
    if (decider) {
      resolve(func());
    } else {
      reject("uh oh we have a problem");
    }
  });
}

promiseMakerBar(returnBar).then((result) => console.log(result));
promiseMakerBaz(returnBaz)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
