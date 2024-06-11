var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Creating an instance of the Car class
var myCar = new Car("Honda", "Civic", 2023);
// Logging the properties to the console
console.log("Make: ".concat(myCar.make, ", Model: ").concat(myCar.model, ", Year: ").concat(myCar.year));
// Calling the start method
myCar.start(); // Logs "Car engine started" to the console
