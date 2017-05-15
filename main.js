alert("It is the zombie apocalypse, you are tooling the store and suddenly the zombie burst out the door!");
var weapon = prompt("You search out for weapon. What did you choose? A bow and a arrow, or a axe, or a rubber chicken");
 var randomNumber = Math.round(Math.random());

 if (weapon === "bow and a arrow" || weapon === "axe" || weapon === "rubber chicken"){
    alert("You attack zombie with" + " " + weapon); 
    if(randomNumber === 1) {
    alert("The zombie put to death .. with your" + " " + weapon + " " + "you win !!!");
}
else if (randomNumber === 0) {
    alert("The zombie bytes you ... you loose !!!");
}
console.log(randomNumber);
 }
 else{
     alert("You are waisting your time");
 }

