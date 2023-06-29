let userInputNum = 45;
let countNum = 0;
const countList = [];

for (let i = 0; i <= userInputNum; i++) {
  countList.push(countNum++);
}

let beepList = [];

let forEachList = countList.map((el) => {
  return el.toString();
});
let searchNum = forEachList.map((el) => {
  return el.includes("1");
});
// console.log(beepList);
// console.log(countList);
// console.log(forEachList);
