module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // mongoURI: 'mongodb+srv://msl:TZx0iruavxlYhX1J@cluster0-2jjk4.mongodb.net/test?retryWrites=true&w=majority',
    mongoURI: process.env.MONGODB_URI,
    cookieKey: process.env.COOKIE_KEY
};
