function InsertChar(char) {
  document.getElementById("result").value += char;
}
function ClearResult() {
  document.getElementById("result").value = "";
}
function DeleteChar() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}

// calculating result

function ResultCalc() {
  let result = document.getElementById("result").value;
  let answer = eval(result);
  document.getElementById("result").value = answer;
}

document.getElementById("mn").style.display == "block";
document.getElementById("cl").addEventListener("click", () => {
  document.getElementById("mn").style.display = "none";
  if (document.getElementById("mn").style.display == "none") {
    document.getElementById("mn").style.display == "block";
  }
});

// calling functions

ResultCalc();
InsertChar();
DeleteChar();
ClearResult();
