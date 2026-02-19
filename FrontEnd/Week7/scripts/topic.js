// Object Oriented Programming:(OOP)

// class! (Collection of Code and data) A blueprint that contains some member functions and member variables
// The class itself is not usable, we actually create "object" of the classes, and these objects are used to access/utilize everything that classes have...

// class Student {
//   //   member variables
//   name;
//   age;
//   //member function
//   setData(n, a) {
//     this.name = n;
//     this.age = a;
//   }
// }
// // create object of Student class
// let std1 = new Student();
// console.log(std1);
// // std1.name = "Alina";
// // std1.age = 20;
// std1.setData("Alina", 20);
// console.log(std1);
// std1.setData("Bob", 21);
// console.log(std1);

class User {
  name;
  age;
  status;
  //   constructor function is a special funciton that "constructs" the object
  //   automatically called when we create object of a class
  //   constructor() {
  //     this.name = "Default";
  //     this.age = 0;
  //     this.status = "inactive";
  //   }
  constructor(n, a, s) {
    this.name = n;
    this.age = a;
    this.status = s;
  }
  //   in JS, constructor is literally called "constructor",otherwise in all other languages, the constructor function has the same name as class.

  setData(n, a, s) {
    this.name = n;
    this.age = a;
    this.status = s;
  }
}

let user1 = new User("Chrisitina", 20, "Active");
console.log(user1);
user1.setData("Diana", 19, "Inactive");
console.log(user1);

// If we donot create object ofa class, we cannot use anything from this class(BUT this statement will be changed..)
