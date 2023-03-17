const expres = require("express")
const bodyParse = require("body-parser");

const app= expres();
const PORT= process.env.PORT||3977;

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

app.get("/",(req,res)=>{
    res.status(200).send({msd:"hola Mundo"});
});

app.post("/welcome",(req,res)=>{
    const {username} = req.body;
    res.status(200).send({msg:`hola, ${username}`})
});


app.listen(PORT,()=>{
    console.log(`Tu Servicio esta listo en el puerto ${PORT}`);
})