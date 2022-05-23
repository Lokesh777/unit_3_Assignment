// var a=10;
// var b=a;
// b=20;
// console.log('a:',a  )

// var b={
//     name:'lokyam'
// }
// var c=b
// c.name='lokyam Baba';
// console.log('b',b)
// ************************
// var a='masai';
// var a;
// a='school '
// *********************************
// console.log(this)
// //it give window object
// function funt(){
//     console.log(this)
// }
// funt()

// it give window object

//  ***********
// let obj={
//     team:'csk',
//     print: function(){
//         console.log(this)
//     },
// };
// obj.print();
// this will refere to an object
// this will refer either to global or window or custom object which you creator
// this always refer to its parent object
// ******************
// function fun(n,b,p){
//     var obj={}
//     obj.name=n,
//     obj.brand=b,
//     obj.price=p
//     return obj
//     // console.log(this.obj)
// }
// console.log(fun("shoe","nike",1000))
// ************************
// function Fun(n,b,p){
   
//    this.name=n;
//     this.brand=b;
//    this.price=p;
//    this.print=function(){
//        console.log(this);
//    };
// }
// let p1= new Fun('shoe','nike',1000);
// let p2= new Fun('sneaker','nike',2000);
// p1.print()
// p2.print()
// // new=> it return the object and points this to the newly created object;
// let obj={} //object Literal
// function Product(name, brand,price){
// this.name=name;
// this.brand=brand;
// this.price=price; 

// }
// //mould fpor creating object
// //blueprint for object
// let arr=[];
// function submitproduct(e){
//     e.preventDefault();
//     let form=document.getElementById("pro");
//     let name=form.name.value;
//     let brand=form.brand.value;
//     let price=form.price.value;
// let p=new Product(name,brand,price)

//  arr.push(p);
//  console.log(arr)
// }
// ------------call, APPLY, BIND----->>>>>>
// let bedroom={
//     name:"bendroom",
//     purpose:"sleep",
//     food:function(food){
//         console.log(`serving ${food} in ${this.name}`); //string literal
//         // console.log("serving" +food + "in" + this.name); 
//     },
// };

// let LivingRoom={
//     name:"Living room",
//     purpose:"rest",
//     food:function(food){
//         console.log(`serving ${food} in ${this.name}`); //string literal
//         // console.log("serving" +food + "in" + this.name); 
//     },
// };
// let storeRoom={
//     name:"store room",
//     purpose:"store",
//     food:function(food){
//         console.log(`serving ${food} in ${this.name}`); //string literal
//         // console.log("serving" +food + "in" + this.name); 
//     },
// };
// bedroom.food("Pizza")
// LivingRoom.food("vadapov")
// // ************_________________*************
// let bedroom={
//     name:"bendroom",
//     purpose:"sleep",
   
// };

// let LivingRoom={
//     name:"Living room",
//     purpose:"rest",
   
// };
// let storeRoom={
//     name:"store room",
//     purpose:"store",
   
// };
// function food(food){
//     console.log(`serving ${food} in ${this.name}`); //string literal
//     console.log("serving" +food + "in" + this.name); 
// };
// food.call(bedroom,"pizza")
// food.call(LivingRoom,"pizza")
// food.call(storeRoom,"pizza")

// let arr=["pizza","samosa"]
// food.apply(bedroom,arr)
// food.apply(LivingRoom,["pizza"])
// food.apply(storeRoom,["pizza"])

// let f1=food.bind(bedroom,"pizza")
// let f2=food.bind(LivingRoom,"pizza")
// let f3=food.bind(storeRoom,"pizza")
// f1();

// function food(food,food2){
//     console.log(`serving ${food} and ${food2} in ${this.name}`); //string literal
//     // console.log("serving" +food + "in" + this.name); 
// };
// food.call(bedroom,"pizza","samosa")
// // food.call(LivingRoom,"pizza")
// // food.call(storeRoom,"pizza")

// let arr=["pizza","samosa"]
// food.apply(bedroom,arr)
// // food.apply(LivingRoom,["pizza"])
// // food.apply(storeRoom,["pizza"])
// // **********************

// ****Inheritance**********
// why=> to make it easy 
// const cat ={
//     name:"cat",
//     legs:4,
//     fur:true,
//     tail:true,
//     type:"animal",
// };
// // const tiger={
// //     name:"tiger",
// //     legs:4,
// //     fur:true,
// //     tail:true,
// //     type:"animal",
// // };

// // const tiger=Object.create(cat);
// // console.log(tiger);
// // const tiger=Object.create(cat);
// // tiger.name="tiger"
// // console.log(tiger.name);

// const student = {
//     batch:"web 18",
//     institute:"masai School",
//     unit:3,
//     course:"FSWD",

// };

// // const s1= Object.create(student);
// // console.log(s1)
// const s1= Object.create(student,{name:{value:"sanjay"}});
// // s1.name="sanjay";
// console.log(s1)

// const pro={
//     brand:"nike",
//     logo:"url",
//     seller:"nikeproduction",
// }
// const obj1= Object.create(pro)
// console.log(pro)

// // ********************************************************
// //constructor function
// // create a constructor function to create the blueprint
// function Product(type){
//     this.type=type;
//     this.brand="nike",
//     (this.logo="url"),
//     (this.seller="Flipkart");
// }

// Product.prototype.discount=function (){
//     console.log("50% discount")
// }
// Product.prototype.changeType=function (type){
//     this.type=type;
// };
// let p3 =new Product("shoe");
// p3.changeType("t-shirt");

// // let p1 =new Product("shoe");
// // p1.discount();
// console.log(p3)
// // console.log(p1)
// //call Apply-----> Temporary
// //prototype-------->Permanent


// let p4 =new Product("sneaker");

// let p32 =new Product("shoe");
// let p5 =new Product("sneaker");
// let p12 =new Product("shoe");
// // ************ANOTHER Example of prototype*****
// let arr=[1,2,3];
// //console.log(arr)
// let arr1=new Array(1,2,3);
// console.log(arr1)

// function myArray(){
// //    console.log(arguments);
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
// let arr3=new myArray(1,2,3,4,5,6,6);
// console.log(Object.values(arr3))
// **********************
// // constructor function
// function myArray(){
//     //    console.log(arguments);
//       this.length=arguments.length;
//         for(let i=0;i<arguments.length;i++){
//             this[i]=arguments[i];
//         }
//     }
//     let arr3=new myArray(1,2,3,4,5,6,6);
//     console.log(Object.values(arr3))
//     ***************
//     ------arguments-------
// function check(){
//     console.log(arguments.length)
// }
// check(1,2,3,4,5)
// // // ********************************************
// let arr=[1,2,3,4,5,6]
// let arr4=new myArray(1,2,3,4,5,6);
// console.log(Object.values(arr4));
// myArray.prototype.push=function(value){
//     this[this.length]=value;
//     this.length++;
// };

// myArray.prototype.pop=function(){
//     delete this[this.length-1];
//     this.length--;
// }
// arr4.pop();
// arr4.push(7);
// arr4.pop()
// arr4.push(8);

// // ******************************************
// let gp={
//     height:"tall",

// };
// let father=Object.create(gp);
// let son=Object.create(father);
// son.name="baburam"
// console.log(son)
// //Prototype chaining
// // ****************************************

// ------------ day 3------------>

// setTimeout----once 
// setInterval---multiple time
// forword watch 
// let h1= document.getElementById('counter');

// function counter(){
//     let i=0;
  
//     setInterval(function(){
//         if(i==60){
//             i==0
//         }
//         i=i+1;
//       h1.innerText=i
//     },1000)
// }
// counter();
// ****************************************
// reverse time watch 
// let h1= document.getElementById('counter');

// function counter(){
//     let i=60;
  
//   let id = setInterval(function(){
//     i=i-1;
//     h1.innerText=i
//     if(i==0){
//           clearInterval(id);
//           alert("timeout!!!");
//       }
        
//     },100);
// }
// counter();
// *******************************************














