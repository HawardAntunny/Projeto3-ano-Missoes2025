const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".texto-resultado");
const imagemPergunta = document.querySelector(".imagem-pergunta");

const perguntas = [
    {
        enunciado: "Por que o campo e a cidade precisam um do outro?",
        imagem: "img/1.jpeg",
        alternativas: [
            {
                texto: "Porque ambos têm funções distintas, mas complementares.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Porque o campo sempre depende da cidade para sobreviver.",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "Qual destas opções representa um produto típico do campo?",
        imagem: "img/2.jpeg",
        alternativas: [
            {
                texto: "Arroz, feijão e leite.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Celulares e computadores.",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "Como a cidade contribui com o campo?",
        imagem: "img/3.jpeg",
        alternativas: [
            {
                texto: "Com serviços, tecnologia e mercado consumidor.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Somente com festas e eventos.",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "O que significa uma conexão saudável entre campo e cidade?",
        imagem: "img/4.jpeg",
        alternativas: [
            {
                texto: "Trocas justas, respeito e valorização mútua.",
                afirmacao: "afirmacao"
            },
            {
                texto: "A cidade dominar o campo economicamente.",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "Como os jovens podem valorizar essa conexão campo-cidade?",
        imagem: "img/5.jpeg",
        alternativas: [
            {
                texto: "Conhecendo a origem dos alimentos e respeitando quem os produz.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Ignorando a vida no campo e focando apenas nas cidades grandes.",
                afirmacao: "negacao"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    imagemPergunta.src = perguntaAtual.imagem;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    imagemPergunta.style.display = "none"; // Oculta imagem na tela final
    caixaResultados.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
