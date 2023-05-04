
// Function

const Car = require("./car");

const Dealership = function(name, maxNoOfCars, stock){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.stock = stock;
};

// Count number of cars

Dealership.prototype.countNoOfCars = function(){
    return this.maxNoOfCars.length;
};

// add a car to stock

Dealership.prototype.addCarToStock = function(){
    return this.addCartoStock.push(Car);
};

// Return an array containing each car's manufacturer

    // findAllManufacturers
    // get car object which contains manufacturer property
    // use .map to source manufacturer property
    // return this.car.map 

const findAllManufacturers = stock.map((manufacturer) => {
    return this.manufacturer;
})
    
// Find all the cars from a given manufacturer

    // findCarManufacturer 
    // get car object which contains manufacturer property
    // use .filter to source manufacturer property

const findCarManufacturer = stock.filter((manufacturer)=> {
    return this.manufacturer;
})

// Find total value of all cars in stock

const totalStockValue = stock.reduce((accumulator, price) => {
        return accumulator + Car.price;  // why capital C?
}, 0)

// Total car value 

    // get car object which contains price property
    // reduce to grab sum of price value 
    




// exports Dealership module

module.exports = Dealership;