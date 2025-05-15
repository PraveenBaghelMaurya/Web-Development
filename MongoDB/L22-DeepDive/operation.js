//agregate function:- run into terminal not in JS file 
db.customers.aggregate([
    {
      $lookup: {// this performs the join between customers and orders collections
        from: "orders",
        localField: "_id",
        foreignField: "customerId",
        as: "orders"
      }
    },
    { $unwind: "$orders" }// we get the data of Only order collection
  ])

  db.customers.aggregate([
    {
      $lookup: {
        from: "orders",
        localField: "_id",
        foreignField: "customerId",
        as: "orders"
      }
    },
    { $unwind: "$orders" },
    
    {
      $group: {
        _id: "$name",
        totalSpent: { $sum: "$orders.amount" }
      }
    }
  ])
  