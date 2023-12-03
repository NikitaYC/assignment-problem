function Vehicle(brand, model, speed, fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
};
    Vehicle.prototype.accelerate = function(){
        this.speed += 10;
        console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
    }

    Vehicle.prototype.brake = function(){
        this.speed -=5;
        console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
    }

    Vehicle.prototype.refuel = function(){
        console.log(`${this.brand} ${this.model} is refueling`)
    }


function Car(brand, model, speed, fuelType, numberOfWheels){
    Vehicle.call(this, brand, model, speed, fuelType );
    this.numberOfWheels = numberOfWheels;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


Car.prototype.honk = function(){
    console.log(`${this.brand} ${this.model} is honking.`)
}

// airplane


function Airplane(brand, model, speed, fuelType, numberOfEngine, hasLandingGear){
    Vehicle.call(this , brand, model, speed, fuelType);
    this.numberOfEngine = numberOfEngine;
    this.hasLandingGear = hasLandingGear;
}

Airplane.prototype = Object.create(Vehicle.prototype);
Airplane.prototype.constructor = Airplane;

Airplane.prototype.takeOff = function(){
    console.log(`${this.brand} ${this.model} is taking off!.`)
}


let myCar = new Car("Toyota", "Camry", 60, "pertrol", 4);
myCar.accelerate();
myCar.brake();
myCar.refuel();
myCar.honk();

let myAirplane = new Airplane("AirIndia" , "757" , 800, "Jet fuel", 4, true);
myAirplane.accelerate();
myAirplane.brake();
myAirplane.refuel();
myAirplane.takeOff();
