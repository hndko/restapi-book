const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 9000;

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Call routes
const routes = require("./routes/bookRoutes");
routes(app);

app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});
