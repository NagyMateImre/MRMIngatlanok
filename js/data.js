let Tomb = [
    {
        Helyszin: "Budapest",
        arMax : 45000000,
        arMin : 42500000,
        Terulet :20,
        Elhelyezkedes : "Belváros",
        Tipus : "Lakás",
        szobak : 3,
        id : 1,
        kep : "../img/sopron-centrum-lakas.jpg"
    },
    {
        Helyszin: "Szeged",
        arMax : 22000000,
        arMin : 19500000,
        Terulet :145,
        Elhelyezkedes : "Kertváros",
        Tipus : "Ház",
        szobak : 5,
        id : 2,
        kep : "../img/bp-bv-haz.jpg"
    },
    {
        Helyszin: "Debrecen",
        arMax : 10000000,
        arMin : 20000000,
        Terulet :15,
        Elhelyezkedes : "Centrum",
        Tipus : "Lakás",
        szobak : 3,
        id : 3,
        kep : "../img/debrecen-centrum-lakas.jpg"
    },
    {
        Helyszin: "Pécs",
        arMax : 45000000,
        arMin : 42500000,
        Terulet :80,
        Elhelyezkedes : "Belváros",
        Tipus : "Lakás",
        szobak : 3,
        id : 4,
        kep : "../img/eger-kv-haz.jpg"
    },
    {
        Helyszin: "Győr",
        arMax : 45000000,
        arMin : 42500000,
        Terulet :80,
        Elhelyezkedes : "Külváros",
        Tipus : "Lakás",
        szobak : 3,
        id : 5,
        kep : "../img/gyor-kv-lakas.jpg"
    },
    {
        Helyszin: "Miskolc",
        arMax : 55000000,
        arMin : 52500000,
        Terulet :105,
        Elhelyezkedes : "Külváros",
        Tipus : "Lakás",
        szobak : 4,
        id : 6,
        kep : "../img/eger-kv-haz.jpg"
    },
    {
        Helyszin: "Kecskemét",
        arMax : 72500000,
        arMin : 70000000,
        Terulet :95,
        Elhelyezkedes : "Belváros",
        Tipus : "Lakás",
        szobak : 3,
        id : 7,
        kep : "../img/kecskemet-bv-haz.jpg"
    },
    {
        Helyszin: "Szombathely",
        arMax : 87500000,
        arMin : 85000000,
        Terulet :120,
        Elhelyezkedes : "Centrum",
        Tipus : "Ház",
        szobak : 5,
        id : 8,
        kep : "../img/Haz.png"
    },
    {
        Helyszin: "Eger",
        arMax : 8500000,
        arMin : 6000000,
        Terulet :225,
        Elhelyezkedes : "Külváros",
        Tipus : "Telek",
        szobak : 1,
        id : 9,
        kep : "../img/szh-centrum-telek.jpg"
    },
    {
        Helyszin: "Zalaegerszeg",
        arMax : 25000000,
        arMin : 22500000,
        Terulet :85,
        Elhelyezkedes : "Centrum",
        Tipus : "Ház",
        szobak : 2,
        id : 10,
        kep : "../img/miskolc-kv-haz.jpg"
    },
    {
        Helyszin: "Sopron",
        arMax : 14500000,
        arMin : 12000000,
        Terulet :55,
        Elhelyezkedes : "Centrum",
        Tipus : "Ház",
        szobak : 2,
        id : 11,
        kep : "../img/miskolc-kv-lakas.jpg"
    },
    {
        Helyszin: "Budapest",
        arMax : 65000000,
        arMin : 62500000,
        Terulet :55,
        Elhelyezkedes : "Belváros",
        Tipus : "Lakás",
        szobak : 2,
        id : 12,
        kep : "../img/miskolc-kv-lakas.jpg"
    },
    {
        Helyszin: "Szombathely",
        arMax : 87500000,
        arMin : 85000000,
        Terulet :120,
        Elhelyezkedes : "Centrum",
        Tipus : "Ház",
        szobak : 5,
        id : 13,
        kep : "../img/eger-kv-telek.jpg"
    },
    {
        Helyszin: "Eger",
        arMax : 2500000,
        arMin : 4000000,
        Terulet :150,
        Elhelyezkedes : "Külváros",
        Tipus : "Telek",
        szobak : 1,
        id : 14,
        kep : "../img/eger-kv-telek.jpg"
    },
    {
        Helyszin: "Zalaegerszeg",
        arMax : 15000000,
        arMin : 12500000,
        Terulet :130,
        Elhelyezkedes : "Külváros",
        Tipus : "Telek",
        szobak : 1,
        id : 15,
        kep : "../img/szh-centrum-telek2.jpg"
    },
    {
        Helyszin: "Miskolc",
        arMax : 55000000,
        arMin : 52500000,
        Terulet :105,
        Elhelyezkedes : "Külváros",
        Tipus : "Lakás",
        szobak : 4,
        id : 16,
        kep : "../img/ze-centrum-ház.jpg"
    },
    {
        Helyszin: "Szeged",
        arMax : 105000000,
        arMin : 10250000,
        Terulet :175,
        Elhelyezkedes : "Kertváros",
        Tipus : "Ház",
        szobak : 6,
        id : 17,
        kep : "../img/ze-kv-lakas.jpg"
    },
];

localStorage.setItem("Tomb",JSON.stringify(Tomb))
localStorage.setItem("osszeingatlan",Tomb.length)


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