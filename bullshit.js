function bullshit(data) {
  // related variable
  console.log(data);
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"],
  };

  const phrase = ["很簡單", "很容易", "很快", "很正常"];
  const people = data.target;
  // handle error
  if (people === undefined) return;

  let bullshit = "";
  // random number choose the task and phrase array
  let indexOfTask = Math.floor(Math.random() * task[people].length);
  let indexOfPhrase = Math.floor(Math.random() * phrase.length);
  // match the target to choose the task
  if (people === "engineer") {
    bullshit = `身為一個工程師，${task[people][indexOfTask]}，${phrase[indexOfPhrase]}!`;
  }

  if (people === "designer") {
    bullshit = `身為一個設計師，${task[people][indexOfTask]}，${phrase[indexOfPhrase]}!`;
  }

  if (people === "entrepreneur") {
    bullshit = `身為一個創業家，${task[people][indexOfTask]}，${phrase[indexOfPhrase]}!`;
  }

  console.log(bullshit);
  return bullshit;
}

module.exports = bullshit;
