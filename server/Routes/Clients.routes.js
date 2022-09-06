const express = require("express");

const clientsSchema = require("../models/Clients");

const clientsRouter = express();

var bcrypt = require("bcrypt");

clientsRouter.post("/api/add-client", (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      const newClient = new clientsSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        userState: req.body.userState,
        username: req.body.username,
        password: hash,
      });

      newClient
        .save()
        .then((item) => {
          res.json(item);
        })
        .catch((err) => {
          res.json(err);
          //   res.status((400).json({ msg: "there was an error", err: err }));
        });
    });
  });
});

clientsRouter.post("/api/login-user", async (req, res) => {
  const findClient = await clientsSchema.findOne({
    username: req.body.username,
  });
  console.log(findClient);
  // Load hash from your password DB.
  if(findClient === null){
    res.json(false);
  } else{
    bcrypt.compare(
      req.body.password,
      findClient.password,
      function (err, result) {
        if (result) {
          console.log(req.body.password);
          res.json({
            username: findClient.username,
            userState: findClient.userState,
          });
        }
        // if passwords do not match
        else {
          console.log("Invalid password!");
          console.log(req.body.password);
          res.json(false);
        }
      }
    );
  }
});

clientsRouter.get("/api/all-clients", async (req, res) => {
  const findClients = await clientsSchema.find();
  res.json(findClients);
});

clientsRouter.get("/api/product/:id", async (req, res) => {
  const findClient = await clientsSchema.findById(req.params.id);
  res.json(findClient);
});

clientsRouter.delete("/api/product-del/:id", async (req, res) => {
  const delClient = await productSchema.remove({ _id: req.params.id });
  res.json(delClient);
});

module.exports = clientsRouter;
