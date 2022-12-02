//importing a default export
import Person from "./Person.js"
//Definition of a subclass of Student
export class Student extends Person {
    constructor(name, age, school) {
        //initialize superclass
        super(name, age);
        this.school = school;
    }
    //private property
    #grade = undefined;
    //Getter settter for grade
    get grade() {
        //report that someone accessed the grade
        console.log("returning grade " + this.#grade);
        return this.#grade;
    }
    set grade(x) {
        //check grade
        if (x >= 0 && (x <= 10)) {
            console.log("changing grade to " + x);
            this.#grade = x;
        }
        else {
            //throw error if invalid grade
            throw ("Invalid grade " + x);
        }
    }
}

