
window.onload = function(){

  objBanda = document.getElementById('banda');
  objAno = document.getElementById('ano');
  objDisco = document.getElementById('disco');
  objBotao = document.getElementById('botao');
  objErro =
  objResposta1 = document.getElementById('resposta1');
  objResposta2 = document.getElementById('resposta2');
  objResposta3 = document.getElementById('resposta3');

  objBotao.onclick = function(){

    if (objBanda.value == "" || objAno.value == "" || objDisco.value == "") {
    // outra opção:
    // objBanda.value.length == 0 || objAno.value.length == 0 || objDisco.value.length == 0

      window.alert("Você não preencheu todos os campos!!");
      
    }else {

      objResposta1.innerHTML = objBanda.value;
      objResposta2.innerHTML = objAno.value;
      objResposta3.innerHTML = objDisco.value;
    }
  }
}
