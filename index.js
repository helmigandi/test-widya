const express = require("express");
const { connect } = require("./config/mongodb");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

connect()
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`REST API app listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error", err);
  });
