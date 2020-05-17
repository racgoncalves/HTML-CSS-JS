
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

// Teste PIS

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

// Valida Ano
function validaAno(ano){
	ano = parseInt(ano);
  return (ano > 1920 && ano < 2006);
}

//Valida Mês
function validaMes(mes){
	mes = parseInt(mes);
  return (mes > 0 && mes <= 12);
}

//Dias Fevereiro
function diasFevereiro(ano){
	ano = parseInt(ano);
  if (ano % 400 == 0){
      return 29;
	}
  else if (ano % 100 != 0 && ano % 4 == 0){
      return 29;
	}
  else{
      return 28;
	}
}

//Valida Dia
function validaDia(dia, mes, ano){
	dia = parseInt(dia);
	mes = parseInt(mes);
	ano = parseInt(ano);
  listaMes = [31, diasFevereiro(ano), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return (dia > 0 && dia <= listaMes[mes - 1]);
}

$(document).ready(function() {

  Server01 = false;
  Server02 = false;
  Server03 = false;
  Server04 = false;
  Server05 = false;
  Server06 = false;
  Server07 = false;
  Server08 = false;
  Server09 = false;
  Server10 = false;
  Server11 = false;
  Server12 = false;
  Server13 = false;
  Server14 = false;
  Server15 = false;
  Server16 = false;

  // Nome

  objNome = $("#nome");

  objNome.focusout(function(){

		if (objNome.val().length == 0){
			$("#nome").removeClass("is-invalid");
			$("#nome").removeClass("is-valid");
		}
		else if (objNome.val().length != 0){
      $("#nome").removeClass("is-invalid");
      $("#nome").addClass("is-valid");
      Server01 = true;
    }
    else{
      $("#nome").addClass("is-invalid");
      Server01 = false;
    }
  })

  // CPF

  objCPF = $("#cpf");

  objCPF.focusout(function(){

    valorCPF = objCPF.val().replace(/[^\d]+/g,'');
    resultadoCPF = TestaCPF(valorCPF);

		if (objCPF.val().length == 0){
			$("#cpf").removeClass("is-invalid");
			$("#cpf").removeClass("is-valid");
		}
    else if (resultadoCPF == true){
      $("#cpf").removeClass("is-invalid");
      $("#cpf").addClass("is-valid");
      Server02 = true;
    }
    else{
      $("#cpf").addClass("is-invalid");
      Server02 = false;
    }
  })

  // PIS

  objPIS = $("#pis");

  objPIS.focusout(function(){

    valorPIS = objPIS.val().replace(/[^\d]+/g,'');
    resultadoPIS = TestaPIS(valorPIS);

		if (objPIS.val().length == 0){
			$("#pis").removeClass("is-invalid");
			$("#pis").removeClass("is-valid");
		}
    else if (resultadoPIS == true){
      $("#pis").removeClass("is-invalid");
      $("#pis").addClass("is-valid");
      Server03 = true;
    }
    else{
      $("#pis").addClass("is-invalid");
      Server03 = false;
    }
  })

	// Sexo

  objSexo = $("#sexo");

  objSexo.focusout(function(){

		if (objSexo.val().length != 0){
      $("#sexo").removeClass("is-invalid");
      $("#sexo").addClass("is-valid");
      Server04 = true;
    }
  })

	// Data de Nascimento

  objData = $("#data");

  objData.focusout(function(){

		valorData = objData.val().replace(/[^\d]+/g,'');
		resultadoAno = validaAno(valorData.substring(4,8));
		resultadoMes = validaMes(valorData.substring(2,4));
		resultadoDia = validaDia(valorData.substring(0,2),valorData.substring(2,4),valorData.substring(4,8));

		if (objData.val().length == 0){
			$("#data").removeClass("is-invalid");
			$("#data").removeClass("is-valid");
		}
    else if (resultadoAno == true && resultadoMes == true && resultadoDia == true){
      $("#data").removeClass("is-invalid");
      $("#data").addClass("is-valid");
      Server05 = true;
    }
    else{
      $("#data").addClass("is-invalid");
      Server05 = false;
    }
  })

	// Nacionalidade

  objNacionalidade = $("#nacionalidade");

  objNacionalidade.focusout(function(){

		if (objNacionalidade.val().length == 0){
			$("#nacionalidade").removeClass("is-invalid");
			$("#nacionalidade").removeClass("is-valid");
		}
    else if (objNacionalidade.val().length != 0){
      $("#nacionalidade").removeClass("is-invalid");
      $("#nacionalidade").addClass("is-valid");
      Server06 = true;
    }
    else{
      $("#nacionalidade").addClass("is-invalid");
      Server06 = false;
    }
  })

	// Estado

  objEstado = $("#estado");

  objEstado.focusout(function(){

		if (objEstado.val().length == 0){
			$("#estado").removeClass("is-invalid");
			$("#estado").removeClass("is-valid");
		}
    else if (objEstado.val().length != 0){
      $("#estado").removeClass("is-invalid");
      $("#estado").addClass("is-valid");
      Server07 = true;
    }
    else{
      $("#estado").addClass("is-invalid");
      Server07 = false;
    }
  })

	// Naturalidade

  objNaturalidade = $("#naturalidade");

  objNaturalidade.focusout(function(){

		if (objNaturalidade.val().length == 0){
			$("#naturalidade").removeClass("is-invalid");
			$("#naturalidade").removeClass("is-valid");
		}
    else if (objNaturalidade.val().length != 0){
      $("#naturalidade").removeClass("is-invalid");
      $("#naturalidade").addClass("is-valid");
      Server08 = true;
    }
    else{
      $("#naturalidade").addClass("is-invalid");
      Server08 = false;
    }
  })

	// Estado Civil

  objCivil = $("#civil");

  objCivil.focusout(function(){

    if (objCivil.val().length != 0){
      $("#civil").removeClass("is-invalid");
      $("#civil").addClass("is-valid");
      Server09 = true;
    }
  })

	// Nº de Filhos

  objFilhos = $("#filhos");

  objFilhos.focusout(function(){

		if (objFilhos.val().length == 0){
			$("#filhos").removeClass("is-invalid");
			$("#filhos").removeClass("is-valid");
		}
    else if (objFilhos.val().length != 0){
      $("#filhos").removeClass("is-invalid");
      $("#filhos").addClass("is-valid");
      Server10 = true;
    }
    else{
      $("#filhos").addClass("is-invalid");
      Server10 = false;
    }
  })

	// Etnia

  objEtnia = $("#etnia");

  objEtnia.focusout(function(){

    if (objEtnia.val().length != 0){
      $("#etnia").removeClass("is-invalid");
      $("#etnia").addClass("is-valid");
      Server11 = true;
    }
  })

	// Nº da Agência

  objAgencia = $("#agencia");

  objAgencia.focusout(function(){

		if (objAgencia.val().length == 0){
			$("#agencia").removeClass("is-invalid");
			$("#agencia").removeClass("is-valid");
		}
    else if (objAgencia.val().length == 4){
      $("#agencia").removeClass("is-invalid");
      $("#agencia").addClass("is-valid");
      Server12 = true;
    }
    else{
      $("#agencia").addClass("is-invalid");
      Server12 = false;
    }
  })

	// Dígito da Agência

  objDigitoAgencia = $("#digitoAgencia");

  objDigitoAgencia.focusout(function(){

		if (objDigitoAgencia.val().length == 0){
			$("#digitoAgencia").removeClass("is-invalid");
			$("#digitoAgencia").removeClass("is-valid");
		}
    else if (objDigitoAgencia.val().length == 1){
      $("#digitoAgencia").removeClass("is-invalid");
      $("#digitoAgencia").addClass("is-valid");
      Server13 = true;
    }
    else{
      $("#digitoAgencia").addClass("is-invalid");
      Server13 = false;
    }
  })

	// Nº da Conta

  objConta = $("#conta");

  objConta.focusout(function(){

		if (objConta.val().length == 0){
			$("#conta").removeClass("is-invalid");
			$("#conta").removeClass("is-valid");
		}
    else if (objConta.val().length > 0 && objConta.val().length < 8){
      $("#conta").removeClass("is-invalid");
      $("#conta").addClass("is-valid");
      Server14 = true;
    }
    else{
      $("#conta").addClass("is-invalid");
      Server14 = false;
    }
  })

	// Dígito da Conta

  objDigitoConta = $("#digitoConta");

  objDigitoConta.focusout(function(){

		if (objDigitoConta.val().length == 0){
			$("#digitoConta").removeClass("is-invalid");
			$("#digitoConta").removeClass("is-valid");
		}
    else if (objDigitoConta.val().length == 1){
      $("#digitoConta").removeClass("is-invalid");
      $("#digitoConta").addClass("is-valid");
      Server15 = true;
    }
    else{
      $("#digitoConta").addClass("is-invalid");
      Server15 = false;
    }
  })

	// Tamanho da Camiseta

  objCamiseta = $("#camiseta");

  objCamiseta.focusout(function(){

    if (objCamiseta.val().length != 0){
      $("#camiseta").removeClass("is-invalid");
      $("#camiseta").addClass("is-valid");
      Server16 = true;
    }
  })

  // Botão

  objBotao = $("#botao");

  objBotao.click(function(){

    if (Server01 == false){
      $("#nome").addClass("is-invalid");
    }

    if (Server02 == false){
      $("#cpf").addClass("is-invalid");
    }

    if (Server03 == false){
      $("#pis").addClass("is-invalid");
    }

    if (Server04 == false){
      $("#sexo").addClass("is-invalid");
    }

    if (Server05 == false){
      $("#data").addClass("is-invalid");
    }

    if (Server06 == false){
      $("#nacionalidade").addClass("is-invalid");
    }

    if (Server07 == false){
      $("#estado").addClass("is-invalid");
    }

    if (Server08 == false){
      $("#naturalidade").addClass("is-invalid");
    }

    if (Server09 == false){
      $("#civil").addClass("is-invalid");
    }

    if (Server10 == false){
      $("#filhos").addClass("is-invalid");
    }

    if (Server11 == false){
      $("#etnia").addClass("is-invalid");
    }

    if (Server12 == false){
      $("#agencia").addClass("is-invalid");
    }

    if (Server13 == false){
      $("#digitoAgencia").addClass("is-invalid");
    }

    if (Server14 == false){
      $("#conta").addClass("is-invalid");
    }

    if (Server15 == false){
      $("#digitoConta").addClass("is-invalid");
    }

    if (Server16 == false){
      $("#camiseta").addClass("is-invalid");
    }

    if ($("#check").is(":checked")){
      $("#check").removeClass("is-invalid");
      $("#check").addClass("form-check-input");

      if (Server01 == true && Server02 == true && Server03 == true && Server04 == true && Server05 == true && Server06 == true && Server07 == true && Server08 == true && Server09 == true && Server10 == true && Server11 == true && Server12 == true && Server13 == true && Server14 == true && Server15 == true && Server16 == true){
        location.href="3-Upload.html";
      }

    }
    else{
      $("#check").addClass("is-invalid");
    }
  })
})
