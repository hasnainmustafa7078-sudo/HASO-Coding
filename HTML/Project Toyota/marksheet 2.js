// Student Marksheet

// Student Information
const studentName    = "Hasnain Riaz";
const email           = "hasnainmustafa7078@gmail.com";
const studentId       = "Student-1730960";
const contactNumber   = "+92 320 2450759";

// 2. Marks of 5 Subjects (out of 100) 
const subjects = ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"];
const marks    = [85, 78, 92, 65, 88];  

const MAX_MARKS_PER_SUBJECT = 100;
const PASS_MARK_PER_SUBJECT = 40;      // kam se kam bhi Student ko 40 Marks chayie, per Subject


// Functions

function calculateTotal(marksArray) {
    let total = 0;
    for (let i = 0; i < marksArray.length; i++) {
        total = total + marksArray[i];
    }
    return total;
}

function calculatePercentage(total, subjectCount) {
    const maxTotal = subjectCount * MAX_MARKS_PER_SUBJECT;
    const percentage = (total / maxTotal) * 100;
    return percentage;
}

function determineGrade(percentage) {
    let grade;
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;
}

// Pass/Fail 
// Rule: Student must pass Every subject
function determinePassFailStatus(marksArray, percentage) {
    let allSubjectsPassed = true;

    for (let i = 0; i < marksArray.length; i++) {
        if (marksArray[i] < PASS_MARK_PER_SUBJECT) {
            allSubjectsPassed = false;
        }
    }

    if (allSubjectsPassed && percentage >= 40) {
        return "PASS";
    } else {
        return "FAIL";
    }
}

function displayMarksheet(name, mail, id, contact, subjectNames, marksArray,
                           total, percentage, grade, status) {

    console.log("               Student Marksheet");

    console.log("Student Name    : " + name);
    console.log("Email Address   : " + mail);
    console.log("Student ID      : " + id);
    console.log("Contact Number  : " + contact);

    console.log("-".repeat(50));
    console.log("SUBJECT".padEnd(25) + "MARKS (out of " + MAX_MARKS_PER_SUBJECT + ")");
    console.log("-".repeat(50));

    for (let i = 0; i < subjectNames.length; i++) {
        console.log(subjectNames[i].padEnd(25) + marksArray[i]);
    }

    console.log("-".repeat(50));
    console.log("Total Marks     : " + total + " / " + (subjectNames.length * MAX_MARKS_PER_SUBJECT));
    console.log("Percentage      : " + percentage.toFixed(2) + "%");
    console.log("Grade           : " + grade);
    console.log("Result          : " + status);
}


// Program Execution 
const total       = calculateTotal(marks);
const percentage  = calculatePercentage(total, subjects.length);
const grade       = determineGrade(percentage);
const status      = determinePassFailStatus(marks, percentage);

displayMarksheet(studentName, email, studentId, contactNumber,
                  subjects, marks, total, percentage, grade, status);
