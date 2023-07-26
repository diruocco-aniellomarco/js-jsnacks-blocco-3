// const firstNumber = parseInt(prompt(' Inserisci il primo numero: '));
// const secondNumber = parseInt(prompt(' Inserisci il secondo  numero: '));


// if (firstNumber > secondNumber) {

//     let random = Math.floor(Math.random() * (firstNumber - secondNumber) ) + secondNumber;
    
//     console.log('primo numero ' + firstNumber);
//     console.log('secondo numero ' + secondNumber);
//     console.log('il primo è più grande del secondo ' + random);
// } 

// if (firstNumber < secondNumber) {
//     let random = Math.floor(Math.random() * (secondNumber -firstNumber) ) + firstNumber;

    
//     console.log('primo numero ' + firstNumber);
//     console.log('secondo numero ' + secondNumber);
//     console.log('il secondo è più grande del primo ' + random);
// }

// if (firstNumber == secondNumber) {
    
//     console.log('primo numero ' + firstNumber);
//     console.log('secondo numero ' + secondNumber);
//     console.log('I due numeri sono uguali ' + random);
// }

// const firstW = prompt('Scrivi la prima parola');
// const secondW = prompt('Scrivi la seconda parola');

// if (firstW.length == secondW.length) {
//     console.log(firstW);
//     console.log(secondW);
// } else if (firstW.length > secondW.length) {
//     console.log(firstW);
// } else {
//     console.log(secondW);
// }

// Esercizio 3 e 4
// let listNum =[];

// let sum = 0;

// let cont = 0;

// let media;
// while (sum < 50) {
//     let number = parseInt(prompt(' Inserisci il numero: '));
//     sum = sum + number;
//     cont++;
   
//     if (sum > 50) {
//         media= sum / cont;
//     }
//     console.log('Il numero inserito è: ' + number);
    
    
// }
// console.log(listNum);
// console.log('La somma è:  ' + sum);
// console.log('La media è:  ' + media);



//ESERCIZIO 5
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(numbers.length);
    let evenNumbers = []; //array non variabile
    //numbers.length - 2 (perché devo arrivare fino al valore 6) e non meno 1 ; i++ senza ";"
    for (let i = 0; i < numbers.length - 1; i++) {
        //numbers[i] e non numbers poi != e non =
        if (numbers[i] % 2 == 0) {
            //devo inserire i valori di numbers
            evenNumbers.push(i);
        }
    }
    console.log(evenNumbers);

    // dovrebbe restituire [1,3,5]