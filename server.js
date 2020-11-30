const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

app.use((error, req, res, next)=>{
  const status = error.statusCode || 500;
  const message = error.message;
  const data= error.data;
  res.status(status).json({message,data});
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});
