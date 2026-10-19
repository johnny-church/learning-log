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


// map , filter , reduce
const numbers= [1,2,3,4,5];

// map : builds a new arry by changing every item 
const doubled = numbers.map((n)=>n*2); // (n)=>n*2 this is an arrow func , a short func that means " given n, return n*2"
console.log (doubled); // [2,4,6,8,10]

//filter: bulids a new array keeping only the items that pass a test
const big = numbers.filter((n)=> n>2) // for n give items greater than two , means it gives anynumber from three 
console.log(big);//[3,4,5]

//reduce : boils the array down to one value 
const total = numbers.reduce((sum,n)=> sum+n , 0);
console.log(total); //15

const Names = expenses.map((e)=>e.name ); // logic here , e represents  one expense  , so this is like saying given an expense (e) show that expense's name 
console.log(Names);//["rent", "lunch", "fare", "jeans"]

// exe 1
const NAmes = expenses.map((e)=> e.name );
console.log(NAmes);//[1,2,3,4]

// exe 2
const expensive = expenses.filter((e)=> e.amount>300);
console.log(expensive);

// exe 3
const totalAll = expenses.reduce((sum,e)=> sum+e.amount,0);
console.log(totalAll);//2600  
// exe 4
const afterDelete = expenses.filter((e)=> e.id!==2);
console.log(afterDelete); 

// exe 5
const left = expenses.reduce((left,e)=> left-e.amount,5000);
console.log(left);//2400


// save: stringify turns  the array into text
localStorage.setItem("expenses",JSON.stringify(expenses));

//load: getItem returns the text (or null if nothing is saved ); parse turns it back into an array
//localStorage.removeItem("expenses");
const saved = JSON.parse(localStorage.getItem("expenses")) || [];
console.log(saved);

// DOM
const addBtn = document.getElementById("add-btn"); // this takes the button from html and gives it  a name which anables it to do things with it    reads , find element whose id is add-btn and call it addBtn
const list = document.getElementById("list");// reads find element whose id is list and call it lists
console.log(addBtn,list)

// listeners
let count=0;
addBtn.addEventListener("click" , function()
{
    // the code in here will run everytime the button is clicked
    const item = document.createElement("li");
    count++ ;
    item.textContent= "item  "+ count;
    list.appendChild(item);
}
);
expenses.forEach(function(e)
{
    const li =document.createElement("li")
    li.textContent = ` ${e.name} -ksh ${e.amount} (${e.category})`;
    list.appendChild(li);
});

