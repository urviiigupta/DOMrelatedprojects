const clk=document.getElementById('clock');
let date=new Date();
console.log(date.toLocaleTimeString());

// we have to keep reloading to change the time 

setInterval(function(){
    let date=new Date();
    clk.innerHTML=date.toLocaleTimeString();
},1000);