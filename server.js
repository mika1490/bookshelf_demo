const express = require(`express`);
const bodyParser = require(`body-parser`);

const userRoutes = require(`./routes/users`);
const postRoutes = require(`./routes/posts`);
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(`/users`, userRoutes);
app.use(`/posts`, postRoutes);

// app.get(`/`, (req, res) => {
//   res.send(`Smoke Test`);
// })
app.listen(PORT, () => {
  console.log(`Server Listening On Port: ${PORT}`);
})