const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('ACCESS TOKEN: ',accessToken);
      console.log('REFRESH TOKEN: ', refreshToken);
      console.log('PROFILE: ', profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`http://localhost:${PORT}/auth/google`);
// ya29.Il-8B_82pZZXltQXIviJaB8h8H4jlGsNDCcYpcpV02sIcJXEXnMNJUqvK7z5Jmz5d6EbMmDKa6xoWctW4N2t3dxUFSjQ1tMnDTQitoe69P6vdNrObDsNamy1KobGeuFnTQ