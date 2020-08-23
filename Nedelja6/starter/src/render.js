import { getExpensesArray, getIncomeArray, getSumIncome, populateArrays } from './common.js';
import { insert } from './localStorage.js';

const expense_list = document.getElementsByClassName('expenses-list')[0];
const income_list = document.getElementsByClassName('income-list')[0];
const add_value = document.getElementsByClassName('add-value')[0];
const add_description = document.getElementsByClassName('add-description')[0];
const sb = document.getElementsByClassName('add-type')[0];

function getSign() {
    if (sb.selectedIndex === 0) {
        return '+';
    }
    return '-';
}

function renderIncomes(deleteHandler) {
    income_list.textContent = ''
    getIncomeArray().forEach(el => {
        const income_item = document.createElement('li');
        income_item.className = 'item';
        const income_details = document.createElement('div');
        const income_value = document.createElement('income_value');
        income_value.value = el.value;
        const income_desc = document.createElement('income_desc');
        income_desc.className = 'item-description';
        income_value.className = 'item-value';
        income_desc.textContent = el.description;
        income_value.textContent = '+' + el.value + ' RSD';
        income_list.appendChild(income_item);
        income_item.append(income_desc, income_details);
        income_details.className = 'right';
    
        const dlt_btn = document.createElement('button');
        income_details.append(income_value, dlt_btn);
        dlt_btn.innerHTML = '<span class="iconify" data-icon="ion:trash" data-inline="false"></span>';
        dlt_btn.className = 'dlt-btn';
    
        income_item.id = el.id;
        const item_percentage = document.createElement('item_percentage');    
        income_details.append(item_percentage);
        dlt_btn.addEventListener('click', deleteHandler);
    });
}

export function renderExpenses(deleteHandler) {
    expense_list.textContent = ''
    getExpensesArray().forEach(el => {
        const percentage = Math.round((el.value/getSumIncome()) * 100);
        if (isNaN(percentage) || percentage === Infinity) {
            el.percentage = '--';
        }
        else {
            el.percentage = percentage;
        }
         const expense_item = document.createElement('li');
         expense_item.className = 'item';
         const expense_details = document.createElement('div');
         const expense_value = document.createElement('expense_value');
         expense_value.value = el.value;
         const expense_desc = document.createElement('expense_desc');
         expense_desc.className = 'item-description';
         expense_value.className = 'item-value';
         expense_desc.textContent = el.description;
         expense_value.textContent = '-' + el.value + ' RSD';
         expense_list.appendChild(expense_item);
         expense_item.append(expense_desc, expense_details);
         expense_details.className = 'right';
    
         const dlt_btn = document.createElement('button');
         expense_details.append(expense_value, dlt_btn);
         dlt_btn.innerHTML = '<span class="iconify" data-icon="ion:trash" data-inline="false"></span>';
         dlt_btn.className = 'dlt-btn';
    
         const item_percentage = document.createElement('item_percentage');
         item_percentage.value = el.percentage;
         item_percentage.textContent = el.percentage + '%';
         expense_details.append(item_percentage);
         item_percentage.className = 'item-percentage';
    
         expense_item.id = el.id;
        el.percentageElement = item_percentage;
        dlt_btn.addEventListener('click', deleteHandler);
    })
}

export function createNewItem(deleteHandler) {
    const item = document.createElement('li');
    const details = document.createElement('div');
    item.className = 'item';
    const value = document.createElement('value');
    const desc = document.createElement('desc');
    desc.className = 'item-description';
    value.className = 'item-value';
    desc.textContent = add_description.value;
    value.value = Number(add_value.value).toFixed(2);
    value.textContent = getSign() + Number(add_value.value).toFixed(2) + ' RSD';
    item.append(desc, details);
    details.className = 'right';
    const dlt_btn = document.createElement('button');
    details.append(value, dlt_btn);
    dlt_btn.innerHTML = '<span class="iconify" data-icon="ion:trash" data-inline="false"></span>';
    dlt_btn.className = 'dlt-btn';
    dlt_btn.addEventListener('click', deleteHandler);
    const item_percentage = document.createElement('item_percentage');
    item_percentage.value = Math.round(((Number(add_value.value))/getSumIncome())*100);
    item_percentage.textContent = Math.round(((Number(add_value.value))/getSumIncome())*100) + '%';
    details.append(item_percentage);
    item_percentage.className = 'item-percentage';
    const element = {
        description: desc.textContent,
        value: Number(value.value),    
    };
    if (getSign() === '+') {
        item_percentage.style.display = 'none';
        element.sign = 0; 
    }
    else {
        element.sign = 1;
    }
    const id = insert(element);
    item.id = id;
    populateArrays();
    return item;
}

export function renderAll(deleteHandler) {
    populateArrays();
    renderExpenses(deleteHandler);
    renderIncomes(deleteHandler);
}