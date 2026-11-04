// ARROWS AND DESTRUCTURING - fix the broken code
// Run with: node javascript/warmup/arrows.js

// ---------- PART 1: arrow functions ----------
// Goal: double(4) should print 8

const double = (n) =>  n * 2 
console.log( double(4));

// Goal: isExpensive(amount) is true when amount is over 1000

const isExpensive = (amount) => amount > 1000
console.log("isExpensive(1500):", isExpensive(1500))
console.log("isExpensive(200):", isExpensive(200))

// Goal: names should be an array of just the expense names

const expenses = [
  { id: 1, name: "Rent", amount: 12000, category: "housing" },
  { id: 2, name: "Bus fare", amount: 300, category: "transport" },
  { id: 3, name: "Lunch", amount: 250, category: "food" },
]

const names = expenses.map((e) =>  e.name )
console.log("names:", names)

// ---------- PART 2: destructuring ----------
// Goal: print "Rent costs 12000"

const first = expenses[0]
const { name, amount } = first
console.log(name + " costs " + amount)

// Goal: take the first two items out of the array by position

const [a, b, c] = expenses
console.log("a is", a.name, "and b is", b.name)

// ---------- PART 3: both together ----------
// Goal: print each expense as "Lunch (food): 250"
// Use destructuring in the parameter: ({ name, amount }) => ...

expenses.forEach(({ name, amount ,category}) => {
  console.log(`${name} (${category}): ${amount}`)
})