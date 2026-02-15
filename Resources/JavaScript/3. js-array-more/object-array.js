const numbers = [1, 2, 43, 54, 4];
const players = [{}, {}, {}];
const employees = [
    { name: 'Ashik', designation: 'Content Writer', salary: 25000 },
    { name: 'Atik', designation: 'Developer', salary: 29000 },
    { name: 'Abdul Rahim', designation: 'Digital Marketer', salary: 21000 },
    { name: 'Asifa', designation: 'Web Dev', salary: 29000 }
]


employees[0].name = 'Ashraf';
// console.log(employees[1].salary)
// console.log(employees[3].designation)
// for(const employee of employees){
//     console.log(employee.salary, employee.designation);
// }

for (const emp of employees) {
    const person = emp;
    const personInfo = person.name + ': ' + person.salary;
    console.log(personInfo)
}