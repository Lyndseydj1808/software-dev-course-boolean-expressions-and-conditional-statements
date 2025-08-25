/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasCurrency = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  console.log("On your journey you come across an abandoned cabin. You are running low on supplies, but need to keep moving to stay ahead of the enemy.");
  const foodChoice = readline.question("Do you stop to look for food?");
    if (foodChoice === "yes") {
    console.log("Congratulations! You found 3 cans of beans and some bandages that will help you on your journey.");
    } 
    else {
    console.log("You continue on your journey.");
    }
} 
else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} 
else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  console.log("You meet a skilled blacksmith who is selling weapons.");
  const weoponChoice = readline.question("Do you purchase a sword or knife?");
    if (weoponChoice === "sword" && hasCurrency) {
      console.log("Congratulations. Here is your new sword!");
    } 
    else if (weoponChoice === "sword" && !hasCurrency) {
      console.log("Sorry, you do not have enough money to purchase this item.");
    } 
    else if (weoponChoice === "knife" && hasCurrency) {
      console.log("Congratulations! Here is your new knife.");
    } 
    else if (weoponChoice === "knife" && !hasCurrency) {
      console.log("Sorry, you do not have enough money to purchase this item.");
    } 
    else {
      console.log("Please choose sword or knife.");
    }
} else {
  console.log("You get lost and wander aimlessly.");
}




/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/