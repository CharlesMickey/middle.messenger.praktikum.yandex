import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

let getPath = path.join(
  dirname(fileURLToPath(import.meta.url)),
  "../dist/index.html"
);

const PORT = 3000;
const app = express();

app.use(express.static("./dist"));

app.all("*", (req, res) => {
  res.sendFile(getPath);
});

app.listen(PORT, () => {
  console.log(`Server run on port http://localhost:${PORT}`);
});
