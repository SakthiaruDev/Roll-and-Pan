const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const rollDice = () => getRandomNumber(0, 12);

document.getElementById("roll").addEventListener("click", function () {
  // fetch player names from the input fields
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;

  // roll dice for both players
  const player1Score = rollDice();
  const player2Score = rollDice();

  // initialize empty string to store result
  let result = "";

  // determine the result
  if (player1Score > player2Score) {
    result = `${player1} won the round`;
  } else if (player2Score > player1Score) {
    result = `${player2} won the round`;
  } else {
    result = "This round is tied";
  }

  // display the result on the page
  document.getElementById("results").innerHTML = `
  <p>${player1} = ${player1Score}</p>
  <p>${player2} = ${player2Score}</p>
  <p>${result}</p>
  `;
});


// let name="sakthi";
// let place="panruti";

// console.log(`Im ${name} and my place is ${place}`)




const input=document.getElementById("input")

function reverseString(str){
  return str.split("").reverse().join("")
}

function check(){
  const value=input.value;
  const reverse=reverseString(value)

  if(value===reverse){
    alert("PALINDROME")
  } else{
    alert("NOPE")
  }

}