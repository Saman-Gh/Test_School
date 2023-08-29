let malaysiaSchools = [
    {
        name: "Chinese",
        type: "Standardised Test for University Admission",
        yearStarted: 1975,
        acronym: "UEC",
        contact: {
            phone: "+6013-4567890",
            email: "info@chineseindependent.com.my",
            website: "https://uec.dongzong.my/"
        },
        location: {
            country: "Malaysia",
            city: "Kuala Lumpur",
            zipcode: 49650,
        },
        languages: {
            primary: "Chinese",
            secondary: "English"
        },
        classes: {
            class1: "Period1"
        }
    }
];

// We can find the school's index number via the following function.
function schoolIndexFinder(schoolName) {
    let schoolIndex = -1
    if (schoolName) {
        for (let i = 0; i < malaysiaSchools.length; i++) {
            if (malaysiaSchools[i].name === schoolName) {
                schoolIndex = i
            }
        }
    }
    else {
        return "There is no such a school name"
    }
    return schoolIndex
}

//We can add a new class to the specific school via the following function.
function addClassToSchool(schoolName, className) {
    let schoolIndex = schoolIndexFinder(schoolName)
    if (schoolIndex >= 0 && className) {
        let numberOfClasses = Object.keys(malaysiaSchools[schoolIndex].classes).length;
        let newClassNumber = numberOfClasses + 1;
        let newClassName = "class" + newClassNumber;
        malaysiaSchools[schoolIndex].classes[newClassName] = className;
        return "The class added successfully"
    }
    else {
        return "There is no such a school or the class name is null or empty."
    }
}
// let newClassAddress = "test";
// let schoolNameAddress = "Chinese";
// console.log(addClassToSchool(schoolNameAddress, newClassAddress));


// Here we check if there is a class name that you want to add a new student to it. 
function classExistChecker(schoolName, className) {
    if (schoolName && className) {
        let schoolIndex = schoolIndexFinder(schoolName)
        if (schoolIndex >= 0) {
            let allClassNames = Object.keys(malaysiaSchools[schoolIndex].classes);
            for (let i = 0; i < allClassNames.length; i++) {
                let temp = allClassNames[i]
                if (malaysiaSchools[schoolIndex].classes[temp] === className) {
                    return className
                } else {
                    return "Class not found"
                }
            }
        } else {
            return "School not found"
        }
    } else {
        return "Please fill out the all the field and try again"
    }
}
console.log(classExistChecker("Chinese", "Period1"));
