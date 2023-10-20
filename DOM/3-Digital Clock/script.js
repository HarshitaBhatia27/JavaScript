const clock=document.getElementById('clock')



// we want clock to run every second
setInterval(function(){
    let date= new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();
}, 1000)