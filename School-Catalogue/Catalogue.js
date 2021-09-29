class School {
    constructor(name, level, numberOfStudents) {
        this.name = name;
        this.level = level;
        this.numberOfStudents = numberOfStudents;
    }
    get name() {
        return this.name;
    }
    get level() {
        return this.level;
    }
    get numberOfStudents() {
        return this.numberOfStudents;
    }
    set numberOfStudents(n) {
        this.numberOfStudents = n;
    }
    quickFacts() {}
    static pickSubstituteTeacher() {}
}
