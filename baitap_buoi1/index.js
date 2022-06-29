const Car =  function(make,speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`this acclerate make speed go up to ${this.speed}km/h`)
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`this brake make speed down to ${this.speed}km/h`)
}

function TypeCar (type) {
    this.type = type
}

TypeCar.prototype = new Car()
let car_BMW = new TypeCar("BMW")
car_BMW.make = "titanium";
car_BMW.speed = 100
console.log(`${car_BMW.type} have a speed is ${car_BMW.speed}km/h`)
car_BMW.accelerate()
car_BMW.brake()

TypeCar.prototype = new Car()
let car_KIA = new TypeCar("KIA")
car_KIA.make = "titanium";
car_KIA.speed = 90
console.log(`${car_KIA.type} have a speed is ${car_KIA.speed}km/h`)
car_KIA.accelerate()
car_KIA.brake()
const arr = []

