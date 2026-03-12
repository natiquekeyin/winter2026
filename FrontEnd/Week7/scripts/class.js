class Student {
  constructor(f, l) {
    this.firstName = f;
    this.lastName = l;
  }
  setName(f, l) {
    this.firstName = f;
    this.lastName = l;
  }
  static program = "Computers";
  static doSomething() {
    console.log("HEllo Student");
  }
}
let std1 = new Student("Alan", "Smith");
std1.setName("Bob", "Michael");
console.log(Student.program);
Student.doSomething();
