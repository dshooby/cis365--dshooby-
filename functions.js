/* define your functions here */

function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(item, total) {
    document.write('<tr>');
    document.write(`<td><img src="${item.img}"></td>`);
    document.write(`<td>${item.name}</td>`);
    document.write(`<td>${item.quantity}</td>`);
    document.write(`<td>$${item.price.toFixed(2)}</td>`);
    document.write(`<td>$${total.toFixed(2)}</td>`);
    document.write('</tr>');
}

let subtotal = items.reduce((acc, item) => acc + calculateTotal(item.quantity, item.price), 0);
let tax = subtotal * tax_rate;
let shipping = subtotal >= shipping_threshold ? 0 : 40;
let grandTotal = subtotal + tax + shipping;

document.querySelector('.totals:nth-child(4) td:last-child').textContent = `$${subtotal.toFixed(2)}`;
document.querySelector('.totals:nth-child(5) td:last-child').textContent = `$${tax.toFixed(2)}`;
document.querySelector('.totals:nth-child(6) td:last-child').textContent = `$${shipping.toFixed(2)}`;
document.querySelector('.totals:nth-child(7) td:last-child').textContent = `$${grandTotal.toFixed(2)`;