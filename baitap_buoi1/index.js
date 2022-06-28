const Car =  function(make,speed){
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function(){
    console.log(this.speed += 10,"km/h")
}

Car.prototype.brake = function(){
    console.log(this.speed -= 5,"km/h")
}
function TypeCar (type) {
    this.type = type
}
TypeCar.prototype = new Car()
let car_BMW = new TypeCar("BMW")
car_BMW.make = "titanium";
car_BMW.speed = 100
console.log(car_BMW)
car_BMW.accelerate()
car_BMW.brake()

TypeCar.prototype = new Car()
let car_KIA = new TypeCar("KIA")
car_KIA.make = "titanium";
car_KIA.speed = 90
console.log(car_KIA)
car_KIA.accelerate()
car_KIA.brake()
const arr = []

arr.push(car_KIA,car_BMW)
localStorage.setItem('car',JSON.stringify(arr))
const result = localStorage.getItem('car')
console.log(JSON.parse(result))