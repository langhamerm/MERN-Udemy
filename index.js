const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  -app.get('/', function (req, res) {
  +app.get('/*', function (req, res) {
     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
   })
})}

const PORT = process.env.PORT || 5000;

app.listen(PORT);

// console.log(`http://localhost:${PORT}/auth/google`);
