function transactionsFor(transactionNumber, allTransactions) {
  return allTransactions.filter(transaction => transaction['id'] === transactionNumber);
}

function isItemAvailable(transactionNumber, allTransactions) {
  let transactions = transactionsFor(transactionNumber, allTransactions);
  let quantity = 0;

  transactions.forEach(function(transaction) {
    if (transaction['movement'] === 'in') {
      quantity += transaction['quantity'];
    } else if (transaction['movement'] === 'out') {
      quantity -= transaction['quantity'];
    }
  });

  return quantity > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
