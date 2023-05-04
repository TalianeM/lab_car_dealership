
// Function

const Dealership = function(name, maxNoOfCars, stock){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.stock = stock;
};

// Count number of cars

Dealership.prototype.countNoOfCars = function(){
    return this.maxNoOfCars.length;
};


// exports Dealership module

module.exports = Dealership;