const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Por que o campo e a cidade precisam um do outro?",
        alternativas: [
            {
                texto: "Porque ambos têm funções distintas, mas complementares.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Porque o campo sempre depende da cidade para sobreviver.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual destas opções representa um produto típico do campo?",
        alternativas: [
            {
                texto: "Arroz, feijão e leite.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Celulares e computadores.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Como a cidade contribui com o campo?",
        alternativas: [
            {
                texto: "Com serviços, tecnologia e mercado consumidor.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Somente com festas e eventos.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "O que significa uma conexão saudável entre campo e cidade?",
        alternativas: [
            {
                texto: "Trocas justas, respeito e valorização mútua.",
                afirmacao: "afirmacao"
            },
            {
                texto: "A cidade dominar o campo economicamente.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Como os jovens podem valorizar essa conexão campo-cidade?",
        alternativas: [
            {
                texto: "Conhecendo a origem dos alimentos e respeitando quem os produz.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Ignorando a vida no campo e focando apenas nas cidades grandes.",
                afirmacao: "afirmacao"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();