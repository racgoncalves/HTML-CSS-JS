
$(document).ready(function() {

  Server01 = false;
  Server02 = false;

  // Orientação Sexual

  objOrientacao = $("#orientacao");

  objOrientacao.focusout(function(){

		if (objOrientacao.val().length == 0){
      Server01 = false;
		}
		else if (objOrientacao.val().length != 0){
      Server01 = true;
    }
    else{
      Server01 = false;
    }
  })

  // Religião

  objReligiao = $("#religiao");

  objReligiao.focusout(function(){

    if (objReligiao.val().length == 0){
      Server02 = false;
    }
    else if (objReligiao.val().length != 0){
      Server02 = true;
    }
    else{
      Server02 = false;
    }
  })

  // Botão

  objBotao = $("#botao");

  objBotao.click(function(){

    if (Server01 == false && !$("#check1").is(":checked")){
      $("#check1").addClass("is-invalid");
    }
    else{
      $("#check1").removeClass("is-invalid");
    }

    if (Server02 == false && !$("#check2").is(":checked")){
      $("#check2").addClass("is-invalid");
    }
    else{
      $("#check2").removeClass("is-invalid");
    }

    // Troca de página

    if (((Server01 == true && !$("#check1").is(":checked")) || (Server01 == false && $("#check1").is(":checked"))) && ((Server02 == true && !$("#check2").is(":checked")) || (Server02 == false && $("#check2").is(":checked")))){
      location.href="4-Upload.html";
    }

  })
})
