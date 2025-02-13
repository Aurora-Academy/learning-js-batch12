// Logical Operator
//3

// AND
// OR
// NOT

// AND
// syntax &&
// condition 1 && condition 2

// const age = +prompt("Age");
// const dl = confirm("Do you have DL?");

// const isAllowed = age >= 18 && dl === true ? "You are invited" : "Sorry";
// alert(isAllowed);

// OR
// condition 1  || condition 2
// syntax ||

// show user if they allowed to vote based on nagarita or voter card?
// alert their eligibility

// const nagarita = confirm("Do you have nagarita?");
// const voterCard = confirm("Do you have voter card?");

// const eligible =
//   nagarita || voterCard ? "You are eligible" : "Nope not allowed";
// alert(eligible);

// NOT

const user = prompt("What is your name?"); // null, "", false, undefined
if (!user) {
  alert("User name is missing");
}
