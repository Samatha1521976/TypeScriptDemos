import { Person} from './parent'

export class Employee extends Person{
    constructor(
        firstName: string,
        age: number,
        private jobTitle: string) {
                // call the constructor of the Person class:
        super(firstName, age);
    }

    JobDetails(): string {
        return super.describe() + `Job is ${this.jobTitle}.`;
    }
}