const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  const newSubmisson = req.body;
  const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4)`;

  pool
    .query(sqlText, [
      newSubmisson.feeling,
      newSubmisson.understanding,
      newSubmisson.support,
      newSubmisson.comments,
    ])
    .then((result) => {
      resStatus.send(201);
    })
    .catch((err) => {
      console.log(`error in submission router post`, err);
    });
});

module.exports = router;
