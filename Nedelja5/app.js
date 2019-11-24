//Adding month name
const h1 = document.querySelector('h1');
let month = document.createElement('span');
let date = new Date();
month.textContent = date.toLocaleString('default', { month: 'long' });
h1.appendChild(month);

const button = document.querySelector('.add-item');
button.addEventListener('click', addItem);



function getDynamicSum(decision) {
    const incomeNodeList = document.querySelectorAll(`.${decision}-value`);
    let sum = 0;
    incomeNodeList.forEach(node => {
        sum += Number(node.innerText);
    });
    return sum;
}

function setDifBetweenIncAndExp (newValue) {
  document.querySelector('#sum-of-sum').innerText = newValue;
}

function deleteItemHandler (isIncome, elementToRemove, providedValue) {
  const incomeSum = getDynamicSum('income');
  const expenseSum = getDynamicSum('expense');
  const incomeSumElement = document.querySelector('#income-sum');
  const expensesSumElement = document.querySelector('#expenses-sum');
  const expensesSumPercentElement = document.querySelector('#expenses-sum-percent');

  isIncome ? 
    (incomeSumElement.innerText = incomeSum - providedValue) 
    : 
    (expensesSumElement.innerText = expenseSum - providedValue);

  setDifBetweenIncAndExp(Number(incomeSumElement.innerText) - Number(expensesSumElement.innerText));
  expensesSumPercentElement.innerText = Number(incomeSumElement.innerText) ? `%${Math.round( (Number(expensesSumElement.innerText) / Number(incomeSumElement.innerText)) * 100)}` : `%100`;
  

  elementToRemove.remove();
} 

function addItem() {
    const incomeOutput = document.querySelector('.placeholder-income');
    const expensesOutput = document.querySelector('.placeholder-expenses');
    const isIncome = document.querySelector('.dropdown').value === 'Income';
    const incomeSumElement = document.querySelector('#income-sum');
    const expensesSumElement = document.querySelector('#expenses-sum');
    const expensesSumPercentElement = document.querySelector('#expenses-sum-percent');
    
    const itemDescription = document.querySelector('.desc').value
    const providedNumber = Math.abs(Number(document.querySelector('.num-input').value));

    if (itemDescription === '') {
        alert('Add a description');
        return;
    }

    if (providedNumber === 0) {
        alert('Must be positive number!');
        return;
    }

    const itemContainer = document.createElement('div');
    itemContainer.className = 'item-container';
    itemContainer.innerHTML = `
      <p class='description'>
        ${itemDescription}
      </p>
      <p class='${isIncome ? 'income-value' : 'expense-value'}'>
        ${providedNumber}
      </p>
      `;

    let expensesSum = getDynamicSum('expense');
    let incomeSum = getDynamicSum('income');

    const deleteBtn = document.createElement('p');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = 'del';
    deleteBtn.addEventListener('click', () => {
      deleteItemHandler(isIncome, itemContainer, providedNumber);
    });
    itemContainer.appendChild(deleteBtn);



    if (isIncome) {
      setDifBetweenIncAndExp((incomeSum + providedNumber) - expensesSum);
        itemContainer.classList.add('income');
        incomeOutput.appendChild(itemContainer);

        incomeSumElement.innerText = incomeSum + providedNumber;
        return;
    }
    setDifBetweenIncAndExp(incomeSum - (expensesSum + providedNumber));

    expensesSumElement.innerText = expensesSum + providedNumber;
    expensesSumPercentElement.innerText = incomeSum ? `%${Math.round(( (expensesSum + providedNumber) / incomeSum) * 100)}` : `%100`;

    const expensePercentage = document.createElement('p');
    expensePercentage.className = 'expense-percentage';
    expensePercentage.innerText = `% ${Math.round((providedNumber / incomeSum) * 100)}`;
    itemContainer.appendChild(expensePercentage);

    itemContainer.classList.add('expenses');
    expensesOutput.appendChild(itemContainer);
}