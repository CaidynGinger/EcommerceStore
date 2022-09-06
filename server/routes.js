const express = require("express");
const productRoutes = require("./Routes/Products.routes");
const orderRoutes = require("./Routes/Orders.routes");
const clientRoutes = require("./Routes/Clients.routes");

const routerAPI = express();

routerAPI.use(productRoutes);
routerAPI.use(orderRoutes);
routerAPI.use(clientRoutes);

module.exports = routerAPI;