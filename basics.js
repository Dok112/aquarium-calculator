let length = 60;
let width = 40;
let height = 40;


function calculateVolume (length, width, height) {
  if(length <= 0 || width <= 0 || height <= 0) {
    console.log("Ошибка, число должно быть больше 0");
    return
  } 

  else if(typeof length !== "number" || typeof width !== "number" || typeof height !== "number") {
    console.log("Ошибка, не число!");
    return
  }

  else {
    let volume = length * width * height;
    console.log("Объём аквариума: " + volume);
    return volume

  }
}
calculateVolume(length, width, height);

for (let i =0; i < 3; i++) {
  if (i === 0 ) {
     length = 20; width = 30; height = 25;
    calculateVolume(length, width, height);
    console.log("Аквариум " + (i + 1) + " рассчитан");
    
  } else if(i === 1) {
     length = 30; width = 40; height = 35;
    calculateVolume(length, width, height);
    console.log("Аквариум " + (i + 1) + " рассчитан");
    
  }
    else if (i === 2) {
     length = 45; width = 68; height = 57;
      calculateVolume(length, width, height);
      console.log("Аквариум " + (i + 1) + " рассчитан");

  }
  console.log("Все аквариумы рассчитаны.");
}