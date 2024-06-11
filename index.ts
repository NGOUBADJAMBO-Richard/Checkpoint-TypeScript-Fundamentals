interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Creating an instance of the Car class
const myCar = new Car("Honda", "Civic", 2023);

// Logging the properties to the console
console.log(`Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);

// Calling the start method
myCar.start(); // Logs "Car engine started" to the console
