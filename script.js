const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Por que o campo e a cidade precisam um do outro?",
        alternativas: [
            "Porque ambos têm funções distintas, mas complementares.",
            "Porque o campo sempre depende da cidade para sobreviver."
        ]
    },
    {
        enunciado: "Qual destas opções representa um produto típico do campo?",
        alternativas: [
            "Arroz, feijão e leite.",
            "Celulares e computadores."
        ]
    },
    {
        enunciado: "Como a cidade contribui com o campo?",
        alternativas: [
            "Com serviços, tecnologia e mercado consumidor.",
            "Somente com festas e eventos."
        ]
    },
    {
        enunciado: "O que significa uma conexão saudável entre campo e cidade?",
        alternativas: [
            "Trocas justas, respeito e valorização mútua.",
            "A cidade dominar o campo economicamente."
        ]
    },
    {
        enunciado: "Como os jovens podem valorizar essa conexão campo-cidade?",
        alternativas: [
            "Conhecendo a origem dos alimentos e respeitando quem os produz.",
            "Ignorando a vida no campo e focando apenas nas cidades grandes."
        ]
    }
];
