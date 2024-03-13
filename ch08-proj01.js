
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

items.forEach(item => {
   let total = calculateTotal(item.quantity, item.price);
   outputCartRow(item, total);
});