let player = "x";

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "7": {
      field("1", "1");
      break;
    }
    case "8": {
      field("1", "2");
      break;
    }
    case "9": {
      field("1", "3");
      break;
    }
    case "4": {
      field("2", "1");
      break;
    }
    case "5": {
      field("2", "2");
      break;
    }
    case "6": {
      field("2", "3");
      break;
    }
    case "1": {
      field("3", "1");
      break;
    }

    case "2": {
      field("3", "2");
      break;
    }
    case "3": {
      field("3", "3");
      break;
    }
  }
});

function field(x, y) {
  if (document.getElementById(x + y).value === "") {
    if (player === "x") {
      document.getElementById(x + y).value = "x";
      document.getElementById(x + y).style = "background-color: #1d3557";
      document.getElementById("indicator").style = "background-color: #e63946";
      player = "o";
    } else {
      document.getElementById(x + y).value = "o";
      document.getElementById(x + y).style = "background-color: #e63946";
      document.getElementById("indicator").style = "background-color: #1d3557";
      player = "x";
    }
    document.getElementById("indicator").innerHTML = player;

    if (
      (document.getElementById("11").value === "x" &&
        document.getElementById("12").value === "x" &&
        document.getElementById("13").value === "x") ||
      (document.getElementById("21").value === "x" &&
        document.getElementById("22").value === "x" &&
        document.getElementById("23").value === "x") ||
      (document.getElementById("31").value === "x" &&
        document.getElementById("32").value === "x" &&
        document.getElementById("33").value === "x") ||
      (document.getElementById("11").value === "x" &&
        document.getElementById("21").value === "x" &&
        document.getElementById("31").value === "x") ||
      (document.getElementById("12").value === "x" &&
        document.getElementById("22").value === "x" &&
        document.getElementById("32").value === "x") ||
      (document.getElementById("13").value === "x" &&
        document.getElementById("23").value === "x" &&
        document.getElementById("33").value === "x") ||
      (document.getElementById("11").value === "x" &&
        document.getElementById("22").value === "x" &&
        document.getElementById("33").value === "x") ||
      (document.getElementById("13").value === "x" &&
        document.getElementById("22").value === "x" &&
        document.getElementById("31").value === "x")
    ) {
      window.alert("POBIJEDIO X!");
      reset();
    }
    if (
      (document.getElementById("11").value === "o" &&
        document.getElementById("12").value === "o" &&
        document.getElementById("13").value === "o") ||
      (document.getElementById("21").value === "o" &&
        document.getElementById("22").value === "o" &&
        document.getElementById("23").value === "o") ||
      (document.getElementById("31").value === "o" &&
        document.getElementById("32").value === "o" &&
        document.getElementById("33").value === "o") ||
      (document.getElementById("11").value === "o" &&
        document.getElementById("21").value === "o" &&
        document.getElementById("31").value === "o") ||
      (document.getElementById("12").value === "o" &&
        document.getElementById("22").value === "o" &&
        document.getElementById("32").value === "o") ||
      (document.getElementById("13").value === "o" &&
        document.getElementById("23").value === "o" &&
        document.getElementById("33").value === "o") ||
      (document.getElementById("11").value === "o" &&
        document.getElementById("22").value === "o" &&
        document.getElementById("33").value === "o") ||
      (document.getElementById("13").value === "o" &&
        document.getElementById("22").value === "o" &&
        document.getElementById("31").value === "o")
    ) {
      window.alert("POBIJEDIO O!");
      reset();
    }
  }
}

function reset() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      document.getElementById(i.toString() + j.toString()).value = "";
      document.getElementById(i.toString() + j.toString()).style =
        "background-color: #a8dadc";
    }
  }
  player = "x";
  document.getElementById("indicator").innerHTML = player;
  document.getElementById("indicator").style = "background-color: #1d3557";
}
