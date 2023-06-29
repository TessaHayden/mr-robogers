let userInputNum = 45
let countNum = 0;
const countList = [];

for (let i = 0; i <= userInputNum - 1; i++) {
    countList.push(countNum++); 
}

let beepList = [];

countList.forEach(function (numW1) {
    if (countList.includes(1)) {
        beepList.push("beep");
    } else {
        beepList.push(numW1);
    }
    console.log(beepList)
});
