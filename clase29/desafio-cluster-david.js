import express from "express";
import os from "os";
import cluster from "cluster";

const cpuCount = os.cpus().length;
if (cluster.isPrimary) {
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log({ code, signal })
    console.log(`worker ${worker.process.pid} died`);
    if (!code) {
      cluster.fork()
    }
  });
} else {
  const app = express();
  const PORT = process.argv.slice(2)[1] || 8080;
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
      `Listening on http://localhost:${PORT} - PID ${process.pid} - CPU ${cpuCount}`
    );
  });
}