// Desafío 2: JavaScript

// Implementa una función en JavaScript que tome un array de números como argumento
// y devuelva la suma de todos los números pares en el array.

// Typescript --> No validations
const returnOnlyPairsTS = (array: number[]): number[] => {
    return array.filter((element: number) => !(element % 2))
}