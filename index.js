const express = require("express")
const bodyParse = require("body-parser");
const path = require("path")

const app= express();
const PORT= process.env.PORT||3977;

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

//Para llamar a los DIR= archivos .css .js o los que se encuentren en la misma ubicacion.
app.use(express.static(__dirname));
// app.get("/",(req,res)=>{
//     res.status(200).send({msd:"hola Mundo"});
// });
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
});

app.post("/welcome",(req,res)=>{
    const {username} = req.body;
    res.status(200).send({msg:`hola, ${username}`})
});  


app.listen(3000,"192.168.18.127",()=>{
    console.log(`Tu Servicio esta listo en el puerto ${PORT}`);
})