function init() {
  console.log("init");
}

function add(a, b) {
  console.log("add");

  return Number(a) + Number(b);
}

function subtract(a, b) {
  console.log("subtract");
  return Number(a) - Number(b);
}

function divide(a, b) {
  console.log("divide");
  return Number(a) / Number(b);
}

function mult(a, b) {
  console.log("mult");
  return Number(a) * Number(b);
}

function roundTo(num, dec) {
  console.log("roundTo");
  return parseFloat(num).toFixed(dec);
}
