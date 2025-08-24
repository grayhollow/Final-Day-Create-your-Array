// Create a empty array to store the names here 
let un = []

// create a function that can add names to the array and print it in the list here 
function addun(){
let inputVal = document.getElementById("name").value;
un.push(inputVal);
console.log(un);

[inputVal].forEach(usernames => { 
    document.getElementById("namesList").innerHTML += "<li>" + usernames + "</li>";
});
}



// create a function that can remove the last name from the array and print it in the list here 

function remun(){
un.pop(un)
console.log(un)

let remover = document.getElementById("namesList");
remover.removeChild(remover.lastChild);
}




