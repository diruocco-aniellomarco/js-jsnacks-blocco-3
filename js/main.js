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

const firstW = prompt('Scrivi la prima parola');
const secondW = prompt('Scrivi la seconda parola');

if (firstW.length == secondW.length) {
    console.log(firstW);
    console.log(secondW);
} else if (firstW.length > secondW.length) {
    console.log(firstW);
} else {
    console.log(secondW);
}