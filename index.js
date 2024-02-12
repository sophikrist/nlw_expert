const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador usado para comparar se dois valores são iguais em valor e tipo?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a saída do seguinte código? \n console.log(3 + '3' - 1);",
      respostas: [
        "32",
        "NaN",
        "22",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de 10 * '2' em JavaScript?",
      respostas: [
        "20",
        "NaN",
        "102",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.out()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de incremento em JavaScript?",
      respostas: [
        "++",
        "**",
        "&&",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo de dados de uma array em JavaScript?",
      respostas: [
        "Object",
        "Array",
        "List",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Transforma uma string em um número inteiro.",
        "Transforma um número inteiro em uma string.",
        "Transforma um número em uma string.",
      ],
      correta: 0
    },
    {
      pergunta: "O que a função 'isNaN()' faz em JavaScript?",
      respostas: [
        "Verifica se o argumento passado é um número.",
        "Verifica se o argumento passado é NaN.",
        "Verifica se o argumento passado é uma string.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas: [
        "function",
        "func",
        "def",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const TotalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + TotalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
   const estaCorreta = event.target.value == item.correta
  
   corretas.delete(item)
   if(estaCorreta) {
     corretas.add(item)
   }
  
   mostrarTotal.textContent = corretas.size + ' de ' + TotalDePerguntas
  }
  
  
  
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }