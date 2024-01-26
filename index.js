



const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");


buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id==='box1'){
            body.style.backgroundColor=' rgb(98, 65, 65)';
        }

        if(e.target.id==="box2"){
            body.style.backgroundColor='rgb(219, 114, 114)';
        }

        if(e.target.id==="box3"){
            body.style.backgroundColor='rgb(44, 44, 21)';
        }

        if(e.target.id==="box4"){
            body.style.backgroundColor='rgb(180, 180, 105)';
        }
    
        if(e.target.id==="box5"){
            body.style.backgroundColor='rgb(210, 149, 75)';
        }
    
        if(e.target.id==="box6"){
            body.style.backgroundColor='rgb(115, 151, 139)';
        }
    
        if(e.target.id==="box7"){
            body.style.backgroundColor=' rgb(105, 74, 133)';
        }
    
        if(e.target.id==="box8"){
            body.style.backgroundColor='rgb(77, 141, 143)';
        }
    
        
    })
});