var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var btn = document.getElementById("btnC");

function n(a) {
  var n3 = n1.value.replace(/ /g, "") + n2.value.replace(/ /g, "");
  a = n3.length;
  if (n3.length > 10 && n3.length % 2 === 0) {
    a = n3.length / 2;
    return a;
  } else if (n3.length > 10 && n3.length % 2 === 1) {
    a = n3.length / 2;
    return a;
  } else {
    return a;
  }
}
function sentence(options) {
  if (n() === 5) {
    options = "19%";
  } else if (n() > 5 && n() < 6) {
    options = "85%";
  } else if (n() === 6) {
    options = "9999%";
  } else if (n() > 6 && n() < 7) {
    options = "69%";
  } else if (n() === 7) {
    options = "53%";
  } else if (n() > 7 && n() < 8) {
    options = "93%";
  } else if (n() === 8) {
    options = "42%";
  } else if (n() > 8 && n() < 9) {
    options = "75%";
  } else if (n() === 9) {
    options = "27%";
  } else if (n() === 10) {
    options = "38%";
  }
  return options;
}

function activeLoader() {
  loader = document.getElementById("loader");
  result.innerText = "";

  setTimeout(function () {
    result.style.display = "none";
    loader.style.display = "block";
  }, 0);
}
function desactiveLoader() {
  loader = document.getElementById("loader");
  result.innerText = sentence() + " de compatibilidad";
  setTimeout(function () {
    loader.style.display = "none";
    result.style.display = "block";
  }, 3500);
}

function clic() {
  if (n1.value.length > 0 && n2.value.length > 0) {
    if (
      n1.value.toLowerCase() == "jancell" ||
      n2.value.toLowerCase() == "jancell"
    ) {
      alert("Que haces loca.\n¿Por que pones mi nombre?");
    } else {
      activeLoader();
      desactiveLoader();
    }
  } else {
    alert("Escribe los nombres.");
  }
}
