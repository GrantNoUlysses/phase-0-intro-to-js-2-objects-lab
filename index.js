// Write your solution in this file!
const employee = {
    name: "Benny",
    streetAdress: "14 Mulberry Road",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee, "name": "Sam", "streetAddress": "11 Broadway"}
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newNewObj = {...employee[key]}
    delete newNewObj[key]
    return newNewObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee 
}
