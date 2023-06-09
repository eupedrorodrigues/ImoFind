import app from './app';

app.get("/", (req, resp) => {
  resp.status(200).send("Funcionou")
})

app.listen(3333, () => {
  console.log("servidor rodando na porta 3333")
});