# 🧮 fibonacci-sum-calculator

A JavaScript program that **calculates the sum of all odd Fibonacci numbers** that are **less than or equal to a given number**.  
This algorithm blends **iteration**, **conditional filtering**, and **arithmetic logic** — a perfect mini project to strengthen your understanding of the Fibonacci sequence!

---

## ✨ Features

- 🔢 Generates Fibonacci numbers up to a given limit  
- 🧠 Filters only **odd** Fibonacci numbers  
- ➕ Returns the **sum** of those odd numbers  
- 🧮 Demonstrates practical use of loops and conditionals  
- 🧪 Beginner-friendly and well-commented for learning

---

## 📘 Background: Fibonacci Sequence

The **Fibonacci sequence** starts with **0** and **1**, and each subsequent number is the **sum of the two preceding ones**.  

`[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...]`

Odd Fibonacci numbers from this sequence are:  
`[1, 1, 3, 5, 13, 21, 55, ...]`

This project sums all such numbers that are **≤ your chosen input**.

---

## 🧩 Source Code

```javascript
/*
This is a fibonacci sum calculator. It takes a number and returns the sum of all odd Fibonacci numbers that are less than or equal to that number
User Stories

- A `sumFibs` function accepts a number as an argument.
- The `sumFibs` function returns the sum of all odd Fibonacci numbers that are less than or equal to the given number.
- The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous ones.
- Only the odd Fibonacci numbers are added to the sum.
*/

const sumFibs = (aNumber) => {
  // Capture all fibonacci numbers
  let fibNos = [0, 1];
  for (let i = 2; i < aNumber + 1; i++)
    fibNos.push(fibNos[i - 1] + fibNos[i - 2]);

  // Remove the first number because it is a zero
  fibNos.shift();

  // Exclude nos that are higher than aNumber
  let fibNew = [];
  for (let item of fibNos) if (item <= aNumber) fibNew.push(item);

  // Capture all odd fibonacci numbers from fibNew
  let odds = [];
  for (let item of fibNew) if (item % 2 === 1) odds.push(item);

  // Get the sum of all odd fibonacci numbers;
  let sumTotal = 0;
  for (let item of odds) sumTotal += item;
  return sumTotal;
};

console.log(sumFibs(75024));
```
## ▶️ Example Runs
```javascript
> sumFibs(10)
10   // 1 + 1 + 3 + 5

> sumFibs(1000)
1785 // Sum of all odd Fibonacci numbers ≤ 1000

> sumFibs(75024)
60696 // Result printed in the source file
```

## 🧠 How It Works (Step-by-Step)

1. Generate Fibonacci numbers starting from 0 and 1.  
2. Filter out numbers greater than the input.  
3. Select only odd numbers using the modulo operator `% 2`.  
4. Sum all selected numbers and return the total.

---

## ⚙️ Time Complexity

- **O(n)** — single loop iteration for Fibonacci generation and filtering.  
- **O(n)** space for storing generated numbers.  

Lightweight and efficient for typical use cases.

---

## 🧪 Learning Outcomes

This mini project strengthens:

- Understanding of **loops** (`for ... of`)  
- Use of **arrays** and **conditional filters**  
- **Algorithmic logic** (building and reducing sequences)  
- Familiarity with **modulo operations**  
- Confidence in writing **clean, functional JavaScript**

---

## 🚀 Run Locally

```bash
node source.js
```

## 🧾 License
MIT License — free for personal and educational use.