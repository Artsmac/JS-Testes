/*

var soma1 = 10 + 20 + 30 + 40 / 3;

console.log(soma1);

let incremento = 5;
console.log(incremento++);
console.log(incremento);
console.log(--incremento);
console.log(incremento--);

var frase = "Isso é uma frase";
+frase;

console.log(frase);
console.log(+frase);

var idade = '25';
console.log(+idade + 5);

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);
// Crie duas expressões que retornem NaN
var expressao1 = '30'/ 2;
var expressao2 = 'teste' * 5;
console.log(expressao2);
// Somar a string '200' com o número 50 e retornar 250
var soma2 = +'200' + 50;
console.log(soma2);
// Incremente o número 5 e retorne o seu valor incrementado
var incremento2 = 5;
console.log(++incremento2);
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

*/
/*

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade=25;
let idadePrimo=22;

if (minhaIdade>idadePrimo) {
    console.log('É maior');
} else if (minhaIdade===idadePrimo) {
    console.log('A idade é igual');
} else {
    console.log('É menor');
}
//Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);
//Verifique se as seguintes variáveis são Truthy ou Falsy
var nome ='Arthur';
var idade = 25;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

//Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207000000;
var china = 1360000000;

if (brasil>china) {
    console.log('Brasil tem mais habitantes');
} else if (brasil===china) {
    console.log('Brasil e China tem a mesma quantidade de habitantes');
} else  {
    console.log('Chiina tem mais habitantes');
}

//O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

//O que irá aparecer no console?
if (('Gato' === 'gato') || (5>2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}

*/

function areaQuadrado(lado) {
    return lado * lado;
};

console.log(areaQuadrado(4));

function pi() {
    return 3.14;
};

var total = 5*pi();
console.log(total);

function imc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
};
console.log(imc(50, 1.70));

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(50, 1.70);

// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
    return !!dado;
};
var teste = isTruthy('oi');
console.log(teste);
// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}
console.log(perimetroQuadrado(5));
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
};
console.log(nomeCompleto('Arhtur', 'Maciel'));
// Crie uma função que verifica se um número é par
function isEven(numero) {
    var modulo=numero % 2;
    if (modulo===0) {
        return true;
    } else {
        return false;
    }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(valor) {
    return typeof valor;
}
console.log(tipoDeDado(25));
console.log(tipoDeDado('Arthur'));
console.log(tipoDeDado(false));
console.log(tipoDeDado(null));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
    console.log('Arthur Maciel');
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);


