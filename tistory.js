const express = require("express");
const path = require("path");
const request = require("request");
require("dotenv").config();
const app = express();

app.get("/get", function (req, res, body) {
  let blogname = "forestser00";
  let access_token =
    "40062d2ac059d46fc83f632f28e13157_d00a4dae053eac09af364356fe4fd77e";
  let url = `https://www.tistory.com/apis/post/list?access_token=${access_token}&output=JSON&blogName=${blogname}&page=1`;
  let options = {
    url,
    method: "get",
    timeout: 1000,
  };

  request(options, function (error, response, body) {
    try {
      res.send();
    } catch (error) {
      res.send(error);
    }
  });
});

const SERVER_PORT = 8080;
app.listen(SERVER_PORT, () => {
  console.log(`server is started with http://localhost:${SERVER_PORT}`);
});
