let array: number[] = [1, 2, 3, 4, 5];

// Calcolo della media
let somma = 0;
for (let i = 0; i < array.length; i++) {
  somma += array[i];
}
let media = somma / array.length;
console.log(`La media è: ${media}`);
console.log(`la somma è: ${somma}`);

// Oppure

const arrNumeri: number[] = [23, 67, 44, 4, 5];

let sum = 0;
for (let num of arrNumeri) {
  sum += num;
}

const med = sum / arrNumeri.length;

console.log(`La media è: ${med}`);
console.log(`la somma è: ${sum}`);

// creiamo una funzione per calcolare la somma e la media

function calcolaMediaESomma(arr: number[]): { media: number; somma: number } {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  const med = sum / arr.length;
  return { media: med, somma: sum };
}

calcolaMediaESomma(arrNumeri);
console.log(`La media è: ${calcolaMediaESomma(arrNumeri).media}`);
console.log(`La somma è: ${calcolaMediaESomma(arrNumeri).somma}`);

// creiamo una funzione per trovare il numero più grande e più piccolo in un array

const arrMinMax = [13, 0, 90, 8, 23];

function trovaMinMax(arr: number[]): { minimo: number; massimo: number } {
  let min = arr[0];
  let max = arr[0];

  for (let n of arr) {
    if (n < min) {
      min = n;
    }
    if (n > max) {
      max = n;
    }
  }
  return { minimo: min, massimo: max };
}

console.log(`Il numero più piccolo è: ${trovaMinMax(arrMinMax).minimo}`);
console.log(`Il numero più grande è: ${trovaMinMax(arrMinMax).massimo}`);
