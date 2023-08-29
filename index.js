let malaysiaSchools = [
    {
        name: "Chinese Independent",
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
            class1: "Period1",
            class2: "Period2",
            class3: "Period3"
        }
    }
];

function addClassToSchool (schoolName, className){
    let schoolIndex = -1;
    if (schoolName){
        for (let i = 0; i < malaysiaSchools.length; i++){
            if(schoolName === malaysiaSchools[i].name){
                schoolIndex = i;
            }
        }
    }
    else{
        return "Select your school first"
    }
    if (schoolIndex >= 0) {
        let numberOfClasses = Object.keys(malaysiaSchools[schoolIndex].classes).length;
        let newClassNumber = numberOfClasses + 1;
        let newClassName = "class" + newClassNumber
        malaysiaSchools[schoolIndex].classes[newClassName] = className
    }
    else{
        return "There is no such a school"
    }
}

let newClassAddress = "business";
let schoolNameAddress = "Chinese Independent";

addClassToSchool(schoolNameAddress, newClassAddress);
console.log(malaysiaSchools);


