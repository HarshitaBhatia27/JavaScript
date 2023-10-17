const buttons= document.querySelectorAll('.button')
const body= document.querySelector("body")
const title=document.querySelector('h1')
//events
title.addEventListener('click',function(e){
    if(e.target.id=='title')
        body.style.backgroundColor='white';
})
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        // if(e.target.id=='grey'){
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id=='pink'){
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id=='blue'){
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id=='yellow'){
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id=='purple'){
        //     body.style.backgroundColor=e.target.id;
        // }
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor=e.target.id;
                break;
            case 'pink':
                body.style.backgroundColor=e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor=e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor=e.target.id;
                break;
            case 'purple':
                body.style.backgroundColor=e.target.id;
                break;
            default:
                body.style.backgroundColor='white';
                break;
        }

    })
})
