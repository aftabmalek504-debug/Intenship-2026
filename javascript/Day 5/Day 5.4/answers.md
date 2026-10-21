# Day 5 Practice Workbook — Solutions

## Section A — MCQs
1. B — `??`
2. A — `?.`
3. B — `JSON.stringify()`
4. C — `reduce()`
5. C — `sort()`
6. B — Strings
7. B — `removeItem()`
8. C — `null`
9. A — `??`
10. C — Same-origin JavaScript can access browser storage.

## Section B — Predict the Output
- Q1: `10`, then `0`.
- Q2: `10`.
- Q3: `{"name":"Mouse","price":500}`.
- Q4: `2`.
- Q5: sorted copy `[100, 200, 300]`; original `[300, 100, 200]`.

## Section C — Debugging
### Q1
```js
const json = '{"name":"Asha","age":21}';
const user = JSON.parse(json);
console.log(user.name);
```
### Q2
```js
const prices = [100, 20, 300, 5];
const sorted = [...prices].sort((a, b) => a - b);
console.log(sorted);
console.log(prices);
```
### Q3
```js
const tasks = ["Learn JS", "Practice React"];
localStorage.setItem("tasks", JSON.stringify(tasks));
const savedTasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");
console.log(savedTasks);
```

## Section D — Coding Exercises
### Q1
```js
function getCity(user = {}) {
  return user.address?.city ?? "Unknown city";
}
```
### Q2
```js
const products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }];
const restoredProducts = JSON.parse(JSON.stringify(products));
console.log(restoredProducts);
```
### Q3
```js
const products = [
  { name: "Pen", price: 10, quantity: 3 },
  { name: "Book", price: 50, quantity: 2 }
];
const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
console.log(total); // 130
```
### Q4
```js
const tasks = ["Learn JS", "Practice React"];
localStorage.setItem("tasks", JSON.stringify(tasks));
const restoredTasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");
console.log(restoredTasks);
```

## Section E — Mini Project
Open `index.html` in a browser. `script.js` stores tasks as JSON in `localStorage` and restores them after reload.

## Section F — Viva
1. `||` falls back for any falsy value; `??` only for `null` or `undefined`.
2. `JSON.stringify()` converts a JS value into JSON text.
3. `reduce()` combines array elements into one result.
4. `localStorage` persists across sessions; `sessionStorage` is for a browsing session.
5. Same-origin JavaScript can access browser storage; never store passwords or secret API keys there.
