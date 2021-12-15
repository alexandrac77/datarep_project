const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');

//server.js
//add just under import section at the top of server,js
// Serve the static files from the React app
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));


app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


global.TextEncoder = require("util").TextEncoder; 
global.TextDecoder = require("util").TextDecoder;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');

const strConnection = 'mongodb+srv://alex:unicorn@cluster1.d0lxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(strConnection);
}

const veganSchema = new mongoose.Schema({
    Name:String,
    Desc:String,
    Rating:String
});

const cafeModel = mongoose.model('cows', veganSchema);


app.post('/api/cafes', (req,res)=>{
    console.log(req.body);
    console.log(req.body.Name);
    console.log(req.body.Desc);
    console.log(req.body.Rating);

    cafeModel.create({
        Name:req.body.Name,
        Desc:req.body.Desc,
        Rating:req.body.Rating
    });
    res.send('Data Sent to Server!')
})

app.get('/api/cafes/:id',(req, res)=>{
    console.log(req.params.id);

    cafeModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

app.delete('/api/cafes/:id', (req, res)=>{
    console.log('Deleting : '+req.params.id);

    cafeModel.deleteOne({_id:req.params.id},
        (error, data)=>{
            if(error)
                res.send(error)
            res.send(data);
        })
})

app.put('/api/cafes/:id',(req, res)=>{
    console.log('update');
    console.log(req.body);
    console.log("Updating: " + req.params.id);

    cafeModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})

app.get('/api/cafes', (req, res) => {
    cafeModel.find((err, data)=>{
        res.json(data);
    })
    
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})