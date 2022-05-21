const automobiles ={
    name:"Suzuki",
    wheel:4,
    window:4,
    door:4,
    seating_capacity:"5",
    fuel_type:"petrol&diesal",
    manual:true,
    ARIL_mileage:true,

};

const fourWheeler=Object.create(automobiles);
console.log(fourWheeler)
fourWheeler.name="TATA_NANO";
console.log(fourWheeler);

function Product(type){
this.type=type;
(this.belt = true),
(this.wheel=4),
(this.window=4),
(this.seating_capacity="5"),
(this.fuel_type="petrol&diesal"),
(this.manual=true),
(this.ARIL_mileage=true),
(this.seatbelt = true);


};
Product.prototype.Free=function (){
    console.log("free_Drive")
}

Product.prototype.changeType=function (type){
    this.type=type;
};
let item3 =new Product("Bentley");
item3.Free();
console.log(item3);

let item =new Product("Mahindra");
item.changeType("Thar");
console.log(item)

let item2 =new Product("Rolls Royce");
console.log(item2)

// //define the length here

// let Array=new myBox(1,2,3,4);
// function myBox(){

//     Object.defineProperty(this,"length",{
//         value:0,
//         writable:true,
//         emunerable:false,
//     });
//     this.length=arguments.length;
//     for(let i=0;i<arguments.length;i++){
//         this[i]=arguments[i];
//     }
// }
// console.log(Array)
// // ------length=====
// function lengthCheck(){
//     console.log(arguments.length)
// }
// lengthCheck(1,2,3,4)
