let block=document.querySelectorAll('.select-btn');
let way_label=document.querySelector('.way');

let user_name=document.querySelector('.name');
let way=document.querySelector('.way_field');
let topic=document.querySelector('.topic');
let comment=document.querySelector('.comment');

let flag="byPhone";
block[0].style.boxShadow="0 0 15px 10px #0000001c";
way_label.innerHTML="Телефон *";
let way_name="Телефон";

function change(){
    let radio=document.querySelectorAll('.radio');

    way.value="";

    for(const q of radio){
        if(q.checked&&q.value=="byPhone"){
            block[1].style.boxShadow="0 0 7px 2px #0000001c";
            block[0].style.boxShadow="0 0 15px 10px #0000001c";
            flag=q.value;
            way_label.innerHTML="Телефон *";
            way_name="Телефон";
        }else if(q.checked&&q.value=="byMail"){
            block[0].style.boxShadow="0 0 7px 2px #0000001c";
            block[1].style.boxShadow="0 0 15px 10px #0000001c";
            flag=q.value;
            way_label.innerHTML="Почта *";
            way_name="Почта";
        }
    }
}

function sendInfo(){
    if(user_name.value!=""&&topic.value!=""&&comment.value!=""){
        console.log("Имя: "+user_name.value);
        console.log(way_name+": "+way.value);
        console.log("Тема: "+topic.value);
        console.log("Сообщение: "+comment.value);

        user_name.value="";
        topic.value="";
        way.value="";
        comment.value="";

        return false;
    }else{
        console.log("Заполните поля корректно");
    }
}
