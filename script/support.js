let block=document.querySelectorAll('.select-btn');
let way_label=document.querySelector('.way');

let flag="byPhone";
block[0].style.boxShadow="0 0 15px 10px #0000001c";
way_label.innerHTML="Телефон *"

function change(){
    let radio=document.querySelectorAll('.radio');

    for(const q of radio){
        if(q.checked&&q.value=="byPhone"){
            block[1].style.boxShadow="0 0 7px 2px #0000001c";
            block[0].style.boxShadow="0 0 15px 10px #0000001c";
            flag=q.value;
            way_label.innerHTML="Телефон *"
        }else if(q.checked&&q.value=="byMail"){
            block[0].style.boxShadow="0 0 7px 2px #0000001c";
            block[1].style.boxShadow="0 0 15px 10px #0000001c";
            flag=q.value;
            way_label.innerHTML="Почта *"
        }
    }
}
