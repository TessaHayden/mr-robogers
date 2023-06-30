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

let searchNum1 = forEachList.map((el) => {
    if (el.includes("1") === true) {
        beepList.push("beep")
    } else {
        beepList.push(el)
    }
});

let searchNum2 = forEachList.forEach((el) => {
    if (el.includes("2") === true) {
        beepList.push("boop")
    }
})

let searchNum3 = forEachList.forEach((el) => {
    if (el.includes("3") === true) {
        beepList.push("Won't you be my neighbor?")
    }
})
console.log(beepList);
// console.log(countList);
// console.log(forEachList);
// console.log(searchNum);
