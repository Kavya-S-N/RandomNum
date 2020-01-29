var btn=document.getElementById('btn');
var txtbox=document.getElementById('num');
var cment=document.getElementById('cmnt')
let i=2
txtbox.style.border='2px solid blue'
let random=Math.floor(Math.random()*10)+1;
console.log(random)
btn.addEventListener('click',CheckValue);
function CheckValue()
{
     if(txtbox.value!=random)
      {
      if(i>0)
      {    
      txtbox.style.border='2px solid red'
      btn.textContent="submit"
      cment.textContent=`Wrong Answer...! you havr ${i} tries left`
      cment.style.color='red'
      i=i-1;
      }
      else{
      txtbox.disabled=true;
      txtbox.style.border='1px solid black'
      cment.textContent=`Sorry You Lose the Game..`
      btn.textContent="Restart"
      btn.addEventListener('click',reastrt)
        function reastrt()
         {
            location.reload();
         }
      }
    }
    else{
        txtbox.style.border='2px solid green'
        txtbox.disabled=true;
        btn.textContent="Restart"
        cment.textContent="You won,Answer is 5 !.."
        cment.style.color='green'
        btn.addEventListener('click',reastrt)
        function reastrt()
         {
            location.reload();
         }
     }
}
