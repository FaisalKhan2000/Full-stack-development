// Match
db.products.aggregate([
  {
    $match: {
      name: "Modern Concrete Soap",
    },
  },
]);

db.products.aggregate([
  {
    $match: {
      _id: "64c23350e32f4a51b19b9247",
    },
  },
]);

// Group

db.products.aggregate([
  {
    $group: {
      _id: "$company",
      totalPrice: { $sum: "$price" },
    },
  },
]);
db.products.aggregate([
  {
    $group: {
      _id: "$name",
      totalPrice: { $sum: "$price" },
    },
  },
]);

// price > 900
// company $group
// sum price

db.products.aggregate([
  {
    $match: { price: { $gt: 900 } },
  },
  {
    $group: {
      _id: "$company",
      totalPrice: { $sum: "$price" },
    },
  },
]);

//!   find the quantity = 5, group them with same quantity and find the average price

db.sales.aggregate([
  { $match: { quantity: 5 } },
  {
    $group: {
      _id: "$quantity",
      priceTotal: { $sum: "$price" },
      priceAvg: { $avg: "$price" },
    },
  },
]);

// sort 1 - asc, -1 - dsc

// ASC
db.products.aggregate([
  { $match: { price: { $gt: 1200 } } },
  {
    $group: {
      _id: "$category",
      totalPrice: { $sum: "$price" },
    },
  },
  {
    $sort: { totalPrice: 1 },
  },
]);

// DSC
db.products.aggregate([
  { $match: { price: { $gt: 1200 } } },
  {
    $group: {
      _id: "$category",
      totalPrice: { $sum: "$price" },
    },
  },
  {
    $sort: { totalPrice: -1 },
  },
]);

// Project
db.products.aggregate([
  { $match: { price: { $gt: 1200 } } },
  {
    $project: {
      price: 1,
      discountPrice: { $multiply: ["$price", 0.8] },
    },
  },
]);

// push
db.products.aggregate([
  { $match: { price: { $gt: 1200 } } },
  {
    $group: {
      _id: "$price",
      allColors: { $push: "$colors" },
    },
  },
]);

// [
//   { _id: 1299, allColors: [ [ '#333333', '#cccccc', '#00ff00' ] ] },
//   {
//     _id: 1999,
//     allColors: [
//       [ '#000000', '#cc6600', '#663300' ],
//       [ '#000000', '#cc6600', '#663300' ]
//     ]
//   }
// ]
// * there is a problem here where we are getting array inside and array, also there are duplicates we can solve this problem using unwind

// price: 1999,
// colors: [ '#000000', '#cc6600', '#663300' ]

// price: 1999,
// colors: [ '#000000', '#cc6600', '#663300' ]

// price: 1999,
// colors: [
//   [ '#000000', '#cc6600', '#663300' ],
//   [ '#000000', '#cc6600', '#663300' ]
// ]
// ,
// price: 1999,
// colors: ['#000000', '#cc6600', '#663300']

// $unwind
db.products.aggregate([
  { $unwind: "$colors" },
  { $match: { price: { $gt: 1200 } } },
  {
    $group: {
      _id: "$price",
      allColors: { $push: "$colors" },
    },
  },
]);

// [
//   { _id: 1299, allColors: [ '#333333', '#cccccc', '#00ff00' ] },
//   {
//     _id: 1999,
//     allColors: [
//       '#000000',
//       '#cc6600',
//       '#663300',
//       '#000000',
//       '#cc6600',
//       '#663300'
//     ]
//   }
// ]

// * there is still one more problem of duplicates value, we can solve this by using $addToSet instead of $push

// $addToSet
db.products.aggregate([
  { $unwind: "$colors" },
  { $match: { price: { $gt: 1200 } } },
  {
    $group: {
      _id: "$price",
      allColors: { $addToSet: "$colors" },
    },
  },
]);

// [
//   { _id: 1299, allColors: [ '#333333', '#cccccc', '#00ff00' ] },
//   { _id: 1999, allColors: [ '#000000', '#cc6600', '#663300' ] }
// ]

// $size & $limit
db.products.aggregate([
  { $match: { price: { $gt: 1200 } } },
  { $unwind: "$colors" },
  {
    $group: {
      _id: { priceGroup: "$price" },
      colors: { $addToSet: "$colors" },
    },
  },
  {
    $project: {
      _id: 1,
      colors: 1,
      colorLength: { $size: "$colors" },
    },
  },
  {
    $limit: 1,
  },
]);

db.col.insertMany([
  {
    _id: "64c23350e32f4a51b19b9201",
    name: "Document 1",
    values: [10, 20, 30, 40, 50],
  },
  {
    _id: "64c23350e32f4a51b19b9202",
    name: "Document 2",
    values: [15, 25, 35, 45, 55],
  },
  {
    _id: "64c23350e32f4a51b19b9203",
    name: "Document 3",
    values: [5, 15, 25, 35, 45],
  },
  {
    _id: "64c23350e32f4a51b19b9204",
    name: "Document 4",
    values: [30, 40, 50, 60, 70],
  },
  {
    _id: "64c23350e32f4a51b19b9205",
    name: "Document 5",
    values: [25, 35, 45, 55, 65],
  },
]);

db.col.aggregate([
  {
    $project: {
      name: 1,
      myValue: {
        $filter: {
          input: "$values",
          as: "val",
          cond: { $gt: ["$$val", 30] },
        },
      },
    },
  },
]);
