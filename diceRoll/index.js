function playGame(){
    var img1=document.querySelectorAll("h1")[0];
    img1.setAttribute.randImg1Path;
    
    var img2=document.querySelectorAll("h1")[1];
    img2.setAttribute.randImg2Path;  

    var img3=document.querySelectorAll("h1")[2];
    img3.setAttribute.randImg3Path;  

    
    var randNum1=Math.floor(Math.random()*6)+1;
    var randImg1Path=randNum1;

    var randNum2=Math.floor(Math.random()*6)+1;
    var randImg2Path=randNum2;

    var randNum3=Math.floor(Math.random()*6)+1;
    var randImg3Path=randNum3;

    

    // if(randNum1){
        if(randNum1>randNum2&&randNum1>randNum3){
            document.querySelector("#result").innerHTML="Mamber A is winner"
            // document.querySelector("h1").style.backgroundColor="green";
                    if(randNum2>randNum3){
                        img1.style.backgroundColor="green";
                        img2.style.backgroundColor="yellow";
                        img3.style.backgroundColor="red";
                    }else{
                        img1.style.backgroundColor="green";
                        img2.style.backgroundColor="red";
                        img3.style.backgroundColor="yellow";
                    }
          }
    // else{
    //     document.querySelector("h1").style.backgroundColor="yellow";
    // }

//    if(randNum2){
       else if(randNum2>randNum3&&randNum2>randNum1){
            document.querySelector("#result").innerHTML="Mamber B is winner"
            // document.querySelector("h1").style.backgroundColor="green";
            if(randNum1>randNum2){
                img1.style.backgroundColor="yellow";
                img2.style.backgroundColor="green";
                img3.style.backgroundColor="red";
            }else{
                img1.style.backgroundColor="red";
                img2.style.backgroundColor="green";
                img3.style.backgroundColor="yellow";
            }
        }
    //  }
   


//    if(randNum3){
    else if(randNum3>randNum1&&randNum3>randNum2){
            document.querySelector("#result").innerHTML="Mamber C is winner"
            // document.querySelector("h1").style.backgroundColor="green";
            if(randNum1>randNum2){
                img1.style.backgroundColor="yellow";
                img2.style.backgroundColor="red";
                img3.style.backgroundColor="green";
            }else{
                img1.style.backgroundColor="red";
                img2.style.backgroundColor="yellow";
                img3.style.backgroundColor="green";
            }
        }
//    }
//    else{
//     document.querySelector("h1").style.backgroundColor="yellow";
//    }


    else if(randNum1==randNum2==randNum3){
                img1.style.backgroundColor="blue";
                img2.style.backgroundColor="blue";
                img3.style.backgroundColor="blue";
            
    }
    
    else if(randNum1==randNum2&&randNum1>randNum3&&randNum2>randNum3){
        img1.style.backgroundColor="blue";
        img2.style.backgroundColor="blue";
        document.querySelector("#result").innerHTML="Mamber A&B is winner"
         
        // img3.style.backgroundColor="blue";
    }
    else if(randNum2==randNum3&&randNum2>randNum1&&randNum3>randNum1){
        img3.style.backgroundColor="blue";
        img2.style.backgroundColor="blue";
        document.querySelector("#result").innerHTML="Mamber B&C is winner"
         
        // img3.style.backgroundColor="blue";
    }
    else if(randNum3==randNum1&&randNum1>randNum2&&randNum3>randNum2){
        img1.style.backgroundColor="blue";
        img3.style.backgroundColor="blue";
        document.querySelector("#result").innerHTML="Mamber A&C is winner"
         
        // img3.style.backgroundColor="blue";
    }
}   
   
// }
document.querySelector("button").addEventListener("click",playGame)




// function playGame(){
//     var randNum1=Math.floor(Math.random()*6)+1;
//     var randImg1Path="images/"+randNum1+".png"

//     var randNum2=Math.floor(Math.random()*6)+1;
//     var randImg2Path="images/"+randNum2+".png"

//     var randNum3=Math.floor(Math.random()*6)+1;
//     var randImg3Path="images/"+randNum3+".png"

//     var img1=document.querySelectorAll("img")[0];
//     img1.setAttribute("src",randImg1Path);
    
//     var img2=document.querySelectorAll("img")[1];
//     img2.setAttribute("src",randImg2Path);  

//     var img3=document.querySelectorAll("img")[2];
//     img3.setAttribute("src",randImg3Path);  

//     if(randNum1>randNum2&&randNum1>randNum3){
//         document.querySelector("#result").innerHTML="Mamber A is winner"
        
//     }
//    else if(randNum2>randNum3&&randNum2>randNum1){
//         document.querySelector("#result").innerHTML="Mamber B is winner"
//     }
//     else if(randNum3>randNum1&&randNum3>randNum2){
//         document.querySelector("#result").innerHTML="Mamber C is winner"
//     }
//     else{
//         document.querySelector("#result").innerHTML="Draw"
   
//     }
// }
// document.querySelector("button").addEventListener("click",playGame)

