
$(document).ready(function() {

  objUsuario = $('#usuario');
	objSenha = $('#senha');
  objBotao = $('#botao');

  $(objBotao).click(function() {
    if (objUsuario.val() == "usuario" && objSenha.val() == "fiap123"){

      location.href="2-Dados.html";

    }
    else if (objUsuario.val() == "usuario" && objSenha.val() != "fiap123"){
      alert("Senha Incorreta!\n\nPara teste utilize os seguintes dados:\n\nLogin: usuario\nSenha: fiap123");
    }
    else {
      alert("Usuário não encontrado!\n\nPara teste utilize os seguintes dados:\n\nLogin: usuario\nSenha: fiap123");
    }
  })
})
