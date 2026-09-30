let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let horario = document.getElementById("horario");

let myForm = document.getElementById("my-form");
let userList = document.getElementById("users");

myForm.addEventListener("submit", clicar);
 
function clicar(e){
    //Para persistir os dados
    e.preventDefault();
    //1. criar um novo elemento HTML <li> em memóeia (ainda não visivel na página;)
    let itemLi = document.createElement("li")
    //2. Prepara para inserir um elemento "filho" dentro da tag <li>
    itemLi.appendChild(
    //3. Cria um texto puro contendo as informações formatadas
    document.createTextNode(
        //4. Junta os valores digitados nos inputs usando Template Literais
       `${nameInput.value} : ${emailInput.value} : ${horario.value}`
    )
    )
 
    userList.appendChild(itemLi);
}
 
