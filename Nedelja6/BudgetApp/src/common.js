import {selectAll} from './localStorage.js';

let expenses_array = [];
let income_array = [];
let sum_income = 0;
let sum_expenses = 0;

export function getExpensesArray() {
    return expenses_array;
}

export function getIncomeArray() {
    return income_array;
}

export function populateArrays() {
    income_array = [];
    expenses_array = [];
    sum_income = 0;
    sum_expenses = 0;
    selectAll().forEach( el => {
        if (el.sign === 0) {
            income_array.push(el);
            sum_income += el.value;
        }
        else {
            expenses_array.push(el);
            sum_expenses += el.value;
        }
    });
}

export function updateSumIncome(newIncome) {
    sum_income += newIncome;
}

export function getSumIncome() {
    return sum_income;
}

export function updateSumExpenses(newExpense) {
    sum_expenses += newExpense;
}

export function getSumExpenses() {
    return sum_expenses;
}