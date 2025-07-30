let array: number[] = [1, 2, 3, 4, 5];

// Calcolo della media
let somma = 0;
for (let i = 0; i < array.length; i++) {
  somma += array[i];
}
let media = somma / array.length;
console.log(`La media è: ${media}`);
console.log(`la somma è: ${somma}`);
