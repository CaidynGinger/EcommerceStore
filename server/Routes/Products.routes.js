const express = require("express");

const productSchema = require("../models/Products");

const ProductRouter = express();

ProductRouter.post("/api/add-product", (req, res) => {
  const newProduct = new productSchema({
    productDetails: {
      productName: req.body.productName,
      showCaseProduct: req.body.showCaseProduct,
      productPrice: req.body.productPrice,
      manufacture: req.body.manufacture,
      overview: req.body.overview,
      model: {
        focus: req.body.focus,
        measurements: {
          length: req.body.length,
          beam: req.body.beam,
          height: req.body.height,
          size: req.body.size,
          mass: req.body.mass,
        },
      },
      discounted: req.body.discounted,
      discountedAmount: req.body.discountedAmount,
    },
    stockInventoryDetails: {
      inStock: req.body.inStock,
    },
  });

  // console.log(newProduct);
  // res.json(newProduct);

  newProduct
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.status((400).json({ msg: "there was an error", err: err }));
    });
});

ProductRouter.get("/api/all-products", async (req, res) => {
  const findProducts = await productSchema.find();
  res.json(findProducts);
});

ProductRouter.get("/api/product/:id", async (req, res) => {
  const findProduct = await productSchema.findById(req.params.id);
  res.json(findProduct);
});

ProductRouter.delete("/api/product-del/:id", async (req, res) => {
  const delProduct = await productSchema.remove({ _id: req.params.id });
  res.json(delProduct);
});

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

module.exports = ProductRouter;
