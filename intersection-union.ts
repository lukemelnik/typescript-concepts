// an intersection adds the types together.

type Person = {
  username: string;
  age: number;
};

type Address = {
  number: number;
  street: string;
  city: string;
};

type Customer = Person & Address;

const jimmy: Customer = {
  username: "Jimmy",
  age: 30,
  number: 45,
  street: "123 Main St",
  city: "Anytown",
};

// ps this is a great way to check if a key exists in an object without having to do Object.keys(jimmy).includes("city")
if ("city" in jimmy) {
  console.log(`Jimmy is from ${jimmy.city}`);
}

// for union types you could have this:

type ContactInfo = {
  firstName: string;
  age: number;
};

type ContactInfoWithEmail = ContactInfo & {
  email: string;
};

const todd = {
  firstName: "todd",
  age: 33,
};

const terry = {
  firstName: "terry",
  age: 55,
  email: "terry@gmail.com",
};

function printContactInfo(info: ContactInfo | ContactInfoWithEmail) {
  if ("email" in info) {
    console.log(
      `user ${info.firstName} is ${info.age} years old and their email is ${info.email}`
    );
  } else {
    console.log(
      `user ${info.firstName} is ${info.age} years old. No email on file.`
    );
  }
}
printContactInfo(todd);
printContactInfo(terry);
