let display = document.getElementById("display");
let angleMode = "Rad";
let lastAns = "";

function insert(value) {
  if (value === "π") value = "Math.PI";
  else if (value === "e") value = "Math.E";
  else if (value === "Ans") value = lastAns;
  else if (value === "EXP") value = "e";
  else if (value === "x!") value = "fact(";
  display.value += value;
}

function clearAll() {
  display.value = "0";
}

function toggleAngleMode() {
  angleMode = angleMode === "Rad" ? "Deg" : "Rad";
  event.target.innerText = angleMode;
}

function fact(n) {
  if (n === 0 || n === 1) return 1;
  return n * fact(n - 1);
}

function calculate() {
  try {
    let expression = display.value
      .replace(/sin\(/g, angleMode === "Deg" ? "Math.sin(toRad(" : "Math.sin(")
      .replace(/cos\(/g, angleMode === "Deg" ? "Math.cos(toRad(" : "Math.cos(")
      .replace(/tan\(/g, angleMode === "Deg" ? "Math.tan(toRad(" : "Math.tan(")
      .replace(/log/g, "Math.log10")
      .replace(/ln/g, "Math.log")
      .replace(/√/g, "Math.sqrt")
      .replace(/fact\(/g, "fact(");

    let result = eval(expression);
    display.value = result;
    lastAns = result;
  } catch (e) {
    display.value = "Error";
  }
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}
