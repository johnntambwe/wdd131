
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deletedButton = document.createElement('button');

        li.textContent = input.value;
        deletedButton.textContent = '❌';

        li.append(deletedButton);
        list.append(li);

        input.focus();
        deletedButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
        input.value = ' ';
    }

    input.focus();
})















// let el = document.getElementById("close-button");
// console.log(el.ariaLabel); // "Close"
// el.ariaLabel = "Close dialog";
// console.log(el.ariaLabel); // "Close dialog"
