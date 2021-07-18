var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var btn = document.getElementById("btnC");

function n(a) {
  var n3 = n1.value.trim() + n2.value.trim();
  a = n3.length;
  if (n3.length > 10 && n3.length % 2 === 0) {
    a = n3.length / 2;
    return a;
  } else if (n3.length > 10 && n3.length % 2 === 1) {
    a = (n3.length + 1) / 2;
    return a;
  } else {
    return a;
  }
}
function frases(options) {
  if (n() === 1) {
    options = "15%";
  } else if (n() === 2) {
    options = "27%";
  } else if (n() === 3) {
    options = "93%";
  } else if (n() === 4) {
    options = "1%";
  } else if (n() === 5) {
    options = "75%";
  } else if (n() === 6) {
    options = "9999%";
  } else if (n() === 7) {
    options = "53%";
  } else if (n() === 8) {
    options = "42%";
  } else if (n() === 9) {
    options = "69%";
  } else {
    options = "38%";
  }
  return options;
}

btn.addEventListener("click", () => {

  console.log(n());
  if (!n1.value.length == 0 && !n2.value.length == 0) {

    if(n1.value.toLowerCase() == "jancell" || n2.value.toLowerCase() == "jancell"){
      /* alert("Que haces loca.\n¿Por que pones mi nombre?"); */
      result.innerText = "9999999%" + " de compatibilidad"
    }else{
      result.innerText = frases() + " de compatibilidad";
    }
  }else{
    alert("Llena los cuadros de texto.");
  }
});
