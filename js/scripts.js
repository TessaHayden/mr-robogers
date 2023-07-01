function replaceNum() {
  let userInputNum = document.getElementById("userNum");
  const numToUse = parseInt(userInputNum.value);
  let countNum = 0;
  let countList = [];
  let beepList = [];

  for (let i = 0; i <= numToUse; i++) {
    countList.push(countNum++);
  }

  let forEachList = countList.map((el) => {
    return el.toString();
  });

  forEachList.map((el) => {
    if (el.includes("3" || "2") === true) {
      beepList.push("Won't you be my neighbor");
    } else if (el.includes("2") === true) {
      beepList.push("boop");
    } else if (el.includes("1") === true) {
      beepList.push("beep");
    } else {
      beepList.push(el);
    }
  });
  document.querySelector("p#replace-msg").innerText = beepList;
}

window.addEventListener("load", function () {
  const form = document.querySelector("form");
  const resetBtn = document.getElementById("reset-btn");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    replaceNum();
  });
  resetBtn.addEventListener("click", function () {
    document.querySelector("input#userNum").value = "";
    document.querySelector("p#replace-msg").innerText = "";
  });
});
