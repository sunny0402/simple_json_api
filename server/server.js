const config = require("../config/config.js");
const app = require("./expressApp.js");

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
