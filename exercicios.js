// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt("Digite o primeiro número");
  const num2 = prompt("Digite o segundo número");

  console.log(Number(num1) + Number(num2));
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt("Digite sua mensagem");

  console.log(mensagem);
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt("Informe a altura do retangulo");
  const largura = prompt("Informe a largura do retangulo");
  console.log(altura * largura);
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Ano atual"));
  const anoNascimento = Number(prompt("Ano Nascimento"));
  console.log(anoAtual - anoNascimento);
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt("Peso"));
  const altura = Number(prompt("Altura"));
  console.log(peso / altura ** 2);
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("nome");
  const idade = Number(prompt("Idade"));
  const email = prompt("email");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let favorita = [];
  const cor1 = prompt("cor 1");
  const cor2 = prompt("cor 2");
  const cor3 = prompt("cor 3");
  favorita.push(cor1, cor2, cor3);
  console.log(favorita);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const texto = prompt("escreva").toUpperCase();
  console.log(texto);
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = Number(prompt("Custo do espetáculo"));
  const ingresso = Number(prompt("Valor ingresso"));
  console.log(custoEspetaculo / ingresso);
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt("digite 1");
  const string2 = prompt("digite 2");
  console.log(string1.length == string2.length);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("1").toUpperCase();
  const string2 = prompt("2").toUpperCase();
  console.log(string1 == string2);
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Ano atual"))
  const anoNascimento = Number(prompt("Ano Nascimento"))
  const anoRg = Number(prompt("Ano RG"))
  const idade = anoAtual - anoNascimento
  const renovacao = anoAtual - anoRg
  console.log((idade <= 20 && renovacao >= 5 ) || (idade > 20 && idade <=50 && renovacao >= 10) || (idade > 50 && renovacao >=15))
}

// Exercício 11
function checaAnoBissexto() {
  const anoBisexto = Number(prompt("Informe um ano para verificar se é bisexto"))
  console.log((anoBisexto % 4 == 0) && (anoBisexto % 100 !=0) || (anoBisexto % 400 == 0))
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const maior18 = prompt("É maior de 18 anos?")
  const ensinoMedio = prompt("tem ensino medio completo?")
  const disponibilade = prompt("Tem disponibilidade de horário?")
  console.log((maior18 == 'sim' && ensinoMedio == 'sim' && disponibilade == 'sim'))
}
