import express from "express";


const app = express();
const PORT = process.argv.slice(2)[0] || 8080;
app.set("view engine", "pug");
app.use(express.static("public"));

/*setTimeout(() => {
  process.exit(3)
}, 2000)*/

app.get("/", (req, res) => {
  res.send(
    `Servidor express en PORT ${PORT} - PID ${process.pid} - ${new Date()}`
  );
});

app.use((err, req, res, next) => {
  if (err) {
    return res.status(err.statusCode).json({
      error: err.message,
      status: err.statusCode,
    });
  }
  next();
});

app.listen(PORT, () => {
  console.log(
    `Listening on http://localhost:${PORT} - PID ${process.pid}`
  );
});