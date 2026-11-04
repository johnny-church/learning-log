// 01 SPREAD AND REST - fix the broken code
//
// How to run: open runner.html, pick this file. (Or in a terminal: node 01-spread-rest.js)
//
// LEVEL 1: the file will not run. Read the error, fix it, run again. Repeat until it runs.
// LEVEL 2: it runs, but some answers are wrong. Compare each line with its GOAL comment.
// LEVEL 3: make it better. The tasks are at the bottom of the file.
//
// Read it as: spread (...) takes things OUT of an array or object and lays them side by side.
//             rest (...) does the opposite: it GATHERS leftover things INTO one array.

// ---------- PART 1: add without changing the original ----------
// GOAL: withFour is [1,2,3,4] and base is still [1,2,3]
const base0 = [1, 2, 3]
const withFour = [...base0,4]
console.log("P1 withFour:", withFour)
console.log("P1 base:", base0)

// ---------- PART 2: join two arrays ----------
// GOAL: merged is [1,2,3,10,20] (one flat array)
const base1 = [1,2,3]
const extra = [10, 20]
const merged = [...base1, ...extra]
console.log("P2 merged:", merged)

// ---------- PART 3: change one thing in a copy ----------
// GOAL: updated has amount 300, and original still has amount 250
const original = {id: 1, name: "Lunch", amount: 250 } 
const updated = { ...original,amount: 300 }
console.log("P3 updated:", updated)
console.log("P3 original:", original)

// ---------- PART 4: rest parameters ----------
// GOAL: sum(1, 2, 3, 4) is 10, and it works with any number of arguments
   function sum(...numbers) {
     return numbers.reduce((total, n) => total + n, 0)
   }
    
   
console.log("P4 sum:", sum(1, 2, 3, 4))

// ---------- PART 5: rest in destructuring ----------
// GOAL: first is 5, others is [6,7,8]
const list = [5, 6, 7, 8]
const [first,...others] = list
console.log("P5 first:", first, "others:", others)

// ---------- PART 6: spread into a function call ----------
// GOAL: biggest is 20 (the largest number in the list)
const nums = [4, 20, 7]
const biggest = Math.max(...nums)
console.log("P6 biggest:", biggest)




const numb=[1,2,3,4,5,6,7,8,9,10]
const double=numb.map ((element) => element*2)
console.log("this are the double numbers", double);

// ---------- LEVEL 3: make it better (do these after everything above matches) ----------
// Remove the // in front of each console.log line to test your work.
//
// 1. Rewrite sum using reduce, in one line, still with rest parameters.

    console.log("U1:", sum(1, 2, 3, 4))            // expected: 10
//
// 2. Write mergeSettings(defaults, overrides) that returns a NEW object:
//    all of defaults, with overrides on top. Neither input may change.
   
const d = { theme: "light", size: 14 } 
const overides={theme:"dark", size:20}
    function mergeSettings(d,overrides)
    {
      return{
        ...d,
        ...overrides
      };
    }
   console.log("U2:", mergeSettings(d, { size: 18 }), d)   // expected: {"theme":"light","size":18} {"theme":"light","size":14}
//
// 3. Write largest(...nums) that returns the biggest number using Math.max and spread,
//    and returns 0 if no numbers are given.

function largest(...nums)
{
  const big=Math.max(...nums)
  if (nums.length===0)
  {
    return 0;
  }
  else
  {
    return big;
  }
}

    console.log("U3:", largest(3, 9, 4), largest())   // expected: 9 0

// ---------- EXPECTED OUTPUT for levels 1 and 2 (peek only when you are done, or really stuck) ----------
// P1 withFour: [1,2,3,4]
// P1 base: [1,2,3]
// P2 merged: [1,2,3,10,20]
// P3 updated: {"id":1,"name":"Lunch","amount":300}
// P3 original: {"id":1,"name":"Lunch","amount":250}
// P4 sum: 10
// P5 first: 5 others: [6,7,8]
// P6 biggest: 20
