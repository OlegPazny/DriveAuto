let user_name=document.querySelector('.name');
let phone=document.querySelector('.phone');
let message=document.querySelector('.message-box');
let check=document.querySelector('.check');
function sendInfo(){
    if(document.querySelector('.check:checked')){
        if(user_name.value!=""&&phone.value!=""){
            console.log("Имя: "+user_name.value);
            console.log("Телефон: "+phone.value);
            console.log("Сообщение: "+message.value);
            user_name.value="";
            phone.value="";
            message.value="";
            check.checked=false;
            
            return false;
        }
        else{
            console.log("Заполните поля корректно!")
        }
    }else{
        console.log("check is missing");
    }
}