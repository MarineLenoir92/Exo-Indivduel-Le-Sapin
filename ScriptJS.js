function sapin1() {
  let symbol1 = "+";
  let symbol2 = "/*\\";
  let symbol3 = "/***\\";
  let afficherSapin1 = `   ${symbol1}  \n  ${symbol2}  \n ${symbol3}`  ;
  console.log(afficherSapin1)
}

function sapin2(n) {
  let i = 1;
  let chaine = " ".repeat(n) + "+ \n"
  while(i <= n){
    chaine += " ".repeat(n - i) + "/" + "*".repeat((i * 2)-1)  +  "\\ \n";
    i++;
  }
  console.log(chaine);
  return chaine
}
  


sapin1()
let sapin = sapin2(5) 
let baseCode = baliseHtml = document.getElementById("sapin")
baseCode.innerHTML = sapin