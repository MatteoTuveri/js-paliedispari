const btn1 = document.querySelector('.btn-success');
const btn2 = document.querySelector('.btn-primary');
const input1 = document.getElementById('parola');
const input2 = document.getElementById('number');
const input3 = document.querySelector('.form-select')
const msg1 = document.getElementById('msg-1');
const msg2 = document.getElementById('msg-2');

btn1.addEventListener('click', function(){
    msg1.classList.add('d-none');
   let parola = input1.value;

   if(!isNaN(parseInt(parola))){
    msg1.innerHTML=`non sono ammessi numeri`
   }
   else if(palindromo(parola)){
    msg1.innerHTML=`parola palindroma`
   }
   else{
    msg1.innerHTML=`parola non palindroma`;
   }
   msg1.classList.remove('d-none');

})

btn2.addEventListener('click', function(){
    msg2.classList.add('d-none');
    let number = parseInt(input2.value);
    let evenOdd = input3.value;
    let pcNumber = getRndInteger(1,5);

    if(!isNaN(number) && (1<=number && number<=5) && evenOdd !== 'select'){
        msg2.innerHTML = ((even(sum(number,pcNumber)) && (evenOdd === 'even')) || (!even(sum(number,pcNumber)) && (evenOdd === 'odd')) )? `user ha vinto` : `pc ha vinto`;
    }
    else if(evenOdd === 'select'){

        msg2.innerHTML = `scegliere tra pari o dispari`

    }
    else{

        msg2.innerHTML = `inserire un numero da 1 a 5`
    }

    msg2.classList.remove('d-none');

})