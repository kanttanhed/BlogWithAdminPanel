const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const bodyparser = require("body-Parser");
const connection = require("./database/database")


// view engine
app.set('view engine', 'ejs')

// static
app.use(express.static('public'))

// body parser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

//database

connection
    .authenticate()
    .then(() => {
        console.log("Conexao feita com sucesso")
    }).catch((err) =>{
        console.log(err)
    })

app.get("/", (req, res) => {
    res.render("index");
})


app.listen(8080, ()=>{
    console.log("O servidor esta rodando!");
})