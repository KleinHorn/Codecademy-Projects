const School = require("./Catalogue").School;
const Primary = require("./Catalogue").Primary;

test("Test primary school instance, getters and setters", () => {
    const aPrimarySchool = new Primary(
        "Lorraine Hansbury",
        514,
        "Students must be picked up by a parent, guardian, or a family member over the age of 13."
    );

    expect(aPrimarySchool.quickFacts());
    expect(aPrimarySchool.name).toBe("Lorraine Hansbury");
    expect(aPrimarySchool.numberOfStudents).toBe(514);
    expect(aPrimarySchool.pickupPolicy).toBe(
        "Students must be picked up by a parent, guardian, or a family member over the age of 13."
    );
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

    expect(subTeachers.includes(School.pickSubstituteTeacher(subTeachers))).toBe(true);
});
