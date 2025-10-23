class Vehicle{
    move(){
        console.log("Kendaraan bergerak");
    }
}
class Car extends Vehicle{
    move(){
        console.log("Mobil berjalan di jalan raya");
    }
}
class Boats extends Vehicle{
    move(){
        console.log("Kapal berlayar di laut");
    }
}

const vehicle = new Vehicle();
vehicle.move();

const car = new Car();
car.move();

const boats = new Boats();
boats.move();