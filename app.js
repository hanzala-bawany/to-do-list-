let contaioner_which_take_inputs = document.body.querySelector("#additionOfInputContainer")

function onSubmit() {

    let div = document.createElement("div");
    let userInput = document.body.querySelector("#userInput");

    div.classList.add("additionOfInput");
    div.innerHTML = ` <p class="input">${userInput.value}</p>
    <div class="btns">
        <button onclick="remove(this.parentElement)" class="remove">Remove</button>
        <button onclick="edit(this.parentElement)" class="edit">Edit</button>
    </div>`
    contaioner_which_take_inputs.prepend(div);

    userInput.value = ""
}

function remove(removeItem) {

    let remove = removeItem.parentElement;
    remove.remove()
    console.log(remove, " --> this is remove item");
}

let subBtn = document.body.querySelector("#subBtn");

function edit(editItem) {
    let userInput = document.body.querySelector("#userInput");
    let editBox = editItem.parentElement;
    let editItemKaInput = editBox.querySelector(".input");


    userInput.value = editItemKaInput.innerHTML;

    editItemKaInput.innerHTML = "";

    subBtn.innerHTML = "Edit Submit";
    subBtn.setAttribute("onclick", "onEditSubmit()");

    editBox.classList.add("forEdit")
    console.log(editBox,"when add class");
}

function onEditSubmit() {
    let jisMeInputBhejnaHe = document.body.querySelector(".forEdit")
    let userInput = document.body.querySelector("#userInput");
   let jisMeInputBhejnaHeUsKaInput =  jisMeInputBhejnaHe.querySelector(".input");
    
   jisMeInputBhejnaHeUsKaInput.innerHTML = userInput.value;
    
    userInput.value = "";

    subBtn.innerHTML = "Submit";
    subBtn.setAttribute("onclick", "onSubmit()");

    jisMeInputBhejnaHe.classList.remove("forEdit");
    console.log(jisMeInputBhejnaHe,"when remove class");
}


