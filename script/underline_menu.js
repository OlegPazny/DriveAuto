let nav=document.querySelector('.pages');
let btn=nav.children;
let underline=document.querySelectorAll('.underline');

for(let i=0; i<4; i++){
    btn[i].addEventListener('mouseover', (event)=>{
        // underline[i].style.setProperty('visibility','visible');
        underline[i].style.setProperty('width','100%');
        underline[i].style.setProperty('transition','0.5s ease-in-out');
    });
    btn[i].addEventListener('mouseleave', (event)=>{
        // underline[i].style.setProperty('visibility','hidden');
        underline[i].style.setProperty('width','0%');
        underline[i].style.setProperty('transition','0.5s ease-in-out');
    });
}
