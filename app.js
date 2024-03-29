// Part one

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep';
    }

    toString() {
        return `The vehicle is ${this.make} ${this.model} from ${this.year}.`
    }
}

// Part two

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();
myFirstVehicle.toString();

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}


// Part three

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return 'VROOM!!!';
    }
}



// Part four

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!';
        }
        if (this.vehicles.length > this.capacity) {
            return 'Sorry, we are full.'
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle Added!'
    }
}
