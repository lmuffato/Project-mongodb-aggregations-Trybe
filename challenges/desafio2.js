db.movies.aggregate([{ $match: { "imdb.rating": { $gte: 7 } },
  genre: { $nin: ["Crime, Horror"] },
  rated: { $in: ["PG, G"] },
  languages: { $all: ["Spanish", "English"] } },
{ $project: { titulo: "$title",
  avaliado: "$rated",
  notaIMDB: "$imdb.rating",
  votosIMDB: "$imdb.votes",
  ano: "$year",
  _id: 0 } }]);
