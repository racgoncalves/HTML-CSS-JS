
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

// Função para calcular os 3 jogadores cadastrados
function calcularCadastrados() {

    //pegar todos os elementos com a classe jogador
    const jogadores = document.querySelectorAll('.jogador');
    // console.log(herois);

    for (let i = 0; i < jogadores.length; i++) {
  
        //pegando os gols
        let gols = Number(jogadores[i].querySelector('.gols').textContent);

        //pegando as assistências
        let assistencias = Number(jogadores[i].querySelector('.assistencias').textContent);

        //pegando as finalizações
        let finalizacoes = Number(jogadores[i].querySelector('.finalizacoes').textContent);

        //pegando os passes errados
        let passesErrados = Number(jogadores[i].querySelector('.passesErrados').textContent);

        //pegando os impedimentos
        let impedimentos = Number(jogadores[i].querySelector('.impedimentos').textContent);


        // calcular os pontos
        let totalPontos = calcularPontos(gols, assistencias, finalizacoes, passesErrados, impedimentos);

        //exibindo na página os pontos
        jogadores[i].querySelector('.totalPontos').textContent = totalPontos;

        //exibindo na página as classificações
        jogadores[i].querySelector('.classificacao').textContent = gerarClassificacao(totalPontos);

    }
}

calcularCadastrados();