let userInputNum = 45;
let countNum = 0;
let countList = [];
let beepList = [];
const numToBeep = [1];

for (let i = 0; i <= userInputNum; i++) {
  countList.push(countNum++);
}

// countList.forEach(function (numW1) {
//     if (countList.includes(1)) {
//         beepList.push("beep");
//     } else {
//         beepList.push(numW1);
//     }
// });

let forEachList = countList.map((el) => {
  return el.toString();
});
let searchNum = forEachList.map((el) => {
    if (el.includes("1") === true) {
        beepList.push("Beep");
    } else if (el.includes("1") === false) {
        beepList.push(el);
     }
});

// console.log(beepList);
// console.log(countList);
// console.log(forEachList);
console.log(searchNum);
