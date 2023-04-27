const passDiv = document.getElementById("password");
const confirmPassDiv = document.getElementById("repeat-password");

console.log(passDiv);
console.log(confirmPassDiv);

confirmPassDiv.addEventListener("input",updateValue);
passDiv.addEventListener("input",updateValue);



function updateValue(e){
    console.log(confirmPassDiv.value);
    console.log(passDiv.value);

    if (confirmPassDiv.value === passDiv.value) {
        confirmPassDiv.classList.remove("invalid-pass");
        passDiv.classList.remove("invalid-pass");
    }
    else{
        confirmPassDiv.classList.add("invalid-pass");
        passDiv.classList.add("invalid-pass");
    }
}