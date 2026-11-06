function randomNumber(){
 return Math.floor (Math.random()*6)+1;
}

let randNumber1 = randomNumber();
let randNumber2 = randomNumber();

/* console.log(randNumber1 + " " + randNumber2); */

let randImageSource1 = "./images/dice" + randNumber1 + ".png";
let randImageSource2 = "./images/dice" + randNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",randImageSource1);
document.querySelector(".img2").setAttribute("src",randImageSource2);

if(randNumber1>randNumber2)
{
 document.querySelector("h1").textContent= "Igrač 1 je pobjedio";
    
}
else if(randNumber1<randNumber2)    
{
document.querySelector("h1").textContent= "Igrač 2 je pobjedio";
    

}
else
{
document.querySelector("h1").textContent= "Jednako je";
    

}