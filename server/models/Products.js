const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productDetails: {
    productName: {
      type: String,
      required: true,
    },
    showCaseProduct: {
      type: Boolean,
      required: true,
    },
    manufacture: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    model: {
      type: Object,
      focus: {
        type: String,
      },
      measurements: {
        type: Object,
        length: {
          type: String,
        },
        beam: {
          type: String,
        },
        height: {
          type: String,
        },
        size: {
          type: String,
        },
        mass: {
          type: String,
        },
      },
    },
    productPrice: {
      type: Number,
      required: true,
    },
    discounted: {
      type: Boolean,
      default: false,
      required: true,
    },
    discountedAmount: {
      type: Number,
      default: 0,
    },
  },
  stockInventoryDetails: {
    inStock: {
      type: Number,
      required: true,
    },
  },
  ProductOtherDetails: {
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
});

module.exports = mongoose.model("Products", productSchema);
