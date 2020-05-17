
window.onload = function(){

  objBanda = document.getElementById('banda');
  objAno = document.getElementById('ano');
  objDisco = document.getElementById('disco');
  objBotao = document.getElementById('botao');

  objBotao.onclick = function(){

    if (objBanda.value == "" || objAno.value == "" || objDisco.value == "") {
    // outra opção:
    // objBanda.value.length == 0 || objAno.value.length == 0 || objDisco.value.length == 0

      window.alert("Você não preencheu todos os campos!!");

    }else {

      linha    = document.createElement('tr');
      coluna1  = document.createElement('td');
      coluna2  = document.createElement('td');
      coluna3  = document.createElement('td');
      coluna4  = document.createElement('td');

      corpo_lista = document.getElementsByTagName('tbody')[0];

      lista_linha = corpo_lista.getElementsByTagName('tr');

      n = lista_linha.length + 1;

      texto_coluna1 = document.createTextNode(n);
      texto_coluna2 = document.createTextNode(objBanda.value);
      texto_coluna3 = document.createTextNode(objAno.value);
      texto_coluna4 = document.createTextNode(objDisco.value);

      coluna1.appendChild(texto_coluna1);
      coluna2.appendChild(texto_coluna2);
      coluna3.appendChild(texto_coluna3);
      coluna4.appendChild(texto_coluna4);

      linha.appendChild(coluna1);
      linha.appendChild(coluna2);
      linha.appendChild(coluna3);
      linha.appendChild(coluna4);

      corpo_lista.insertBefore(linha, lista_linha[lista_linha.length]);

    }
  }
}
