//На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

// Дугмићи за 'наручивање' повећавају бројач
// Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ]) Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

const naruci = document.getElementsByClassName('naruci')
const naruciOdmah = document.getElementsByClassName('naruci-odmah')
const brojac = document.getElementById('brojac')

counter = 0

naruci[0].addEventListener('click', function(){
    counter += 1
    brojac.textContent = counter
})

naruci[1].addEventListener('click', function(){
    counter += 1
    brojac.textContent = counter
})

naruciOdmah[0].addEventListener('click', function(){
    if(counter > 0) {
        brojac.textContent = `Naručili ste ${counter} pice. ${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}`
        counter = 0
    }
    else{
        brojac.textContent = 'Korpa je prazna.'
    }
})

naruciOdmah[1].addEventListener('click', function(){
    if(counter > 0) {
        brojac.textContent = `Naručili ste ${counter} pice. ${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}`
        counter = 0
    }
    else{
        brojac.textContent = 'Korpa je prazna.'
    }
})
