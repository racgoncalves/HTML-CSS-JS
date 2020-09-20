
// Função para calcular os pontos do jogador
function calcularPontos(gols, assistencias, finalizacoes, passesErrados, impedimentos){
    return Math.round((((Number(gols) * 8) + (Number(assistencias) * 5) + (Number(finalizacoes) * 2.5)) - ((Number(passesErrados) * 0.3) + (Number(impedimentos) * 0.5))));
}

// Função que classifica o jogador
function gerarClassificacao(pontos){
    let classificacao = "";
    if(pontos <= 3) classificacao = "Jogador muito ruim";
    else if(pontos > 3 && pontos <= 6) classificacao = "Jogador ruim";
    else if(pontos > 6 && pontos <= 12) classificacao = "Jogador normal";
    else if(pontos > 12 && pontos <= 19) classificacao = "Jogador bom";
    else classificacao = "Jogador excepcional";

    return classificacao;
}

// Função que pega todos os dados do jogador que será inserido
function pegarDadosDigitados(jogadorDigitado){
    let jogador = {
        nome: jogadorDigitado.nome.value,
        gols: jogadorDigitado.gols.value,
        assistencias: jogadorDigitado.assistencias.value,
        finalizacoes: jogadorDigitado.finalizacoes.value,
        passesErrados: jogadorDigitado.passesErrados.value,
        impedimentos: jogadorDigitado.impedimentos.value,
        totalPontos: calcularPontos(this.gols.value,
                                    this.assistencias.value,
                                    this.finalizacoes.value,
                                    this.passesErrados.value,
                                    this.impedimentos.value),                             
        classificacao: gerarClassificacao(calcularPontos(this.gols.value,
                                                        this.assistencias.value,
                                                        this.finalizacoes.value,
                                                        this.passesErrados.value,
                                                        this.impedimentos.value))
    }
    return jogador;
}

// Função que verifica se os dados serão aceitos
function validarDados(jogador,jogadorDigitado) {

    let erros = 0;
    
    if (jogador.nome.length === 0) {
        jogadorDigitado.nome.classList.add("is-invalid");
        erros ++;
    }
    else jogadorDigitado.nome.classList.remove("is-invalid");
    

    if ((jogador.gols.length === 0) || (isNaN(jogador.gols)) || (jogador.gols > 20) || (jogador.gols < 0)){
        jogadorDigitado.gols.classList.add("is-invalid");
        erros ++;
    }
    else jogadorDigitado.gols.classList.remove("is-invalid");

    if ((jogador.assistencias.length === 0) || (isNaN(jogador.assistencias)) || (jogador.assistencias > 20) || (jogador.assistencias < 0)){
        jogadorDigitado.assistencias.classList.add("is-invalid");
        erros ++;
    }
    else jogadorDigitado.assistencias.classList.remove("is-invalid");

    if ((jogador.finalizacoes.length === 0) || (isNaN(jogador.finalizacoes)) || (jogador.finalizacoes > 20) || (jogador.finalizacoes < 0)){
        jogadorDigitado.finalizacoes.classList.add("is-invalid");
        erros ++;
    }
    else jogadorDigitado.finalizacoes.classList.remove("is-invalid");

    if ((jogador.passesErrados.length === 0) || (isNaN(jogador.passesErrados)) || (jogador.passesErrados > 20) || (jogador.passesErrados < 0)){
        jogadorDigitado.passesErrados.classList.add("is-invalid");
        erros ++;
    }
    else jogadorDigitado.passesErrados.classList.remove("is-invalid");

    if ((jogador.impedimentos.length === 0) || (isNaN(jogador.impedimentos)) || (jogador.impedimentos > 20) || (jogador.impedimentos < 0)){
        jogadorDigitado.impedimentos.classList.add("is-invalid");
        erros ++;
    }
    else jogadorDigitado.impedimentos.classList.remove("is-invalid");

    return erros;
}

// Função que monta as células da linha
function montarJogadorTD(dado, classe){
    const jogadorTD = document.createElement('td');
    jogadorTD.textContent = dado;
    jogadorTD.classList.add(classe);
    return jogadorTD;
}

// Função que monta as linhas da tabela
function montarJogadorTR(jogador){
    const jogadorTR = document.createElement('tr');

    jogadorTR.classList.add('jogador');
    jogadorTR.appendChild(montarJogadorTD(jogador.nome,'nome'));
    jogadorTR.appendChild(montarJogadorTD(jogador.gols,'gols'));
    jogadorTR.appendChild(montarJogadorTD(jogador.assistencias,'assistencias'));
    jogadorTR.appendChild(montarJogadorTD(jogador.finalizacoes,'finalizacoes'));
    jogadorTR.appendChild(montarJogadorTD(jogador.passesErrados,'passesErrados'));
    jogadorTR.appendChild(montarJogadorTD(jogador.impedimentos,'impedimentos'));
    jogadorTR.appendChild(montarJogadorTD(jogador.totalPontos,'totalPontos'));
    jogadorTR.appendChild(montarJogadorTD(jogador.classificacao,'classificacao'));
    return jogadorTR;
}

// Função que mostra o erro na tela
function mostrarErro(){
    const erro = document.querySelector('#erro');
    erro.classList.add('alert', 'alert-danger');
    erro.innerHTML = "Os campos em vermelho estão vazios ou foram preenchidos com dados inválidos"; 
}

// Função que esconde o erro
function ocultarErro(){
    const limparErro = document.querySelector('#erro');
    erro.classList.remove('alert', 'alert-danger');
    limparErro.innerHTML = '';
}

// Função que insere o jogador na tabela
function inserirJogador(){
    // Pega o formulário
    const jogadorDigitado = document.querySelector('#form_jogadores');
    // Pega os dados digitados
    const jogador = pegarDadosDigitados(jogadorDigitado);
    // Valida os dados
    const erros = validarDados(jogador,jogadorDigitado);
    // Mostra o erro e retorna vazio para pausar a execução do clique (break)
    if (erros > 0) {
        mostrarErro();
        return;        
    }
    // Oculta o erro no novo clique
    ocultarErro();
    // Monta a linha que será inserida
    const novoJogadorTR = montarJogadorTR(jogador);
    // Pega a tabela
    const tabela = document.querySelector('#tabela-jogadores');
    // Insere a linha na tabela
    tabela.appendChild(novoJogadorTR);
    // Apaga os dados do formulário
    form_jogadores.reset();
}

// Pega o botão
const btnInserir = document.querySelector('#btn-inserir');

// Evento ativado com o clique do botão
btnInserir.addEventListener('click', function(e){

    // Pausa o efeito padrão
    e.preventDefault();

    // Insere o jogador
    inserirJogador();
    
});