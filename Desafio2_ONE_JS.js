alert ("Boas vindas!")
let finalDeSemana = ("Sábado", "Sabado", "sábado", "sabado", "Domingo", "domingo")
let diaDeSemana = ("Segunda","segunda", "Terça","terca", "terça", "Quarta", "quarta", "Quinta", "quinta", "Sexta", "sexta")
let pergunta = prompt("Qual o dia da semana?")

if (finalDeSemana.includes(pergunta)) {
    alert("Bom final de semana!");
} else if (diaDeSemana.includes(pergunta)) {
    alert("Boa semana!");
} else {
    alert("Dia da semana inválido!");
} 