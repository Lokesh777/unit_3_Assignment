//store the products array in localstorage as "products"
var Data=JSON.parse(localStorage.getItem('productlist'))||[];
function addProducts(e){
  e.preventDefault();
  let form=document.getElementById('products')

  let type=form.type.value;
  let desc=form.desc.value;
  let price=form.price.value;
  let image=form.image.value;
   
  // console.log(type,desc,price,image)
let pas = new AddthePro(type,desc,price,image)
 Data.push(pas);

 localStorage.setItem("productlist",JSON.stringify(Data));
 window.location.reload()

}

function AddthePro(type,desc,price,image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image= image;
}