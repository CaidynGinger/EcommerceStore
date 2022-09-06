const express = require("express");

const productSchema = require("../models/Products");
const ordersSchema = require("../models/Orders");

const OrderRouter = express();

OrderRouter.get("/api/all-products", async (req, res) => {
  const findProducts = await productSchema.find();
  res.json(findProducts);
});

OrderRouter.post("/api/add-order", async (req, res) => {
  const findProduct = await productSchema.findById(req.body.productId);
  const newOrder = new ordersSchema({
    orderDetails: {
      destination: req.body.destination,
      productId: req.body.productId,
      // clientId: req.body.clientId,
      discountedAmount: findProduct.discountedAmount,
    },
    productDetails: {
      orderedAmount: req.body.orderedAmount,
    },
  });

  res.json(newOrder);

  // newOrder
  //   .save()
  //   .then((item) => {
  //     res.json(item);
  //   })
  //   .catch((err) => {
  //     res.status((400).json({ msg: "there was an error", err: err }));
  //   });

  //   orderDetails: {
  //     orderedDate: {
  //         Type : Date,
  //         default: Date.now,
  //         required: true,
  //     },
  //     complete: {
  //         Type: Boolean,
  //         default: false
  //     },
  //     destination:{
  //         Type: String,
  //         required: true,
  //     },
  //     productId:{
  //         Type: String,
  //         required: true
  //     },
  //     clientId:{
  //         Type: String,
  //         required: true
  //     },
  //     receivedDate:{
  //         Type: Date,
  //         required: false
  //     }
  // },
  // productDetails:{
  //     orderedAmount:{
  //         Type: Number,
  //         required: true
  //     },
  //     price:{
  //         Type: Number,
  //         required: true
  //     },
  //     discounted:{
  //         Type: Boolean,
  //         required: true
  //     },
  //     discountedAmount:{
  //         Type: Number,
  //         required: true
  //     },
  //     netProfit:{
  //         Type: Number,
  //         required: true
  //     },
  // },

  // axios
  //   .get('http://localhost:5000/api/product/62f37886f2b701e5b44bf961')
  //   .then(res => {
  //     console.log(`statusCode: ${res.status}`);
  //     console.log(res);
  //     res.json(findProducts)
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
});

// router.get("/api/all-products", async (req, res) => {
//   const findProducts = await productSchema.find();
//   res.json(findProducts);
// });

// router.get("/api/product/:id", async (req, res) => {
//   const findProduct = await productSchema.findById(req.params.id);
//   res.json(findProduct);
// });

// router.delete("/api/product-del/:id", async (req, res) => {
//   const delProduct = await productSchema.remove({ _id: req.params.id });
//   res.json(delProduct);
// });

// router.patch("/api/product-update/:id", async (req, res) => {
//   const updProduct = await productSchema.updateOne(
//     { _id: req.params.id },
//     {
//       $set: {
//         productDetails: {
//           productName: req.body.productName,
//           productPrice: req.body.productPrice,
//           discounted: req.body.discounted,
//           discountedAmount: req.body.discountedAmount,
//         },
//         stockInventoryDetails: {
//           inStock: req.body.inStock,
//         },
//       },
//     }
//   );
//   res.json(updProduct);
// });

module.exports = OrderRouter;
