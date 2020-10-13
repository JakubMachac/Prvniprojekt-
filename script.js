function rofl() {
  let jm = document.getElementById("jmeno").value;
  console.log(jm);
 alert("CUS" + jm);
}


function vypocet() {
  let c1 = document.getElementById("cislo1").valueAsNumber;
    let c2 = document.getElementById("cislo2").valueAsNumber;
    let op = document.getElementById("operace").value

    let vyp = "?";
    if (isNaN(c1)) {
      alert("Neni zadano prvni cislo.");
    } else if (isNaN(c2)) {
      alert("Neni zadano druhe cislo.");
      
    } else if (op == "plus") {
      vyp = c1 + c2;
    } else if (op == "minus") {
      vyp = c1 - c2;
    } else if (op == "krat") {
      vyp = c1 * c2;
    } else if (op == "deleno") {
      if (c2 == 0) {
      alert("Nelze dělit nulou.")
    }else {
      vyp = c1 / c2;
      }
    } 
    if (!isNaN(vyp) && document.getElementById("zaokrouhlit").checked) {
      let pm = document.getElementById("pocetmist").value;
      vyp = vyp.toFixed(pm);
    }
  console.log(vyp);
  document.getElementById("vysledek").value = vyp ;
  document.getElementById("vysledek2").innerHTML = "Výsledek je <b>" + vyp + "</b>."; 
  
}