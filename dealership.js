
// Function

const Car = require("./car");

const Dealership = function(name, maxNoOfCars){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.carStock = [];
};

// Count number of cars

Dealership.prototype.countNoOfCars = function(){
    return this.maxNoOfCars.length;
};

// add a car to stock

Dealership.prototype.addCarToStock = function(car){
    return this.carStock.push(car);
};

// Return an array containing each car's manufacturer

    // findAllManufacturers
    // get car object which contains manufacturer property
    // use .map to source manufacturer property
    // return this.car.map 

Dealership.prototype.findAllManufacturers = function(){ 
    return this.carStock.map((car) => {
        return car.manufacturer;
    
})
}  
// Find all the cars from a given manufacturer

 // findCarManufacturer 
 // get car object which contains manufacturer property
 // use .filter to source manufacturer property

Dealership.prototype.findCarManufacturer = function(){
    return this.carStock.filter((car) => {
        return car.manufacturer;
    })
}

// priceOfCars method ArrayList

const priceOfCars = function(){
    return this.carStock.map((car) => this.car.price) 
}

// // Find total value of all cars in stock

// Dealership.prototype.totalCarStockValue = priceOfCars.reduce((accumulator, priceOfCars)=> {
//     return accumulator.priceOfCars;
// },0)



// exports Dealership module

module.exports = Dealership;