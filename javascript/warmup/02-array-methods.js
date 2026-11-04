// 02 ARRAY METHODS - fix the broken code
//
// How to run: open runner.html, pick this file. (Or in a terminal: node 02-array-methods.js)
//
// LEVEL 1: the file will not run. Read the error, fix it, run again. Repeat.
// LEVEL 2: it runs, but some answers are wrong. Compare each line with its GOAL comment.
// LEVEL 3: make it better. The tasks are at the bottom.
//
// Reminder: map = change every item, filter = keep some items, reduce = boil down to one value,
//           find = get ONE item, some = is at least one true?, every = are all true?

const expenses = [
  { id: 1, name: "Rent", amount: 12000, category: "housing" },
  { id: 2, name: "Bus fare", amount: 300, category: "transport" },
  { id: 3, name: "Lunch", amount: 250, category: "food" },
  { id: 4, name: "Jeans", amount: 1800, category: "clothing" },
  { id: 5, name: "Dinner", amount: 600, category: "food" },
  { id: 6, name: "Data bundle", amount: 500, category: "transport" },
]

// ---------- PART 1 ----------
// GOAL: names is an array of every expense name
const names = expenses.map((e) => e.name)
console.log("P1 names:", names)

// ---------- PART 2 ----------
// GOAL: prints 6
console.log("P2 count:", expenses.length)

// ---------- PART 3 ----------
// GOAL: foodTotal is 850 (Lunch 250 + Dinner 600)
const foodTotal = expenses
  .filter(e => e.category === "food")
  .reduce((sum, e) => sum + e.amount, 0)
console.log("P3 foodTotal:", foodTotal)

// ---------- PART 4 ----------
// GOAL: bigNames is ["Rent","Jeans"] (every expense over 1000)
const bigNames = expenses
  
  .filter((e) => e.amount > 1000)
  .map(e => e.name)
console.log("P4 bigNames:", bigNames)

// ---------- PART 5 ----------
// GOAL: prints the amount of the Jeans expense: 1800
const jeans = expenses
.find(e => e.name === "Jeans").amount
console.log("P5 jeans amount:", jeans)

// ---------- PART 6 ----------
// GOAL: hasBig is true (at least one expense is over 10000)
//       allOver300 is false (Lunch is only 250)
const hasBig = expenses.some(e => e.amount > 10000)
const allOver300 = expenses.every(e => e.amount > 300)
console.log("P6 hasBig:", hasBig, "allOver300:", allOver300)

// ---------- PART 7 ----------
// GOAL: sorted starts with the cheapest expense (Lunch).
//       The original expenses array must stay in its original order (Rent first).
const sorted = [...expenses]
.sort((a, b) => a.amount - b.amount)
console.log("P7 sorted first:", sorted[0].name)
console.log("P7 original first:", expenses[0].name)

// ---------- LEVEL 3: make it better (after everything above matches) ----------
// Remove the // in front of each console.log line to test your work.
//
// 1. totalsByCategory: use ONE reduce to build an object of totals per category.
const totalsByCategory = expenses.reduce((totals, e) => {
  totals[e.category] = (totals[e.category] || 0) + e.amount
  return totals
}, {})  // expected: {"housing":12000,"transport":800,"food":850,"clothing":1800}
//
// 2. average: the average amount of all expenses.
const average= expenses.reduce((sum,e)=>sum+e.amount,0)/expenses.length;
    console.log("U2:", average)             // expected: 2575
//
// 3. top3: the names of the three most expensive expenses, biggest first, in ONE chain,
//    without changing the original array.
const top3 = [...expenses]
.sort((a,b)=>b.amount-a.amount)
.slice(0,3)
.map((e)=>e.name)
  console.log("U3:", top3)                // expected: ["Rent","Jeans","Dinner"]

// ---------- EXPECTED OUTPUT for levels 1 and 2 (peek only when you are done, or really stuck) ----------
// P1 names: ["Rent","Bus fare","Lunch","Jeans","Dinner","Data bundle"]
// P2 count: 6
// P3 foodTotal: 850
// P4 bigNames: ["Rent","Jeans"]
// P5 jeans amount: 1800
// P6 hasBig: true allOver300: false
// P7 sorted first: Lunch
// P7 original first: Rent
