 // 03 SCOPE AND CLOSURES - fix the broken code
//
// How to run: open runner.html, pick this file. (Or in a terminal: node 03-scope-closures.js)
//
// LEVEL 1: these crash the file with an error, one at a time. Read the error message carefully,
//          it tells you the exact problem. Fix, run again, repeat.
// LEVEL 2: it runs, but some answers are wrong. Compare each line with its GOAL comment.
// LEVEL 3: make it better. The tasks are at the bottom.
//
// Reminder: scope = where a variable can be seen. A closure = a function that remembers
//           the variables that were around it when it was made.

// ---------- PART 1 ----------
// GOAL: rate can be changed later; this prints 0.18
let rate = 0.16
rate = 0.18
console.log("P1 rate:", rate)

// ---------- PART 2 ----------
// GOAL: prints 100
let balance = 100
console.log("P2 balance:", balance)

// ---------- PART 3 ----------
// GOAL: prints "big"
const price = 5000
 const label = "big";
if (price > 1000) {
  console.log("P3 label:", label)
}


// ---------- PART 4 ----------
// GOAL: the three calls print 1, 2, 3
function makeCounter(start = 0, step = 1) {
  let count = start
  return function () {
    
    count+=step
    return count
  }
}
const next = makeCounter()
console.log("P4 counter:", next(), next(), next())

// ---------- PART 5 ----------
// GOAL: add5(3) is 8
function makeAdder(x) {
  return function (y) {
    return x + y
  }
}
const add5 = makeAdder(5)
console.log("P5 add5(3):", add5(3))

// ---------- PART 6 ----------
// GOAL: [0,1,2] (each function remembers its own number)
const fns = []
for (let i = 0; i < 3; i++) {
  fns.push(() => i)
}
console.log("P6 loop:", fns.map(f => f()))

// ---------- LEVEL 3: make it better (after everything above matches) ----------
// Remove the // in front of each console.log line to test your work.
//
// 1. Change makeCounter to makeCounter(start = 0, step = 1). Each call adds step to the count
//    and returns the NEW count.
const c = makeCounter(10, 5)
console.log("U1:", c(), c(), c())          // expected: 15 20 25
//
// 2. Write once(fn): returns a function that runs fn only the FIRST time, and afterwards
//    just returns the first result without running fn again.
function once(fn) {
  let hasRun = false;
  let result;

  return function() {
    if (!hasRun) {
      result = fn();
      hasRun = true;
    }

    return result;
  };
}
const init = once((fn) => { console.log("setup!"); return 42 })
console.log("U2:", init(), init())         // expected: setup! (printed once) then: 42 42
//
// 3. Write makeStore(): returns an object with add(item) and getAll(). The array must be
//    hidden inside, and getAll() must return a COPY so outsiders cannot change it.
function makeStore()
{
  const store=[]
  function add(item)
  {
    store.push(item)
  }
  function getAll()
  {
    return [...store]
  }
  return {
  add: add,
  getAll: getAll
};
}
const store = makeStore()
store.add("a"); store.add("b")
store.getAll().push("hack")
console.log("U3:", store.getAll())         // expected: ["a","b"]

// ---------- EXPECTED OUTPUT for levels 1 and 2 (peek only when you are done, or really stuck) ----------
// P1 rate: 0.18
// P2 balance: 100
// P3 label: big
// P4 counter: 1 2 3
// P5 add5(3): 8
// P6 loop: [0,1,2]
