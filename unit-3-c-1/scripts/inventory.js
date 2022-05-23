var Data=JSON.parse(localStorage.getItem('productlist'))||[];
display(Data);

function display(productlist){
document.querySelector("userdata");

productlist.forEach((e,i) => {
    var bag=document.createElement("div");
    var image=document.createElement("img");
    image.setAttribute("src",e.image);
    image.setAttribute("class","box")

    var type=document.createElement("h2");
    type.innerText=e.type;


    var desc=document.createElement("p");
    desc.innerText=e.desc

    var price=document.createElement("h3");
    price.innerText=e.price;

    var remove= document.createElement("button");
   remove.innerText="Remove";
   remove.setAttribute('class',"removebtn")
   remove.addEventListener("click",()=>{
       removeCard(e,i);
   })
    bag.append(image,type,desc,price,remove);
    document.querySelector("#all_products").append(bag);

});
   

}

function removeCard(e,i){
    Data.splice(i,1);
    localStorage.setItem('productlist',JSON.stringify(Data));
    window.location.reload();
}