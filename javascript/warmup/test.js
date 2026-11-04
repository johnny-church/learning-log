// find method

const names= ['john','james','brii']

const result=names.find(findnames)

function findnames(items)
{
    return items==='john' // when a value that is not  in the array is set to be found it returns , "undefined",,, but returns the value if it is found , eg , john would return john
}
console.log(result,"is a good student")





const persons=
[
    {
        name :'peter',
        age :25
    },
    {
        name:'rose',
        age:20
    },
    {
        name:'alvin',
        age:22
    }
]

//const person=persons.find(findpeople);

function findpeople(item)
{
    return item.name==='peter'
}

console.log(persons.find(findpeople))



//some 
const nums =[10,122,20,15,70]

function isbiggerthan100(n)
{
    return n>100;
}
console.log(nums.some(isbiggerthan100));

//every
//t1
const num=[2,4,8,20,26]

function iseven(n)
{
    return n%2===0;
}
console.log(num.every(iseven));

//t2
const dig=[2,3,9,7,5]

function isodd(n)
{
    return n%2!==0;
}
console.log(num.every(isodd));

// map

const digi=[1,2,3]
function double(n)
{
    return n*2;
}
 console.log(digi.map(double));

 //t2

 const nume=[1,2,3,4]
 const trip=nume.map((e)=>e*3)

 console.log(trip);


 //filter
 
const numb=[1,2,3,4,5,6,7,8,9,10]
const even=numb.filter((e)=>e%2===0)
console.log(even);


//reduce

const numeric=[1,2,3,4,5,6,7,8,9]

const add= numeric.reduce((sum,e)=> sum+e,0)
console.log(add);

// sort
 const numm=[1,49.49,30,72,106]
 const order=numm.sort((a,b)=>a-b);
 console.log(order);


 //t2
 const expenses = [
  { id: 1, name: "Rent", amount: 12000, category: "housing" },
  { id: 2, name: "Bus fare", amount: 300, category: "transport" },
  { id: 3, name: "Lunch", amount: 250, category: "food" },
  { id: 4, name: "Jeans", amount: 1800, category: "clothing" },
  { id: 5, name: "Dinner", amount: 600, category: "food" },
  { id: 6, name: "Data bundle", amount: 500, category: "transport" },
]

const ord=expenses.sort((a,b)=>b.amount-a.amount);
console.log(ord);

// slice
const nambari=[1,2,3,4,5,6,7]
const part=nambari.slice(0,3)
console.log(part)