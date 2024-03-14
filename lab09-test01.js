/* add code after this comment */

console.log(document.getElementById("thumb-list"));
console.log(`MANY: `)
console.log(document.getElementsByClassName("thumb"));
console.log(`FIRST: `)
console.log(document.getElementsByClassName("thumb")[0]);

document.getElementById('thumb-list').style.border = "solid 1px #CCCCCC"
document.querySelector('#msg').value = document.querySelector('.box fieldset p').textContent;

const images = document.querySelectorAll('#thumb-list img');
console.log(images);
for (let img of images) {
    img.style.boxShadow = "6px 5px 1px rgba(0,0,0,.22)"
};

const d = document.querySelector('#msg');
d.innerHTML = '<h2>HELLO WORLD</h2>'