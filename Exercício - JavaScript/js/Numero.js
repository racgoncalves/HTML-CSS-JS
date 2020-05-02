
function checar(num){

  if (num >= 0 && num <= 10) {
     return "Seu número é: "+num;
  }else {
     return "O número "+num+" é inválido!";
  }
}


window.onload = function(){
  objNumero = document.getElementById('numero');
  objBotao = document.getElementById('botao');
  objResultado = document.getElementById('resultado');

  objBotao.onclick = function(){

    objResultado.innerHTML += checar(objNumero.value)+"<br>";

  }
}
