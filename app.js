let contaioner_which_take_inputs = document.body.querySelector("#additionOfInputContainer")

function onSubmit() {

    let div = document.createElement("div");
    let userInput = document.body.querySelector("#userInput");

    div.classList.add("additionOfInput");
    div.innerHTML = ` <p class="input">${userInput.value}</p>
    <div class="btns">
        <button class="remove">Remove</button>
        <button class="edit">Edit</button>
    </div>`
    contaioner_which_take_inputs.appendChild(div);


    userInput.value = ""
    
    console.log(userInput);

}