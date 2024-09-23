import express from "express";
import bodyParser from 'body-parser';

const app = express(); // Inicializar a variável 'app' primeiro
const port = 3000;

// Configurar body-parser para interpretar dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar EJS como o motor de templates
app.set('view engine', 'ejs');

// Servir arquivos estáticos da pasta "public"
app.use(express.static("public"));

var data = [
    { title: "Texto 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    
];

// Rota principal para exibir os dados
app.get("/", (req, res) => {
    res.render("index.ejs", { data: data });
});

// Outras rotas
app.get("/aboutus", (req, res) => {
    res.render("about.ejs");
});

app.get("/who", (req, res) => {
    res.render("who.ejs");
});

app.get("/post", (req, res) => {
    res.render("post.ejs");
});

// Rota para processar o formulário do post
app.post("/post", (req, res) => {
    const { title, text } = req.body;
    console.log("Title:", title, "Text:", text);

    // Adicionar o novo post ao array de dados
    data.push({ title, text });

    // Redirecionar para a página principal após o post
    res.redirect("/");
});

// Iniciar o servidor
app.listen(port, () => {
    console.log("Servidor rodando na porta:", port);
});
