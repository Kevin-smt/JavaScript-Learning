// You have two arrays. One shows the names of the people names, while the other shows their occupation jobs. Your task is to create an object displaying each person to their respective occupation.

// Example:

// const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
// const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

// assignPersonToJob(names, jobs) ➞ 
// {
//   Dennis: "Butcher",
//   Vera: "Programmer",
//   Mabel: "Doctor",
//   Annette: "Teacher",
//   Sussan: "Lecturer"
// }

const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan","kevin"]
const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer","Dev"]

function assignPersonToJob(names, jobs) {
    const emp = {}

    // emp[names[0]] = jobs[0].toString();

    for (let i = 0; i < names.length; i++) {
        emp[names[i]] = jobs[i].toString();
    }

    return emp;
}


console.log(assignPersonToJob(names, jobs))
// console.log(names[0]);
