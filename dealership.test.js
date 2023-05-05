
// imports dealership class 

const { beforeEach } = require("node:test");
const Dealership = require("./dealership");

beforeEach(() =>{
    dealership = new Dealership("carShop", 24)
}
)

// Test 1

test('can count number of cars',() => {
const expected = 3; 
const actual = dealership.countNoOfCars
expect(actual).toBe(expected);

});

// // Test 2

// test('can add a car to stock ',() => {

// });

// // Test 3

// test('can find all the cars manufacturer ',() => {

// });

// // Test 4

// test('can find cars from given manufacturer ',() => {

// });

// // Test 5

// test('can find price of cars ',() => {

// });

// // Test 6

// test('can find total value of cars in stock ',() => {

// });