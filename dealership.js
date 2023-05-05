
// Function

const Car = require("./car");

const Dealership = function(name, maxNoOfCars){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.carStock = [];
};

// Count number of cars

Dealership.prototype.countNoOfCars = function(){
    return this.carStock.length;
};

// add a car to stock

Dealership.prototype.addCarToStock = function(car){
    return this.carStock.push(car);
};

// Find each car's manufacturer


Dealership.prototype.findAllManufacturers = function(){ 
    return this.carStock.map((car) => {
        return car.manufacturer;
    
})
}  
// Find all the cars from a given manufacturer

Dealership.prototype.findCarManufacturer = function(){
    return this.carStock.filter((car) => {
        return car.manufacturer;
    })
}

// Find priceOfCars 

const priceOfCars = function(){
    return this.carStock.map((car) => this.car.price) 
}

// Find total value of all cars in stock

const totalCarStockValue = ((accumulator, priceOfCars) => {
    return accumulator + priceOfCars
},0)


// exports Dealership module

module.exports = Dealership;