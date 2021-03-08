class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let randomIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomIndex]
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(num) {
        if(typeof num === 'number') {
            this._numberOfStudents = num;
            return this._numberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
}

const pepperMiddle = new School('George Wharton Pepper Middle School', 'middle', 1126);
console.log(pepperMiddle.quickFacts());