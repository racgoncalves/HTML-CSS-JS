
// Teste PIS/PASEP

function TestaPIS(numeroPIS) {

	var multiplicadorBase = "3298765432";
	var total = 0;
	var resto = 0;
	var multiplicando = 0;
	var multiplicador = 0;
	var digito = 99;

	if (numeroPIS.length != 11 ||
		numeroPIS == "00000000000" ||
		numeroPIS == "11111111111" ||
		numeroPIS == "22222222222" ||
		numeroPIS == "33333333333" ||
		numeroPIS == "44444444444" ||
		numeroPIS == "55555555555" ||
		numeroPIS == "66666666666" ||
		numeroPIS == "77777777777" ||
		numeroPIS == "88888888888" ||
		numeroPIS == "99999999999") {
		return false;
	}
	else {

		for (var i = 0; i < 10; i++) {
			multiplicando = parseInt( numeroPIS.substring( i, i + 1 ) );
			multiplicador = parseInt( multiplicadorBase.substring( i, i + 1 ) );
			total += multiplicando * multiplicador;
		}

		resto = 11 - total % 11;
		resto = resto == 10 || resto == 11 ? 0 : resto;

		digito = parseInt("" + numeroPIS.charAt(10));
		if(resto == digito){
			return true;
		}
	}
}

// Teste CPF

function TestaCPF(strCPF) {

	var Soma;
  var Resto;
  Soma = 0;
  if (strCPF.length != 11 || strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" || strCPF == "44444444444" || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" || strCPF == "88888888888" || strCPF == "99999999999"){
		return false;
	}
  for (i=1; i<=9; i++) {
		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	}
  Resto = (Soma * 10) % 11;
  if ((Resto == 10) || (Resto == 11)){
		Resto = 0;
	}
  if (Resto != parseInt(strCPF.substring(9, 10))){
			return false;
	}
  Soma = 0;
  for (i = 1; i <= 10; i++){
		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
	}
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)){
		Resto = 0;
	}
  if (Resto != parseInt(strCPF.substring(10, 11))){
		return false;
	}
  return true;
}

$(document).ready(function() {

  Server01 = false;
  Server02 = false;
  Server03 = false;
  Server04 = false;
  Server05 = false;
  Server06 = false;

  // Nome

  objNome = $("#validationServer01");

  objNome.focusout(function(){

    if (objNome.val().length != 0){
      $("#validationServer01").removeClass("form-control is-invalid");
      $("#validationServer01").addClass("form-control is-valid");
      $("#resposta01P").show();
      Server01 = true;
    }
    else{
      $("#validationServer01").addClass("form-control is-invalid");
      $("#resposta01P").hide();
      $("#resposta01N").show();
      Server01 = false;
    }
  })

  // Sobrenome

  objSobrenome = $("#validationServer02");

  objSobrenome.focusout(function(){

    if (objSobrenome.val().length != 0){
      $("#validationServer02").removeClass("form-control is-invalid");
      $("#validationServer02").addClass("form-control is-valid");
      $("#resposta02P").show();
      Server02 = true;
    }
    else{
      $("#validationServer02").addClass("form-control is-invalid");
      $("#resposta02P").hide();
      $("#resposta02N").show();
      Server02 = false;
    }
  })

  // CPF

  objCPF = $("#validationServer03");

  objCPF.focusout(function(){

    valorCPF = objCPF.val().replace(/[^\d]+/g,'');
    resultadoCPF = TestaCPF(valorCPF);

    if (resultadoCPF == true){
      $("#validationServer03").removeClass("form-control is-invalid");
      $("#validationServer03").addClass("form-control is-valid");
      $("#resposta03P").show();
      Server03 = true;
    }
    else{
      $("#validationServer03").addClass("form-control is-invalid");
      $("#resposta03P").hide();
      $("#resposta03N").show();
      Server03 = false;
    }
  })

  // PIS/PASEP

  objPIS = $("#validationServer04");

  objPIS.focusout(function(){

    valorPIS = objPIS.val().replace(/[^\d]+/g,'');
    resultadoPIS = TestaPIS(valorPIS);

    if (resultadoPIS == true){
      $("#validationServer04").removeClass("form-control is-invalid");
      $("#validationServer04").addClass("form-control is-valid");
      $("#resposta04P").show();
      Server04 = true;
    }
    else{
      $("#validationServer04").addClass("form-control is-invalid");
      $("#resposta04P").hide();
      $("#resposta04N").show();
      Server04 = false;
    }
  })

  // RG

  objRG = $("#validationServer05");

  objRG.focusout(function(){

  if (objRG.val().length > 4){
    $("#validationServer05").removeClass("form-control is-invalid");
    $("#validationServer05").addClass("form-control is-valid");
    $("#resposta05P").show();
    Server05 = true;
  }
  else{
    $("#validationServer05").addClass("form-control is-invalid");
    $("#resposta05P").hide();
    $("#resposta05N").show();
    Server05 = false;
  }
})

  // CEP

  objCEP = $("#validationServer06");

  objCEP.focusout(function(){

    valor = objCEP.val().replace(/[^\d]+/g,'');

    if (valor.length == 8){
      $("#validationServer06").removeClass("form-control is-invalid");
      $("#validationServer06").addClass("form-control is-valid");
      $("#resposta06P").show();
      Server06 = true;
    }
    else{
      $("#validationServer06").addClass("form-control is-invalid");
      $("#resposta06P").hide();
      $("#resposta06N").show();
      Server06 = false;
    }
  })

  // Botão

  objBotao = $("#botao");

  objBotao.click(function(){

    if (Server01 == false){
      $("#validationServer01").addClass("form-control is-invalid");
      $("#resposta01P").hide();
      $("#resposta01N").show();
    }

    if (Server02 == false){
      $("#validationServer02").addClass("form-control is-invalid");
      $("#resposta02P").hide();
      $("#resposta02N").show();
    }

    if (Server03 == false){
      $("#validationServer03").addClass("form-control is-invalid");
      $("#resposta03P").hide();
      $("#resposta03N").show();
    }

    if (Server01 == false){
      $("#validationServer04").addClass("form-control is-invalid");
      $("#resposta04P").hide();
      $("#resposta04N").show();
    }

    if (Server01 == false){
      $("#validationServer05").addClass("form-control is-invalid");
      $("#resposta05P").hide();
      $("#resposta05N").show();
    }

    if (Server01 == false){
      $("#validationServer06").addClass("form-control is-invalid");
      $("#resposta06P").hide();
      $("#resposta06N").show();
    }

    if ($("#checkbox").is(":checked")){
      $("#checkbox").removeClass("form-check-input is-invalid");
      $("#checkbox").addClass("form-check-input");

      if (Server01 == true && Server02 == true && Server03 == true && Server04 == true && Server05 == true && Server06 == true){
        location.href="3-Upload.html";
      }

    }
    else{
      $("#checkbox").addClass("form-check-input is-invalid");
    }
  })
})
