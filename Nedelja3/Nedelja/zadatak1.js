// Написати функцију која исписује све елементе низа који су дељиви са 5

function divisibleByFive(arr){
    arr.forEach(num => { num % 5 === 0 ? console.log(num) : null })}

divisibleByFive([1,2,3,4,5,10,15,23,1,5]) // Исписује -> 5,10,15,5

