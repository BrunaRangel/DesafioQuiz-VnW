import React, { Component } from "react";
import "./styles.css";

class Quiz extends Component {
  state = {
    questions: [
      {
        question: "O que significa JAVASCRIPT?",
        answers: [
          {
            option: "Linguagem de marcação",
            right: false
          },
          {
            option:
              "Linguagem de programação que permite implementar item complexos",
            right: true
          },
          {
            option: "Linguagem interpretada livre",
            right: false
          }
        ]
      },
      {
        question: "O que significa CONCATENAR?",
        answers: [
          {
            option: "Unir dados de modo lógico",
            right: true
          },
          {
            option: "Remover o primeiro item da lista",
            right: false
          },
          {
            option: "Remover o ultimo item da lista",
            right: false
          }
        ]
      },
      {
        question: "O que significa POP?",
        answers: [
          {
            option: "Procurar o índice de um item",
            right: false
          },
          {
            option: "Adicionar item no final da lista",
            right: false
          },
          {
            option: "Remover o ultimo item da lista",
            right: true
          }
        ]
      },
      {
        question: "O que significa SHIFT?",
        answers: [
          {
            option: "Adicionar o item ao inicio da lista",
            right: false
          },
          {
            option: "Remover o primeiro item da lista",
            right: true
          },
          {
            option: "Remover o  item do meio da lista",
            right: false
          }
        ]
      },
      {
        question: "O que significa SLICE?",
        answers: [
          {
            option: "Ordena os elementos do próprio array e retorna o array",
            right: false
          },
          {
            option: "Retorna uma parte de um array",
            right: true
          },
          {
            option: "Procura o índice de um item",
            right: false
          }
        ]
      },
      {
        question: "O que significa LENGTH?",
        answers: [
          {
            option:
              "Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos",
            right: false
          },
          {
            option: "Testa todo os elementos do array",
            right: false
          },
          {
            option: "Especifica o número de elementos de um array",
            right: true
          }
        ]
      },
      {
        question: "O que significa FILL?",
        answers: [
          {
            option:
              "Preenche todos os valores do array a partir do índice inicial a um índice final com valor estático",
            right: true
          },
          {
            option:
              "Retorna um novo objeto de array iterator que contém os valores para cada índice no array",
            right: false
          },
          {
            option: "Procura um índice do array",
            right: false
          }
        ]
      },
      {
        question: "O que significa SPLICE?",
        answers: [
          {
            option: "Adiciona um item ao final da lista",
            right: false
          },
          {
            option: "Adiciona um item ao ínicio da lista",
            right: false
          },
          {
            option:
              "Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos",
            right: true
          }
        ]
      },
      {
        question: "O que significa SORT?",
        answers: [
          {
            option: "Procura o índice de um item",
            right: false
          },
          {
            option: "Remove um item do ínicio",
            right: false
          },
          {
            option: "Ordena os elementos do próprio array e retorna o array",
            right: true
          }
        ]
      },
      {
        question: "O que significa FUNÇÃO?",
        answers: [
          {
            option: "Um código que pode ser usado várias vezes",
            right: true
          },
          {
            option: "Testa todos os elementos do array",
            right: false
          },
          {
            option: "Procura o índice de um item",
            right: false
          }
        ]
      }
    ],
    currentQuestion: 1,
    currentAnswer: {},
    points: 0
  };

  handleNext = () => {
    const { currentAnswer, points } = this.state;
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      points: currentAnswer.right ? points + 1 : points
    });
  };

  renderQuestion = () => {
    return (
      <div>
        {this.state.questions
          .slice(this.state.currentQuestion - 1, this.state.currentQuestion)
          .map((item) => (
            <div className="box_question">
              <p className="question">{item.question}</p>
              {this.renderAnswer(item.answers)}
            </div>
          ))}
      </div>
    );
  };

  renderAnswer = (resposta) => {
    return (
      <div className="answer">
        {resposta.map((item) => (
          <span className="box_resp">
            <label for="resposta" className="opcao">
              <input
                type="radio"
                name="resposta"
                onClick={() => {
                  this.setState({
                    currentAnswer: item
                  });
                }}
              />
              {item.option}
            </label>
          </span>
        ))}
      </div>
    );
  };

  renderPoints = () => {
    return (
      <h3 className="final_sentence">
        Você acertou {this.state.points} pontos!
      </h3>
    );
  };

  render() {
    let finished =
      this.state.questions.length === this.state.currentQuestion - 1;

    return (
      <div className="container">
        <div className="box_title">
          <h1 className="title">TESTE SEU CONHECIMENTO</h1>
        </div>
        <div className="quiz_container">
          <h2 className="sub_title">Quiz</h2>
          <div className="question_answer">
            {finished ? this.renderPoints() : this.renderQuestion()}
            {!finished && (
              <button className="btn" onClick={this.handleNext}>
                Próxima
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
