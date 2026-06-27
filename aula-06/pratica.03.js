let jogador = {
    nickname : "Bielzera",
    nivel : 1,
    moedas : 100,
    energia : 50,
    premium : false,
};

    console.log("===STATUS INICIAL===")
    console.log(jogador.nickname);
    console.log(jogador.nivel);
    console.log(jogador.moedas);
    console.log(jogador.energia);
    console.log(jogador.premium);

    console.log("===DADOS ATUALIZADOS===")
    jogador.nivel = 2;
    jogador.moedas = 70;
    jogador.energia = 35;
    jogador.premium = true;

    console.log(jogador);