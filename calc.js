const table = [
  [0.3, 0.5, 0.8, 1.2, 2, 3, 5, 8, 12, 20, 30, 50],
  [0.4, 0.6, 1, 1.6, 2.5, 4, 6, 10, 16, 25, 40, 60],
  [0.5, 0.8, 1.2, 2, 3, 5, 8, 12, 20, 30, 50, 80],
  [0.6, 1, 1.6, 2.5, 4, 6, 10, 16, 25, 40, 60, 100],
  [0.8, 1.2, 2, 3, 5, 8, 12, 20, 30, 50, 80, 120],
  [1, 1.6, 2.5, 4, 6, 10, 16, 25, 40, 60, 100, 160],
  [1.2, 2, 3, 5, 8, 12, 20, 30, 50, 80, 120, 200],
  [1.6, 2.5, 4, 6, 10, 16, 25, 40, 60, 100, 160, 250],
  [2, 3, 5, 8, 12, 20, 30, 50, 80, 120, 200, 300],
  [2.5, 4, 6, 10, 16, 25, 40, 60, 100, 160, 250, 400],
];

document.getElementById("myform").addEventListener("submit", (e) =>
{
    e.preventDefault();
})

function calculate() {
  const DOMdimensiuneNominala = document.getElementById("d-nominala");
  const DOMclasaToleranta = document.getElementById("clasa-toleranta");
  const dNom = DOMdimensiuneNominala.valueAsNumber;
  const clsTol = parseInt(DOMclasaToleranta.value);

  if (DOMdimensiuneNominala.checkValidity()) {
    var tableRow, response;

    if (dNom < 3) {
      tableRow = 0;
    } else if (dNom < 6) {
      tableRow = 1;
    } else if (dNom < 18) {
      tableRow = 2;
    } else if (dNom < 50) {
      tableRow = 3;
    } else if (dNom < 120) {
      tableRow = 4;
    } else if (dNom < 250) {
      tableRow = 5;
    } else if (dNom < 500) {
      tableRow = 6;
    } else if (dNom < 800) {
      tableRow = 7;
    } else if (dNom < 1250) {
      tableRow = 8;
    } else if (dNom <= 2000) {
      tableRow = 9;
    }

    response = table[tableRow][clsTol - 1];

    const ansWrapper = document.getElementById("answer-wrapper");
    ansWrapper.style.display = "flex";
    document.getElementById("answer").innerText = response;
  }
}
