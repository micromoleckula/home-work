const one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '150px';

one.classList.add('two')

one.classList.add('two', 'three');
one.classList.remove('three');

const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
  this.classList.toggle('three');
}

console.log(one.getAttribute('data'));
console.log(document.querySelector('link').getAttribute('href'))

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
  gas[i].onclick = function () {
    let gallons = document.querySelector('.gallons').value;
    let amount = this.getAttribute('data');
    document.querySelector('.out').innerHTML = gallons*amount;
  }
}

let a = document.createElement('div');
