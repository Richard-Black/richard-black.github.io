const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cars', {useUnifiedTopology:true, useNewUrlParser:true})
.then(()=> console.log("Connected to mongodb..."))
.catch((err => console.error("could not connect ot mongodb...", err)));

/*const cars = [
    {id: 1 ,make: "Ford",model: "Thunderbird",color: "red",layout:["RWD"],productionYear:["1955–1997", "2002–2005"]},
    {id: 2 ,make: "Porsche",model: "911",color: "black",layout:["RWD","4WD"],productionYear:["1963–present"]},
    {id: 3 ,make: "Ford",model: "Mustang - Shelby",color: "blue",layout:["RWD"],productionYear:["1965–1967", "1969–1971","1968", "2005–present"]},
    {id: 4 ,make: "Honda",model: "Civic - Type R",color: "white",layout:["FWD"],productionYear:["1997–present"]},
    {id: 5 ,make: "Ford",model: "Crown Victoria",color: "grey",layout:["RWD"],productionYear:["1991–2011"]},
    {id: 6 ,make: "BMW",model: "M1",color: "white",layout:["RWD"],productionYear:["1978–1981"]},
]*/
const carsSchema = new mongoose.Schema({
    id:Number,
    make:String,
    model:String,
    color:String,
    layout:[String],    
    productionYear:[String],
})

const Car = mongoose.model('Cars', carsSchema);
/*
const chocCookie = new Recipe({
    title:"Chocolate Chip Cookies",
    author:"Sam Young",
    rating:3.4,
    ingredients:["flour","sugar","butter","milk","eggs","chips"],
    directions:["mix dry ingredients", "mix wet ingredients","mix everything"]
});

async function createRecipe(recipe){
    const result = await recipe.save();
    console.log(result);
}

createRecipe(chocCookie);*/

function validateCars(cars){
    const schema = {
        id:Joi.allow(),
        make:Joi.string(),
        model:Joi.allow(),
        color:Joi.allow(),
        layout:Joi.allow(),
        productionYear:Joi.allow()
    };

    return Joi.validate(cars, schema);
}

app.post('/api/cars',(req,res)=>{
    const result = validateCars(req.body);

    if(result.error){
        res.status(400).send(result.err.details[0].message);
        return;
    }

    const car = new Car({
        id:Number(req.body.id),
        make:req.body.make,
        model:req.body.model,
        color:req.body.color,
        layout:req.body.layout,
        productionYear:req.body.productionYear
    });

    createCar(car);
    res.send(car);

});


//update a car
app.put('/api/cars/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const car = cars.find(s =>s.id === requestedId);

    //no car with matchin id in array
    if(!car) {
        res.status(404).send(`The car with id ${requestedId} was not found`);
        return;
    }

    //validating car with schema
    const result = validatecar(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update
    car.make = req.body.make;
    car.model = req.body.model;
    car.year = req.body.year;
    res.send(car);

});

app.delete('/api/cars/:id',(req,res)=>{
    const requestedId = parseInt(req.params.id);
    const car = cars.find(s =>s.id === requestedId);

    //no car with matchin id in array
    if(!car) {
        res.status(404).send(`The car with id ${requestedId} was not found`);
        return;
    }

    //car exists so I can go forward and delete it
    let index = cars.indexOf(car);
    cars.splice(index,1);
    res.send(car);
});

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/cars',(req,res)=>{
    res.send(cars);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});