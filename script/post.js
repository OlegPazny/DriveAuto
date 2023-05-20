let car_cards=JSON.parse(localStorage.getItem('card'));
let id_card=localStorage.getItem('id');

let head=document.querySelector('.name');
let img=document.querySelector('.post-image');
let price=document.querySelector('.price');
let info=document.querySelector('.info');
let year=document.querySelector('.year');
let run=document.querySelector('.run');
let engine=document.querySelector('.engine');
let body=document.querySelector('.body');
console.log(car_cards[id_card].brand)
head.innerHTML="gfdhjk";
localStorage.clear('id');