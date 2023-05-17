let cards={
    "0":{
        "brand":"Opel",
        "model":"Vectra",
        "year":"2004",
        "run":"320050",
        "engine":"Дизель",
        "body":"Седан",
        "price":"900",
        "img":"../img/vectra_card.png",
        "id":0
    },
    "1":{
        "brand":"Opel",
        "model":"Vectra",
        "year":"2002",
        "run":"320070",
        "engine":"Дизель",
        "body":"Седан",
        "price":"9000",
        "img":"../img/vectra_card.png",
        "id":1
    },
    "2":{
        "brand":"Opel",
        "model":"Signum",
        "year":"2002",
        "run":"45632",
        "engine":"Дизель",
        "body":"Седан",
        "price":"250",
        "img":"../img/vectra_card.png",
        "id":2
    },
    "3":{
        "brand":"Opel",
        "model":"Vectra",
        "year":"2002",
        "run":"320",
        "engine":"Дизель",
        "body":"Седан",
        "price":"15560",
        "img":"../img/vectra_card.png",
        "id":3
    },
    "4":{
        "brand":"Opel",
        "model":"Vectra",
        "year":"2002",
        "run":"24000",
        "engine":"Дизель",
        "body":"Седан",
        "price":"95552",
        "img":"../img/vectra_card.png",
        "id":4
    },
    "5":{
        "brand":"Opel",
        "model":"Vectra",
        "year":"2002",
        "run":"45000",
        "engine":"Дизель",
        "body":"Седан",
        "price":"8596",
        "img":"../img/vectra_card.png",
        "id":5
    },
    "6":{
        "brand":"Opel",
        "model":"Vectra",
        "year":"2002",
        "run":"85690",
        "engine":"Дизель",
        "body":"Седан",
        "price":"1256",
        "img":"../img/vectra_card.png",
        "id":6
    },
    "7":{
        "brand":"Opel",
        "model":"Vectra",
        "year":"2002",
        "run":"32000",
        "engine":"Дизель",
        "body":"Седан",
        "price":"9633",
        "img":"../img/vectra_card.png",
        "id":7
    },
    "8":{
        "brand":"Opel",
        "model":"Vectra",
        "year":"2002",
        "run":"320008",
        "engine":"Дизель",
        "body":"Седан",
        "price":"8500",
        "img":"../img/vectra_card.png",
        "id":8
    }
};

let toArray = Object.values(cards);
let sortedByYearAsc = [...toArray].sort((a, b) => a.year - b.year);
let sortedByPriceAsc = [...toArray].sort((a, b) => a.price - b.price);
let sortedByRunAsc = [...toArray].sort((a, b) => a.run - b.run);

let sortedByYearDesc = [...toArray].sort((a, b) => a.year - b.year).reverse();
let sortedByPriceDesc = [...toArray].sort((a, b) => a.price - b.price).reverse();
let sortedByRunDesc = [...toArray].sort((a, b) => a.run - b.run).reverse();

let cardsSortedByYearAsc = {
    ...sortedByYearAsc
}
let cardsSortedByPriceAsc = {
    ...sortedByPriceAsc
}
let cardsSortedByRunAsc = {
    ...sortedByRunAsc
}
let cardsSortedByYearDesc = {
    ...sortedByYearDesc
}
let cardsSortedByPriceDesc = {
    ...sortedByPriceDesc
}
let cardsSortedByRunDesc = {
    ...sortedByRunDesc
}

function createCards(){
    let wrapper=document.querySelector('.card-wrapper');
    wrapper.innerHTML= "";
    for(let key in elems){
        let content = '<div class="card" id="'+elems[key].id+'"><img src="'+elems[key].img+'"><div class="info-block"><div class="row"><div class="name-model"><p>'+elems[key].brand+'</p><p>'+elems[key].model+'</p></div><p>'+elems[key].year+'</p></div><div class="row"><p>'+elems[key].run+' км</p><p>'+elems[key].engine+'</p><p>'+elems[key].body+'</p></div></div><div class="bottom-row"><p>'+elems[key].price+'$</p><a href="#"><p>Просмотр автомобиля</p></a></div></div>';
        wrapper.innerHTML+= content;
    }
}

let elems={};
function getValue(selectObject) {
    value = selectObject.value;
    if(value=="price_asc"){
        elems=cardsSortedByPriceAsc;
        createCards();
        console.log(elems);
    }
    if(value=="price_desc"){
        elems=cardsSortedByPriceDesc;
        createCards();
        console.log(elems);
    }
    if(value=="run_asc"){
        elems=cardsSortedByRunAsc;
        createCards();
        console.log(elems);
    }
    if(value=="run_desc"){
        elems=cardsSortedByRunDesc;
        console.log(elems);
    }
    if(value=="year_asc"){
        elems=cardsSortedByYearAsc;
        console.log(elems);
    }
    if(value=="year_desc"){
        elems=cardsSortedByYearDesc;
        console.log(elems);
    }
};




// for(let key in elems){
//     wrapper.document.write('<div class="card" id="'+elems[key].id+'">');
//     wrapper.document.write('<img src="'+elems[key].img+'">');
//     wrapper.document.write('<div class="info-block">');
//     wrapper.document.write('<div class="row">');
//     wrapper.document.write('<div class="name-model">');
//     wrapper.document.write('<p>'+elems[key].brand+'</p>');
//     wrapper.document.write('<p>'+elems[key].model+'</p>');
//     wrapper.document.write('</div>');
//     wrapper.document.write('<p>'+elems[key].year+'</p>');
//     wrapper.document.write('</div>');
//     wrapper.document.write('<div class="row">');
//     wrapper.document.write('<p>'+elems[key].run+' км</p>');
//     wrapper.document.write('<p>'+elems[key].engine+'</p>');
//     wrapper.document.write('<p>'+elems[key].body+'</p>');
//     wrapper.document.write('</div>');
//     wrapper.document.write('</div>');
//     wrapper.document.write('<div class="bottom-row">');
//     wrapper.document.write('<p class="price">'+elems[key].price+'$</p>');
//     wrapper.document.write('<a href="#"><p>Просмотр автомобиля</p></a>');
//     wrapper.document.write('</div>');
//     wrapper.document.write('</div>');
// }
