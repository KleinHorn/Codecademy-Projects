const School = require("./Catalogue").School;
const Primary = require("./Catalogue").Primary;
const High = require("./Catalogue").High;

test("Test Highschool setters and getters", () => {
    const aHighSchool = new High("Al E. Smith", 415, [
        "Baseball",
        "Basketball",
        "Volleyball",
        "Track and Field",
    ]);

    expect(aHighSchool.quickFacts());
    expect(aHighSchool.name).toBe("Al E. Smith");
    expect(aHighSchool.numberOfStudents).toBe(415);
    expect(aHighSchool.sportsTeams).toStrictEqual([
        "Baseball",
        "Basketball",
        "Volleyball",
        "Track and Field",
    ]);
});

test("Test substitute teacher static method", () => {
    const subTeachers = [
        "Jamal Crawford",
        "Lou Williams",
        "J. R. Smith",
        "James Harden",
        "Jason Terry",
        "Manu Ginobli",
    ];

    expect(
        subTeachers.includes(School.pickSubstituteTeacher(subTeachers))
    ).toBe(true);
});
