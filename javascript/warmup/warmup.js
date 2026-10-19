// exe 1: arrays of objects
//exe 2: localStorage
// exe3 : DOM anad events
// exe 4: closures

// A variable stores a value.  const= somethigs that wount be reassigned eg const pi =31.4   cannot later be chaged to 3
const name = "rent"; // texts are string and can have "" or ''
const amount = 1500; // this one is a number(int) it doesnt need ""

// an array is an ordered list : square brackets , commas , counting starts from 0.
const names = ["rent","food","transport"]; // this is an array of names 
console.log(names[0]); // references the first thing in the array rent
console.log(names.length); // this gives the legth of the array 3

// an object is one thing with labels: curly braces , key: value.
const expense = {id:1, name:"rent", amount: 15000,category:"housing"}; // we create labels and give each a value eg the id is 1 in this instance
console.log(expense.name);  // rent
console.log(expense.id); //1
console.log(expense.amount); // 15000
console.log(expense.category); // housing

// an array of objects is a list of things , a tracker stores expenses this way 
const expenses = [
    {id:1,name:"rent",amount: 1500, category:"housing"},
    {id:2,name:"lunch",amount: 500, category:"food"},
    {id:3,name:"fare",amount:200, category:"transportation"},

];
expenses.push({id:4,name:"jeans",amount: 400, category:"clothing"});
console.log(expenses[1].name); //lunch
console.log(expenses[2].category); //transportation
console.log(expenses[3].amount);// 400
console.log(expenses[0].id);//1
console.log(expenses.length);