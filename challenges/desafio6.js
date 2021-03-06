/* Desafio 6 - Vamos explorar mais operadores aritméticos!

Considerando todos os filmes que ganharam o Oscar pelo menos uma vez, calcule
o maior valor, menor valor, média e o desvio padrão das avaliações
(informação do campo imdb.rating no banco).

Para a média e o desvio padrão arredonde os valores para uma casa decimal
utilizando o $round.

Dica: todos os filmes na coleção, que já ganharam um Oscar (informação do
campo awards no banco), começam com uma sequência de string parecida com
essas abaixo, portanto $regex é um operador bem-vindo:

Won 10 Oscars
Won 1 Oscar

Utilizem o $stdDevSamp para calcular o desvio padrão. */
db.movies.aggregate([
  { $match: { awards: { $regex: /Won [0-9]+ Oscar/i } } },
  { $group:
    { _id: null,
      maior_rating: { $max: "$imdb.rating" },
      menor_rating: { $min: "$imdb.rating" },
      media_rating: { $avg: "$imdb.rating" },
      desvio_padrao: { $stdDevSamp: "$imdb.rating" },
    },
  },
  { $project:
    {
      _id: false,
      maior_rating: { $round: ["$maior_rating", 1] },
      menor_rating: { $round: ["$menor_rating", 1] },
      media_rating: { $round: ["$media_rating", 1] },
      desvio_padrao: { $round: ["$desvio_padrao", 1] },
    },
  },
]);
