
// Função Cadastrar
function cadastrar(usuario, senha, tipo){

	//usuário
	if (usuario.length == 0){
		objResultadoUsuario.innerHTML = "Usuário não digitado";
	} else if (usuario.length > 20){
		objResultadoUsuario.innerHTML = "O limite para o nome de usuário é de 20 caracteres";
	} else{
		objResultadoUsuario.innerHTML = "Ok";
	}

	//senha
	if (senha.length != 4) {
		objResultadoSenha.innerHTML = "A senha deve ter 4 dígitos, favor digitar novamente";
	} else{
		objResultadoSenha.innerHTML = "Ok";
	}

	//tipo
	if (tipo != "estudante" && tipo != "normal" && tipo != "aposentado"){
		objResultadoTipo.innerHTML = "Tipo de conta inválido";
	}	else{
		objResultadoTipo.innerHTML = "Ok";
	}

	//cadastro
	if (objResultadoUsuario.innerHTML == "Ok" && objResultadoSenha.innerHTML == "Ok" &&
		 objResultadoTipo.innerHTML == "Ok"){
		setTipo(tipo);
		usuarioSalvo = usuario;
		senhaSalva = senha;
		objResultadoCadastro.innerHTML = "Conta cadastrada com sucesso";
	} else {
			objResultadoCadastro.innerHTML = "Cadastro incompleto";
	}
}

// Função Tipo
function setTipo(tipo){
	if (tipo == "estudante") {
		limiteChequeEspecial = 250;
		taxaSaque = 0;
	}
	if (tipo == "normal"){
		limiteChequeEspecial = 500;
		taxaSaque = 10;
	}
	if (tipo == "aposentado"){
		limiteChequeEspecial = 750;
		taxaSaque = 5;
	}
}

// Função Login
function testaLogin(usuario, senha){
	if (usuario != usuarioSalvo || usuario == "padrao") {
		return "Usuario não encontrado";
	} else if (usuario == usuarioSalvo && senha!= senhaSalva && contaBloqueada == false) {
			while (cont > 1){
				if (cont > 2){
	  			cont -= 1;
					return "Senha incorreta"+"<br>"+"Você tem mais "+cont+" tentativas";
				} else {
					cont -=1;
					return "Senha incorreta" + "<br>" + "Essa é sua última tentativa"
					+	"<br>" + "Caso erre a conta será bloqueada";
				}
			}
			contaBloqueada = true;
			return "Conta Bloqueada";
	} else if (senha == senhaSalva && usuario == usuarioSalvo && contaBloqueada == false) {
			acessoConta = true;
			return "Acesso Permitido";
		} else {
			return "Conta Bloqueada";
		}
}

// Função Depositar
function depositar(valor){
	if (acessoConta == true) {
		valor = parseInt(valor);
		if (valor < 0) {
				return "O valor não pode ser negativo";
		}
		if(valor == 0) {
			return "Nenhum valor será depositado";
		} else {
					saldoConta += valor;
					saldoTotal = saldoConta + limiteChequeEspecial;
					extrato += "Depositado: R$" + valor + "<br>";
					return "Depósito realizado com sucesso" + "<br>" + "Depositado R$" + valor;
			}
	} else {
		return "Primeiro faça seu Login";
	}
}

// Função Sacar
function sacar(valor){
	if (acessoConta == true) {
		valor = parseInt(valor);
		if (valor < 0) {
				return "O valor não pode ser negativo";
		}
		if(valor == 0) {
			return "Nenhum valor será sacado";
		} else {
				valor += taxaSaque;
				if (valor > saldoConta) {
					if (valor > saldoTotal) {
						return "Saldo Insuficiente";
					}
					else {
						saldoConta -= valor;
						saldoTotal = limiteChequeEspecial + saldoConta;
						valorInicial = valor - taxaSaque;
						extrato += "Sacado: R$" + valorInicial + "<br>";
						return "Favor retire o seu dinheiro" + "<br>" + "<br>" + "Sacado: R$" + valorInicial
						+ "<br>" + "Taxa Saque: R$" + taxaSaque + "<br>" + "Total Debitado: R$" + valor;
					}
				}
				else{
					saldoConta -= valor;
					saldoTotal = saldoConta + limiteChequeEspecial;
					valorInicial = valor - taxaSaque;
					extrato += "Sacado: R$" + valorInicial + "<br>";
					return "Favor retire o seu dinheiro" + "<br>" + "<br>" + "Sacado: R$" + valorInicial
					+ "<br>" + "Taxa Saque: R$" + taxaSaque + "<br>" + "Total Debitado: R$" + valor ;
				}
			}
	} else {
		return "Primeiro faça seu Login";
	}
}

// Função Saldo
function getSaldo(){
	if (acessoConta == true) {
		if (saldoConta >= 0){
			saldoChequeEspecial = limiteChequeEspecial;
			return "Saldo Total: R$" + saldoTotal +"<br>" + "Saldo Conta: R$" + saldoConta
			+	"<br>" + "<br>" + "Limite Cheque Especial: R$" + limiteChequeEspecial + "<br>"
			+	"Limite não utilizado: R$" + saldoChequeEspecial;
		} else {
			saldoChequeEspecial = limiteChequeEspecial + saldoConta;
			saldoNegativo = Math.sqrt(saldoConta*saldoConta);
			return "Saldo Total: R$" + saldoTotal +"<br>" + "Saldo Conta: - R$" + saldoNegativo
			+	"<br>" + "<br>" + "Limite Cheque Especial: R$" + limiteChequeEspecial + "<br>"
			+	"Limite não utilizado: R$" + saldoChequeEspecial;
		}
	} else {
		return "Primeiro faça seu Login";
		}
}

// Função Extrato
function getExtrato(){
	if (acessoConta == true) {
		return extrato;
	} else {
			return "Primeiro faça seu Login";
	}
}

window.onload = function(){

	this.saldoConta = 0;
	this.saldoTotal = 0;
	this.limiteChequeEspecial = 0;
	this.taxaSaque = 0;
	this.usuarioSalvo = "padrao";
	this.senhaSalva = "padrao";
	this.cont = 4;
	this.contaBloqueada = false;
	this.acessoConta = false;
	this.extrato = "Extrato: " + "<br>" + "<br>";

	// usuário
  objUsuario = document.getElementById('usuario');
  objResultadoUsuario = document.getElementById('resultadoUsuario');

	// senha
	objSenha = document.getElementById('senha');
	objResultadoSenha = document.getElementById('resultadoSenha');

	// tipo
	objGetTipo = document.getElementById('tipo');
	objResultadoTipo = document.getElementById('resultadoTipo');

	// cadastro
	objBotaoCadastro = document.getElementById('botaoCadastro');
	objResultadoCadastro = document.getElementById("resultadoCadastro");

	// login
	objUsuarioLogin = document.getElementById('usuarioLogin');
	objSenhaLogin = document.getElementById('senhaLogin');
	objBotaoLogin = document.getElementById('botaoLogin');
	objResultadoLogin = document.getElementById('resultadoLogin');

	// depósito
	objDeposito = document.getElementById('deposito');
	objBotaoDeposito = document.getElementById('botaoDeposito');
  objResultadoDeposito = document.getElementById('resultadoDeposito');

	// saque
	objSaque = document.getElementById('saque');
	objBotaoSaque = document.getElementById('botaoSaque');
	objResultadoSaque = document.getElementById('resultadoSaque');

	// saldo
	objBotaoSaldo = document.getElementById('botaoSaldo');
	objResultadoSaldo = document.getElementById('resultadoSaldo');

	// extrato
	objBotaoExtrato = document.getElementById("botaoExtrato");
	objResultadoExtrato = document.getElementById("resultadoExtrato");

	// botões
	objBotaoCadastro.onclick = function(){
		cadastrar(objUsuario.value, objSenha.value, objGetTipo.value);
  }

	objBotaoLogin.onclick = function(){
		objResultadoLogin.innerHTML = testaLogin(objUsuarioLogin.value,objSenhaLogin.value);
	}

  objBotaoDeposito.onclick = function(){
		objResultadoDeposito.innerHTML = depositar(objDeposito.value);
  }

	objBotaoSaque.onclick = function(){
		objResultadoSaque.innerHTML = sacar(objSaque.value);
  }

	objBotaoSaldo.onclick = function(){
		objResultadoSaldo.innerHTML = getSaldo();
  }

	objBotaoExtrato.onclick = function(){
		objResultadoExtrato.innerHTML = getExtrato();
	}

}
