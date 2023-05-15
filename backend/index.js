const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// app.get("/", (req, res) => {
//   res.send("Welcome to the API");
// });

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

try {
  const r = await axios.put(
    'https://api.chatengine.io/users/',
    {username: username, secret: username, first_name: username},
    {headers: {"private-key" "d9ca2e37-a114-40bf-997f-5fc2c81fe11a"}}
  )
  return res.status(r.status),json(r.data)
} catch (e) {
  return res.status(e.response.status),json(e.response.data)
}

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
