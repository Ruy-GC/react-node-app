//importar express
const express = require("express");
const fs = require("fs");
const path = require('path');

//establecer puerto donde se va a correr el servidor
const PORT = process.env.PORT || 3001;

//inicializa el servidor de express
const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));

//config sql
var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pipo7274!",
    database: 'pets'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get("/api", (req, res) =>{
    res.json({message: "hello from server side"});
});

app.get("/pets",(req,res) => {
    con.query("SELECT * FROM petdata", function (err, result) {
        if (err) throw err;
        //res.json(JSON.stringify(result));
    });
    //callback function (err,data) =>
    fs.readFile(__dirname + "/" + "pets.json","utf8",(err,data) => {
        console.log(data);
        res.end(data);
    });
});

app.post("/addPet",(req,res) =>{
    data = null;
    fs.readFile(__dirname + "/" + "pets.json","utf8",(err,data) => {
        data = JSON.parse(data);

        if(data.length == 0){
            lastid = 0
        }else{
            lastkey = Object.keys(data)[Object.keys(data).length-1];
            lastid = data[lastkey]["id"]
        }

        try {
            const {name,type,owner,color} = req.body;

            if(!name || !type ||!owner ||!color){
                throw "Missing pet infomation";
            }

            const newPet = {
                name: name,
                type: type,
                owner: owner,
                color: color,
                id: lastid+1
            }

            data["pet"+(lastid+1)] = newPet;

            let newjson = JSON.stringify(data,null,'\t');
            fs.writeFile(__dirname + "/" + "pets.json",newjson, err => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Added Successfully");
                }    
            });
            
            res.end(JSON.stringify(data));
        } catch (error) {
            res.status(500).send({msg:error});
        }
    });
});

app.put("/updatePet/:pet",(req,res) =>{
    fs.readFile(__dirname + "/" + "pets.json","utf8",(err,data) => {
        data = JSON.parse(data);
        const {name,type,owner,color} = req.body;

        if(data[req.params.pet]){
            
            if(name) data[req.params.pet]["name"] = name;
            if(type) data[req.params.pet]["type"] = type;
            if(owner) data[req.params.pet]["owner"] = owner;
            if(color) data[req.params.pet]["color"] = color;
    
            let newjson = JSON.stringify(data,null,'\t');
            fs.writeFile(__dirname + "/" + "pets.json",newjson, err => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Updated Successfully");
                }    
            });
                res.end(JSON.stringify(data[req.params.pet]));
        }else{
            res.status(404).json({msg: 'Pet not found'});
        }
        
    });
});

app.delete("/deletePet/:pet",(req,res) =>{
    fs.readFile(__dirname + "/" + "pets.json","utf8",(err,data) => {
        data = JSON.parse(data);
        
        if(data[req.params.pet]){
            delete data[req.params.pet];

            let newjson = JSON.stringify(data,null,'\t');
            fs.writeFile(__dirname + "/" + "pets.json",newjson, err => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Deleted Successfully");
                }    
            });

            res.end(JSON.stringify(data));
        }else{
            res.status(404).json({msg: 'Pet not found'});
        }
        
    });
});

//todos los get que no manejemos nos mandan a la app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

//el servidor escucha en el puerto establecido
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})