import { renderAll, createNewItem } from "./render.js";
import { getExpensesArray, updateSumExpenses, getSumExpenses, updateSumIncome, getSumIncome, getIncomeArray } from './common.js';
import { remove } from "./localStorage.js";

const add_btn = document.getElementsByClassName('add-btn')[0];
const income_list = document.getElementsByClassName('income-list')[0];
const expense_list = document.getElementsByClassName('expenses-list')[0];
const add_description = document.getElementsByClassName('add-description')[0];
const add_value = document.getElementsByClassName('add-value')[0];
const sb = document.getElementsByClassName('add-type')[0];
const total_income = document.getElementsByClassName('income-value')[0];
const total_expenses = document.getElementsByClassName('expenses-value')[0];
const expenses_percentage = document.getElementsByClassName('expenses-percentage')[0];
const current = document.getElementById('current');
const budget_title = document.querySelector('#title');

let date = new Date();
const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
budget_title.textContent = 'Available Budget in ' + month + ' ' + date.getFullYear();

function getSign() {
    if (sb.selectedIndex === 0) {
        return '+';
    }
    return '-';
}

function reportError() {
    if(add_value.value < 0 || add_value.value == '') {
        const err = document.getElementById('err');
        err.textContent = ' Please provide a positive value.';
        setTimeout(function(){
            err.textContent = '';
        },1000);
        return true;
    } 

    if(add_description.value.trim() == '') {
        const err = document.getElementById('err');
        err.textContent = 'Please provide a description.';
        setTimeout(function(){
            err.textContent = '';
        },1000);
        return true;
    }
    return false;
}

function updateExpensePercentage() {
    const percentage = Math.round((getSumExpenses()/getSumIncome()) * 100);
    if (isNaN(percentage) || percentage === Infinity) {
        expenses_percentage.textContent = '--';
    }
    else {
        expenses_percentage.textContent = percentage + '%';
    }
}

function updateItemPercentage() {
    getExpensesArray().forEach(el => {
        const percentage = Math.round((el.value/getSumIncome()) * 100);
        if (isNaN(percentage) || percentage === Infinity) {
            el.percentage = '--';
        }
        else {
            el.percentage = percentage;
        }
        el.percentageElement.value = el.percentage
        el.percentageElement.textContent = el.percentage + '%';
    });
}

function deleteHandler(e) {
    const target = e.currentTarget;
    const item = target.parentElement.parentElement;
    let elem;

    if (item.parentElement === income_list) {
        item.style.display = 'none';
        updateSumIncome(-Number(this.previousSibling.value));
        total_income.textContent = '+' + getSumIncome() + ' RSD';
        updateExpensePercentage();
        updateCurrent();
        updateItemPercentage();
        elem = getIncomeArray()[getIncomeArray().findIndex(el => el.id == item.id)];
    }

    else {
        item.style.display = 'none';
        updateSumExpenses(-Number(this.previousSibling.value));
        total_expenses.textContent = '-' + getSumExpenses() + ' RSD';
        updateExpensePercentage();
        updateCurrent();
        elem = getExpensesArray()[getExpensesArray().findIndex(el => el.id == item.id)];
        getExpensesArray().splice(getExpensesArray().findIndex(el => el.id == item.id),1);
    }
    remove(elem);
}

function addItemToList(item) {
    if (getSign() === '+') {
        income_list.append(item);
    }
    else {
        expense_list.append(item);
    }
}

function updateTotal() {
    if (getSign() === '+'){
        total_income.textContent = '+' + getSumIncome() + ' RSD';
    }
    else {
        total_expenses.textContent = '-' + getSumExpenses() + ' RSD';
    }
    updateExpensePercentage();
    return;
}

function updateCurrent() {
    current.textContent = '';
    current.textContent = getSumIncome() - getSumExpenses() + 'RSD';
}

function cleanInput() {
    add_description.value = '';
    add_value.value = '';
}

add_btn.addEventListener('click', function(){
    if (!reportError()) {
        const item = createNewItem(deleteHandler);
        addItemToList(item);
        updateTotal();
        updateCurrent();
        cleanInput();    
        renderAll(deleteHandler);
    }  
});

window.addEventListener('load', () => {
    renderAll(deleteHandler);
    updateItemPercentage();
    updateCurrent();
    total_income.textContent = '+' + getSumIncome() + ' RSD';
    total_expenses.textContent = '-' + getSumExpenses() + ' RSD';
    updateExpensePercentage();
});