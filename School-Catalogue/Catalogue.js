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

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, "primary", numberOfStudents);
        this.pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this.pickupPolicy;
    }
}
