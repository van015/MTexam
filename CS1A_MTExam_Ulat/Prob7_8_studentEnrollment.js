// Ulat, Van Remlee
let DSA = [];
let WebDev = [];

function studentEnrollment() {
    while (true) {
        let subjectChoice = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) WebDev").toUpperCase();
        let subject = subjectChoice === 'A' ? DSA : WebDev;

        while (true) {
            let operation = prompt("Choose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();

            if (operation === 'A') {
                let studentName = prompt("Enter the student's name to enroll:");
                subject.push(studentName);
                console.log(`Enrolled ${studentName} in ${subjectChoice === 'A' ? "DSA" : "WebDev"}.`);
            } 
            else if (operation === 'B') {
                console.log("Currently enrolled students:", subject.join(", "));
                let studentName = prompt("Enter the student's name to unenroll:");
                let index = subject.indexOf(studentName);
                if (index !== -1) {
                    subject.splice(index, 1);
                    console.log(`${studentName} has been unenrolled.`);
                } else {
                    console.log("Student not found.");
                }
            } 
            else if (operation === 'C') {
                break;
            } 
            else if (operation === 'D') {
                console.log("Final Enrollment:");
                console.log("DSA Students:", DSA.join(", "));
                console.log("WebDev Students:", WebDev.join(", "));
                return;
            } 
            else {
                console.log("Invalid option. Try again.");
            }
        }
    }
}

studentEnrollment();
