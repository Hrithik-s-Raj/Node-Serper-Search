const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api/v1/serperSearch", (req, res) => {
  let data = JSON.stringify({
    q: `${req.query.q}`,
    gl: `${req.query.gl}`,
    h1: `${req.query.h1}`,
    autocorrect: true,
    page: `${req.query.page}`,
  });

  let config = {
    method: "post",
    url: "https://google.serper.dev/search",
    headers: {
      "X-API-KEY": "ab21cb1c928515837811d6cb807ebb416469a55a",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then((response) => {
      res.status(200).json({
        status: "Success",
        data: response.data.organic,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/api/v1/serperSearchImage", (req, res) => {
  let data = JSON.stringify({
    q: `${req.query.q}`,
    gl: `${req.query.gl}`,
    h1: `${req.query.h1}`,
    autocorrect: true,
    type: "images",
    page: `${req.query.page}`,
  });

  let config = {
    method: "post",
    url: "https://google.serper.dev/images",
    headers: {
      "X-API-KEY": "ab21cb1c928515837811d6cb807ebb416469a55a",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then((response) => {
      res.status(200).json({
        status: "Success",
        data: response.data.images,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen("4000", (req, res) => {
  console.log("Connected to Server");
});
