const addTaskButton = document.querySelector('#btn-add');
const taskListContainer = document.querySelector('#tasks-container');
const textBoxTitle = document.querySelector('#txt-title');

addTaskButton.addEventListener('click', btnAddClick);
textBoxTitle.addEventListener('keyup', txtKeyUp);
function btnAddClick(e) {
    e;
    addItem();
}

function txtKeyUp(e) {
    // 13 je kod za Enter
    if (e.keyCode === 13) {
        addItem();
    }
}

function addItem() {
    let txtBox = document.querySelector('#txt-title');
    let text = txtBox.value;
    text = text.trim();

    if (text === '') {
        alert('Task title can\'t be empty!');
        return;
    }
    //Task Priority
    let priority = document.querySelector('#dropdown');
    let options = priority.options;

    //Kreiranje novog taga i dodeljivanje clase
    let itemContainer = document.createElement('div');
    itemContainer.className = 'task-title';

    let itemText = document.createElement('p');
    itemText.innerHTML =`<h1>${options[options.selectedIndex].value}</h1> ${text}`;
    itemText.className = 'task-title';

    let checkContainer = document.createElement('div');
    checkContainer.className = 'task-check';

    let removeBtn = document.createElement('div');
    removeBtn.className = 'task-remove-btn';
    removeBtn.addEventListener('click', removeTask);
    removeBtn.innerHTML = 'X';

    let chkDone = document.createElement('input');
    chkDone.type = 'checkbox';
    chkDone.className = 'chk-state';
    chkDone.value = 'done';
    chkDone.addEventListener('change', handleCheckChange);

    //Prosledjivanje kreiranog u html
    checkContainer.appendChild(removeBtn);
    checkContainer.appendChild(chkDone);
    itemContainer.appendChild(itemText);
    itemContainer.appendChild(checkContainer);
    taskListContainer.appendChild(itemContainer);

    txtBox.value = '';

}

function removeTask(e) {
    if (!confirm('Are you sure?')) {
        return;
    }
    let btnToRemove = e.target;
    let divToRemove = btnToRemove.parentElement.parentElement;
    divToRemove.remove();
}

function handleCheckChange(e) {
    let chkBox = e.target;
    let checkContainer = chkBox.parentElement;
    let itemContainer = checkContainer.parentElement;

    if (chkBox.checked) {
        itemContainer.children[0].style.textDecoration = 'line-through';
    } else {
        itemContainer.children[0].style.textDecoration = 'none';
    }
}
//Removing selected tasks
let buttonRemoveSelected = document.querySelector('#btn-rmv');
buttonRemoveSelected.addEventListener('click', removeSelected);

function removeSelected() {
    let inputFields = document.querySelectorAll('.chk-state');
    inputFields.forEach(input => {
        input.checked && input.parentElement.parentElement.remove();
    });

}
//Inverting Selection

let buttonInvertSelected = document.querySelector('#btn-inv');
buttonInvertSelected.addEventListener('click', invertSelected);

function invertSelected() {
    let checkFields = document.querySelectorAll('.chk-state');
    checkFields.forEach(check => {
        check.checked = !check.checked;
    });
}