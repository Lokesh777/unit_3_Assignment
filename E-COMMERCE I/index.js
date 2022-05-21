var Arr= JSON.parse(localStorage.getItem("Products"))||[];
function setProduct(ev){
    ev.preventDefault();
   let form=document.getElementById("products");
  
    let name=form.name.value;
    let category =form.category.value;
    let  image=form.image.value;
    let  price=form.price.value;
    let gender=form.gender.value;
    let sold=form.sold.value;
let pas=new SetProduct(name,category,image,price,gender,sold)
Arr.push(pas);
localStorage.setItem("Products",JSON.stringify(Arr));
window.location.href="admin.html";
}

function SetProduct(name,category,image,price,gender,sold){
    this.name=name;
    this.category=category;
    this.image=image;
    this.price=price;
    this.gender=gender;
    this.sold=sold;
}
