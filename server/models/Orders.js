const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
  orderDetails: {
    orderedDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    destination: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    clientId: {
      type: String,
      required: true,
    },
    receivedDate: {
      type: Date,
      required: false,
    },
  },
    productDetails: {
      orderedAmount: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      discounted: {
        type: Boolean,
        required: true,
      },
      discountedAmount: {
        type: Number,
        required: true,
      },
      netProfit: {
        type: Number,
        required: true,
      },
    }
});

module.exports = mongoose.model("Orders", ordersSchema);
