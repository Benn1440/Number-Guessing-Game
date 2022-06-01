// Generate userName and save in cookie
let userResponse = prompt("Enter your Username");
// saving to cookie
// document.cookie = "username = userResponse";
//Cookies.set("username = userResponse");
console.log('Welcome ' + userResponse);
// initial point
point = 0;



// Random number generator
function getRndInteger(min, max) {
  while(true){
    makingChoices = prompt(`\n Select number between ${min} and ${max}`);
  let numGet = Math.floor(Math.random() * (max - min + 1) ) + min;

    if(makingChoices == numGet){
      console.log('You just earned 1 point\n\n\t welcome to the next stage');
      point++;
      // saving to cookie
      // document.cookie = "point = +1";
      // Cookies.set("point +=1")
    }

    if(makingChoices!= numGet){
      console.log(`You guessed wrong, your total point is ${point}`)
    break}
  max++;
    
  }
}
getRndInteger(1,2);

