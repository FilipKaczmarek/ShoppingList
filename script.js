const btn = document.querySelector('.btn');
let input = document.querySelector(".input");
let list = document.querySelector(".list");


let shoppingList = [];

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let newItem = input.value;
    let validInfo = document.querySelector('.error');

    if (newItem.length > 2 && !newItem.startsWith(" ")) {
        addNewItem(newItem);

        input.value = '';
        validInfo.innerText = "";
        input.classList.remove('warring');
    } else {
        validInfo.innerText = "Sorry something went wrong - Check your item name.";
        input.classList.add('warring');
    }
})

// function addNewItem(inputValue) {

//     let li = document.createElement('li');
//     li.innerHTML = inputValue + `<i class="trash fas fa-trash-alt" style="color: Tomato;"></i>`;
//     list.appendChild(li);
// }

{/* <i class="trash fas fa-trash-alt" style="color: Tomato;"></i>` */ }


function addNewItem(inputValue) {
    let ul = document.getElementsByClassName('list');
    let randomNumber = ul.length + Math.floor((Math.random() * 999) + 666).toString();
    let li = document.createElement('li');
    li.classList.add(`li-${randomNumber}`);

    let fontIcone = document.createElement('i');
    fontIcone.classList.add("trash");
    fontIcone.classList.add("fas");
    fontIcone.classList.add("fa-trash-alt");
    fontIcone.style.color = "red";

    fontIcone.addEventListener('click', function () { deleteElement(li) });

    li.innerHTML = inputValue;
    li.appendChild(fontIcone);
    list.appendChild(li);
}

function deleteElement(elementName) {
    elementName.remove();
}