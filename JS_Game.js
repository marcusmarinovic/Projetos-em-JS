alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt (Math.random () * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// enquanto o chute não for = ao n.s
while (chute != numeroSecreto) {
    chute = prompt ('Escolha um número entre 1 e 100')
    // se o chute for = ao n.s
    if (chute == numeroSecreto) {
        break;
    } else {
    if (numeroSecreto > chute) {
            alert (`O número secreto é maior que ${chute}`);
    } else {
        alert (`O número secreto é menor que ${chute}`);
    }
    // tentativas = tentativas +1    
    tentativas++;
    }
}
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if (tentativas > 1) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
    } else {
        alert (`É isso ai! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa} `)
    }