/*
Description
To practice today's concepts, we're going to create a naive password generator! 
We want you to grab the user's input, and then output a password for them. Since we're 
still learning here, the passwords won't be super secure... 

Instructions
- get the user's first name
- get the user's last name
- get the user's favourite colour
- tell the user their new password:
- the password must have the following format: first name + last name + 
   favourite colour + 42

Tips
- You can manipulate strings in many different ways, 
  make sure to google about it if you're not sure

Challenge
Instead of 42, can you make your passwords more secure and generate a random number between 0 and 200?
Use your Google-Fu skills!

Challenge 2
Now that we can generate a random number, can you make it so that the user can input the 
range in between you generate the random number?
See if you can find a way to parse the input so that you can have 2 numbers!
Again, Google is your friend...
*/

let userFirstName = prompt("What is your first name?");
let userLastName = prompt("What is your last name?");
let userFavoriteColour = prompt("What is your favorite colour?");
console.log(
  alert(`Your new password is:
${
  userFirstName.toUpperCase() + userLastName.toLowerCase() + userFavoriteColour
}42`)
);

// Challenge;
userFirstName = prompt("What is your first name?");
userLastName = prompt("What is your last name?");
userFavoriteColour = prompt("What is your favorite colour?");
console.log(
  alert(`Your new password is:
${
  userFirstName +
  userLastName +
  userFavoriteColour +
  Math.floor(Math.random() * (200 - 0))
}`)
);

// challenge 2
userFirstName = prompt("What is your first name?");
userLastName = prompt("What is your last name?");
userFavoriteColour = prompt("What is your favorite colour?");
let userMinNumber = Number(prompt("Choose number between 0 -100"));
let userMaxNumber = Number(prompt("Choose number between 100 - 200"));
console.log(
  alert(`Your new password is:
${
  userFirstName +
  userLastName +
  userFavoriteColour +
  Math.floor(
    Math.random() * (userMaxNumber - userMinNumber + 1) + userMinNumber
  )
}`)
);
