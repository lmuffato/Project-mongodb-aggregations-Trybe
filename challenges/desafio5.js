db.movies.aggregate([{ $match: { countries: "USA", "tomatoes.viewer.rating": { $gte: 3 } } }, { $unwind: "$cast" }, { $match: { cast: { $in: ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"] } } }, { $group: { _id: { title: "$title", tomatoes: "$tomatoes.viewer.rating" }, num_favs: { $sum: 1 } } }, { $sort: { num_favs: -1, "_id.tomatoes": -1, "_id.title": -1 } }, { $skip: 24 }, { $limit: 1 }, { $project: { _id: 0, title: "$_id.title" } }]);
