const button=document.querySelectorAll('.button');
const body=document.querySelector("body");

button.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
 
       if(e.target.id==="ran")
       {   
           randomcol();    
       }

       else
       {
        body.style.backgroundColor=e.target.id;
       }
    })
});

function randomcol()
{
    let r=randomnum();
    let g=randomnum();
    let b=randomnum();
    console.log(r);

    body.style.backgroundColor=`rgb(${r},${g},${b})`;
}

function randomnum()
{

    let y = Math.floor(Math.random()*256);
    return y;
}