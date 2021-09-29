class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
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
    set numberOfStudents(n) {
        this._numberOfStudents = n;
    }
    quickFacts() {}
    static pickSubstituteTeacher() {}
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name, numberOfStudents) {
        super(name, "middle", numberOfStudents);
    }
}

class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "high", numberOfStudents);
        this._sportsTeams = sportsTeams
    }
}