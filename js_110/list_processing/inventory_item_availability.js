let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

function transactionsFor(id, arr) {
  return arr.filter((obj) => obj.id === id);
}

function isItemAvailable(id, arr) {
  let relevantTransactions = transactionsFor(id, arr);
  let sum = 0;
  relevantTransactions.forEach((obj) => {
    if (obj.movement === "in") {
      sum += obj.quantity;
    } else {
      sum -= obj.quantity;
    }
  });
  return sum > 0;
}

isItemAvailable(101, transactions); // false
isItemAvailable(103, transactions); // false
isItemAvailable(105, transactions); // true
