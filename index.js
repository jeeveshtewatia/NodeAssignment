const http = require("http");

// const app = http.createServer(server());

const app = http.createServer((req, res) => {
  res.write(`<h1>Welcone to the server </h1>`);
  res.write(JSON.stringify([1, 2, 3, 4, 5]));
  res.end();
});

// const server = (req, res) => {
//   res.write(`<h1>Welcone to the server </h1>`);
//   res.write(JSON.stringify([1, 2, 3, 4, 5]));
//   res.end();
// };

app.listen(9000, () => {
  console.log("working");
});
