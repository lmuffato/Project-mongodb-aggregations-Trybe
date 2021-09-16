db.trips.aggregate([
  { $group: {
    _id: { $dayOfWeek: "$startTime" },
    qntViagens: { $sum: 1 },
  } },
  { $limit: 1 },
  { $project: {
    diaDaSemana: "$_id",
    total: "$qntViagens",
    _id: 0,
  } },
  { $sort: { total: -1 } },
]);
