// Tests for School class
const School = require("./Catalogue").School;

const schoolName = "Name";
const schoolLevel = "Level";
const schoolStudents = 100;
const mySchool = new School(schoolName, schoolLevel, schoolStudents);

test("Creates new School object with required setters and getters", () => {
    expect(mySchool.name).toBe(schoolName);
    expect(mySchool.level).toBe(schoolLevel);
    expect(mySchool.numberOfStudents).toBe(schoolStudents);
    mySchool.numberOfStudents = mySchool.numberOfStudents - 10; // try setter function
    expect(mySchool.numberOfStudents).toBe(schoolStudents - 10);
});

test("quickFacts() method works", () => {
    expect(mySchool.quickFacts());
});
