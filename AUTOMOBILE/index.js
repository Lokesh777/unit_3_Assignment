// ---object created--- 
const automobiles = {
    name:"Suzuki", wheel:"MRF",
    window:"tata",door:"four",
    seating_capacity:"5",
    fuel_type:"petrol&diesal", manual:true,
    seller:"tata automobiles pvt.ltd.",
    ARIL_mileage:true,
};
let fourWheeler=Object.create(automobiles);
automobiles.type="Nano",
automobiles.brake="hyd&manual",
automobiles.color="red",
automobiles.seating_capacity="four",
automobiles.sunroof='true',
console.log(fourWheeler);

function Product(type,color,brake,sunroof){
this.type=type;
this.color=color;
this.brake=brake;
this.sunroof=sunroof;
(this.belt = true),
(this.wheel=4),
(this.window=4),
(this.seating_capacity="5"),
(this.fuel_type="petrol&diesal"),
(this.manual=true),
(this.ARIL_mileage=true),
(this.seatbelt = true);
};
var newcar=new Product("Nano","red","Antilock","true")
console.log(newcar)
