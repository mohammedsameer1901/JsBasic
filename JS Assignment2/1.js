function formatCurrency(amount, currencyCode) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode
  }).format(amount);
}

console.log(formatCurrency(1234567.89, 'USD')); 
console.log(formatCurrency(1234567.89, 'INR')); 
console.log(formatCurrency(1234567.89, 'EUR'));  
