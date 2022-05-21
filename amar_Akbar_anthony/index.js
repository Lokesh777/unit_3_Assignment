var men1 = {
    name:"Amar",
    place:"Goa",
    skill:"signing",
    skillOwner: function(){
        console.log("amar has"+" "+this.skill+"skill")
    },
}
var men2={
    name:"Akbar",
    place:"Mumbai",
    skill:"chef",
    skillOwner:function(){
        console.log("Akbar has"+ " "+this.skill+"skill")
    },
}

var men3={
    name:"Anthony",
    place:"Kashmir",
    skill:"magician",
    skillOwner:function(){
        console.log("Anthony has"+" "+this.skill+"skill")
    },
}

men1.skillOwner.call(men2)
men1.skillOwner.call(men3)

men2.skillOwner.call(men1)
men2.skillOwner.call(men3)

men3.skillOwner.call(men1)
men3.skillOwner.call(men2)