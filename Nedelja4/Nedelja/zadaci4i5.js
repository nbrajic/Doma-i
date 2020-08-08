let Noctowl = {
    name: 'Noctowl',
    type: 'Flying',
    abilities: ['Keen Eye', 'Insomnia'],
    characteristics: { attack: 30, defense: 30, speed: 50 },
    photo: 'https://cdn.bulbagarden.net/upload/thumb/f/fa/164Noctowl.png/1200px-164Noctowl.png'
}

let Raichu = {
    name: 'Raichu',
    type: 'Electric',
    abilities: 'Static',
    characteristics: { attack: 60, defense: 40, speed: 70 },
    photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png'
}

let Vulpix = {
    name: 'Vulpix',
    type: 'Fire',
    abilities: 'Flash Fire',
    characteristics: { attack: 30, defense: 30, speed: 40 },
    photo: 'https://img.pokemondb.net/artwork/large/vulpix.jpg'
}

let Eevee = {
    name: 'Eevee',
    type: 'Normal',
    abilities: ['Run Away', 'Adaptability'],
    characteristics: { attack: 40, defense: 40, speed: 40 },
    photo: 'https://lh3.googleusercontent.com/proxy/gGJ6mplzDwQyWFZX2W8gUavkFdxOfS6yx97iUI5wIM8aWP-OP7oi3Xq-_GhDMEHiInvdI8AV4Nu2F26EUH4fLrY0vz3lNcoK5Le2xwsIaekyeo7MUqyirkU8pAXBHWkyTvfo9ZLd5T_M'
}

let array = [Noctowl, Vulpix, Eevee, Raichu]

// Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

function strongest() {
    array.sort((a,b) => a.characteristics.attack - b.characteristics.attack)
        console.log(array[array.length - 1])
        return array[array.length - 1]
}


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
