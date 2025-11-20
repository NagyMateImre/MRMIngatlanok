const Ingatlan = document.getElementById('Ingatlan');
const Ugyfel = document.getElementById('Ugyfel');
const Kezelt = document.getElementById('Kezelt');
const ertekek = document.getElementById('ertekek');
const table = document.getElementById('table');

document.addEventListener('DOMContentLoaded', () =>{
    let Ingatlanossz = Math.round(Math.random()*1000)
    Ingatlan.innerText = Ingatlanossz;
    Ugyfel.innerText = Ingatlanossz+ Math.round(Math.random()*30);
    Kezelt.innerText = localStorage.getItem("osszeingatlan");
});