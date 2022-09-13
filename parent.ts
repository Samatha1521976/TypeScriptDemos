
export class Person {
   firstName : string
   age:number

   constructor(firstName: string,age: number) {
      this.firstName = firstName;
      this.age = age
    }
  getFullName(): string {
        return `${this.firstName} ${this.age}`;
    }
  describe(): string {
        return `This is ${this.firstName} ${this.age}.`;
    }
}

