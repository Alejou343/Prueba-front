// Desafío 2: JavaScript

// Implementa una función en JavaScript que tome un array de números como argumento
// y devuelva la suma de todos los números pares en el array.

// Javascript --> With validations

const returnOnlyPairsJS = (array) => {
    if (array.some(element => typeof(element) != 'number')) {
        return []
    } else {
        return array.filter(element => !(element % 2))
    }
}


// Testing function 

const test2 = [1, 2, 3, 4, 5, 6];
console.assert(JSON.stringify(returnOnlyPairsJS(test2)) === JSON.stringify([2, 4, 6]), 'Test 2 Failed');

const test4 = [1, 'two', 3, true, 4];
console.assert(JSON.stringify(returnOnlyPairsJS(test4)) === JSON.stringify([]), 'Test 4 Failed');
