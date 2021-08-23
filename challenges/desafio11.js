/** Source: https://github.com/tryber/sd-09-mongodb-aggregations/tree/hannibal1207-mongodb-aggregations */
db.trips.aggregate([
  { $addFields: { dayOfWeek: { $dayOfWeek: "$startTime" } } },
  { $group: { _id: "$dayOfWeek", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 },
  { $project: { _id: 0, diaDaSemana: "$_id", total: "$count" } },
]);
