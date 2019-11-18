const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const cars = [
    {id: "1" ,make: "Ford",model: "Thunderbird",year: "2005"},
    {id: "2" ,make: "Porsche",model: "9111",year: "1997"},
    {id: "3" ,make: "Ford",model: "Mustang - Shelby",year: "2001"},
    {id: "4" ,make: "Honda",model: "Civic - Type R",year: "2000"},
    {id: "5" ,make: "Ford",model: "Crown Victoria",year: "2007"},
    {id: "6" ,make: "BMW",model: "M1",year: "1981"},
]

app.get('/api/cars', (req,res)=>{
    res.send(cars);
});

app.get('/api/cars/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const car = cars.find(s =>s.id === requestedId);

    if(!car) {
        res.status(404).send(`The car with id ${requestedId} was not found`);
        return;
    }

    res.send(car);
});

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});
function validateCar(car){
    const schema = {
        make:Joi.string().min(3).required(),
        model:Joi.string().min(4).required(),
        year:Joi.string().required()
    }

    return Joi.validate(car, schema);
}
app.post('/api/cars', (req,res)=>{
    /*const schema = {
        make:Joi.string().min(3).required(),
        model:Joi.string().min(4).required(),
        year:Joi.string().required()
    }

    const result = Joi.validate(req.body, schema);*/

    const result = validateCars(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const car = {
        id:cars.length + 1,
        make : req.body.make,
        model : req.body.model,
        year : req.body.year
    }
    console.log("make is: " + req.body.make);
    cars.push(car);
    res.send(car);
});

//update a car
app.put('api/cars/:id', (req,res)=>{
const requestedId = parseInt(req.params.id);
const car = cars.find(s =>s.id === requestedId);

//no car with matching id in array
if(!car) {
    res.status(404).send(`The car with id ${requestedId} was not found`);
    return;
}

//validating car with schema
const result = validateCars(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }



//update
cars.make = req.body.make;
cars.model = req.body.model;
car.year = req.body.year;
res.send(car);
});

app.delete('api/cars/:id', (res, req)=>{
    const requestedId = parseInt(req.params.id);
    const car = cars.find(s =>s.id === requestedId);

    //no car with matching id in array
    if(!car) {
        res.status(404).send(`The car with id ${requestedId} was not found`);
        return;
    }

    //car exists so I can go forward and delete it
    let index = cars.indexOf(car);
    cars.splice(index,1);
    res.send(car);
});

//listen
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});