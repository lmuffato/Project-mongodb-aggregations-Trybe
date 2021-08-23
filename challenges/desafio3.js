db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { $gte: 7 },
    },
  },
  {
    $match: {
      genres: { $nin: [
        "Crime",
        "Horror",
      ] },
    },
  },
  {
    $match: {
      rated: {
        $in: [
          "PG",
          "G",
        ],
      },
    },
  },
  {
    $match: {
      $and: [
        { languages: "English" },
        { languages: "Spanish" },
      ],
    },
  },
  {
    $project: {
      titulo: "$title",
      avaliado: "$rated",
      notaIMDB: "$imdb.rating",
      votosIMDB: "$imdb.votes",
      ano: "$year",
      _id: 0,
    },
  },
  {
    $sort: {
      ano: -1,
      notaIMBD: -1,
      titulo: 1,
    },
  },
  // {
  //   $skip: 1,
  // },
  // {
  //   $limit: 1,
  // },
  // {
  //   $count: "numberOfDocuments",
  // },
]);
