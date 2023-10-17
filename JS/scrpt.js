const btn = document.querySelector('.btn');
const input = document.getElementById('parola');
const msg = document.getElementById('msg');

btn.addEventListener('click', function(){
    msg.classList.add('d-none');
   let parola = input.value;

   if(!isNaN(parseInt(parola))){
    msg.innerHTML=`non sono ammessi numeri`
   }
   else if(palindromo(parola)){
    msg.innerHTML=`parola palindroma`
   }
   else{
    msg.innerHTML=`parola non palindroma`;
   }
   msg.classList.remove('d-none');

})