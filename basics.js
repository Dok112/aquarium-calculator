const length = 60;
const width = 40;
const height = 40;

console.log("Длина:", length);
console.log("Ширина:", width);
console.log("Высота:", height);

function  calculateVolume(length, width, height) {
  return  length * width * height;
}

console.log("Объем 1", calculateVolume(5, 2, 3));
console.log("Объем 2", calculateVolume(10, 4, 8));
console.log("Объем 2", calculateVolume(length, width, height));

function checkEvenOdd(x) {
  return x % 2 ===0;
}

console.log(checkEvenOdd(13));

