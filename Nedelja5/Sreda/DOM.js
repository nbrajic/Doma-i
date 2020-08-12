import {array} from './index.js'
import {strongest} from './functions.js'

// За дати html направити скрипту која:

// *На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :

const prikaz = document.getElementById('prikaz')
const body = document.querySelector('body')
const div1 = document.createElement('div1')
const div2 = document.createElement('div2')

prikaz.addEventListener('click', function() {
    
    for (let i = 0; i < array.length; i++) {
        
        const p1 = document.createElement('p1')
        const p = document.createElement('p')
        p.textContent = ''
        p1.textContent= 
        `Name: ${array[i].name} ||
        Type: ${array[i].type}  ||
        Abilities: ${array[i].abilities} ||
        Characteristics: Attack: ${array[i].characteristics.attack}, Defense: ${array[i].characteristics.defense}, Speed: ${array[i].characteristics.speed}`
        const img = document.createElement('img')
        img.src = array[i].photo
        img.width = '200'
        div1.append(p1,p,img,p)
        body.append(div1)
        
    }
    div2.classList.add('hide')
    div2.textContent = ''
    div1.classList.remove('hide')
})

// *На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад (користити већ написану функцију иѕ 4. задатка) по истом формату.

const pobednik = document.getElementById('pobednik')

pobednik.addEventListener('click', function() {
    
        strongest()
       
        const p2 = document.createElement('p2')
        p2.textContent= 
        `Name: ${array[array.length-1].name} ||
        Type: ${array[array.length-1].type} ||
        Abilities: ${array[array.length-1].abilities} ||
        Characteristics: Attack: ${array[array.length-1].characteristics.attack}, Defense: ${array[array.length-1].characteristics.defense}, Speed: ${array[array.length-1].characteristics.speed}`
        const img = document.createElement('img')
        img.src = array[array.length-1].photo
        img.width = '400'
        div2.append(p2,img)
        body.append(div2)

        div1.classList.add('hide')
        div1.textContent = ''
        div2.classList.remove('hide')
})
