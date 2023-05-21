let car_cards=JSON.parse(localStorage.getItem('card'));
let id_card=localStorage.getItem('id');
console.log(id_card);
console.log(car_cards);

let head=document.querySelector('.name');
let img=document.querySelector('.post-image');
let price=document.querySelector('.price');
let info=document.querySelector('.info');
let year=document.querySelector('.year');
let run=document.querySelector('.run');
let engine=document.querySelector('.engine');
let body=document.querySelector('.body');

head.innerHTML=car_cards[id_card].brand+" "+car_cards[id_card].model+", "+car_cards[id_card].year+" г.";
img.src=car_cards[id_card].img;
price.innerHTML=car_cards[id_card].price+" р.";
info.innerHTML=car_cards[id_card].year+" г."+" · "+car_cards[id_card].run+" км · DriveAuto · +375 (29) 865-79-68";
year.innerHTML="Год: "+car_cards[id_card].year+" г.";
run.innerHTML="Пробег: "+car_cards[id_card].run+" км";
engine.innerHTML="Двигатель: "+car_cards[id_card].engine;
body.innerHTML="Кузов: "+car_cards[id_card].body;

