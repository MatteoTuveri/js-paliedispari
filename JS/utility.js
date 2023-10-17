//genera numero random

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//controlla se una parola è palindroma

function palindromo(parola) {

    const split = parola.split('');
    const reverse = parola.split('');
    reverse.reverse();
    let value = true;
    for(let i = 0; i < split.length ; i++){

        if(split[i] !== reverse[i]){
            value = false;
        }
    }
    console.log(value);
    return value;
}

//controlla se un numero è pari

function even(number){
    return (number % 2 === 0)? true : false;
}

//somma due numeri

function sum(number1,number2){
    return number1 + number2;
}
