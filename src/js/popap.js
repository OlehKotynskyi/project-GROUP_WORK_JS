import{createMarkupModal} from './template'

// console.log(5); //то була перевірка чи працює файл
const container = document.querySelector(".popup");
const item = document.querySelector(".products-container ");
const close = document.querySelector(".popup-close");
item.addEventListener("click", handleClick);
function handleClick(event) {
    // console.log(event.target);
    if (event.target === event.currentTarget) {
        return
    }

    const itemId = event.target.closest('.list-item').id;

    // Получите элемент из файла X с помощью его id
    const itemElement = document.getElementById(itemId);

    // Добавьте содержимое элемента в контейнер
    container.innerHTML = itemElement.outerHTML;

    container.style.display = 'flex';

    document.addEventListener("keydown", handleClickClose);
    // document.addEventListener("keydown", handleKeyDown);
    // close.addEventListener("click", handleClose);
    function handleClickClose(event) {
        if (event.key === "Escape" ) {
            document.removeEventListener("keydown", handleClickClose);
        }

















        






    }






































}

// function handleKeyDown(event) {
//     if (event.key === "Escape") {
//         closeContainer();
//     }
// }

// function handleClose() {
//     closeContainer();
// }

// function closeContainer() {
//     container.style.display = 'none';
//     document.removeEventListener("keydown", handleKeyDown);
//     close.removeEventListener("click", handleClose);
// }
