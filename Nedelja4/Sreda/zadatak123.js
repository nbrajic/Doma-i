// Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)

// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))
// Даље, направити низ од ових објеката

// пикачу:
// име: пикачу
// врста: електрични
// способности: Статички електрицитет,...
// карактеристике: напад: 55, одбрана: 30, брзина: 907

let Noctowl = {
    name: 'Noctowl',
    type: 'Flying',
    abilities: ['Keen Eye', 'Insomnia'],
    characteristics: { attack: 30, defense: 30, speed: 50 }
}

let Raichu = {
    name: 'Raichu',
    type: 'Electric',
    abilities: 'Static',
    characteristics: { attack: 60, defense: 40, speed: 70 }
}

let Vulpix = {
    name: 'Vulpix',
    type: 'Fire',
    abilities: 'Flash Fire',
    characteristics: { attack: 30, defense: 30, speed: 40 }
}

let Eevee = {
    name: 'Eevee',
    type: 'Normal',
    abilities: ['Run Away', 'Adaptability'],
    characteristics: { attack: 40, defense: 40, speed: 40 }
}

let array = [Noctowl, Raichu, Vulpix, Eevee]
console.log(array)

/////////////////////////////////////////////////////////////////////////////////////

// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

function allAbilities() {
    let array2 = []
    array.map((pokemons) => {array2.push(pokemons.abilities)})
    let array3 = array2.flat(Infinity)
    console.log(array3)
    return array3
} 

allAbilities()

////////////////////////////////////////////////////////////////////////////////////

// Сортирати покемоне по брзини, растуће.

function allSpeeds() {
    // let array3 = []
    array.sort((a,b) => a.characteristics.speed - b.characteristics.speed)
    // array.map((pokemons) => {
    //     let str = pokemons.name + ' : ' + pokemons.characteristics.speed
    //     array3.push(str)
    // })
        console.log(array)
        return array    
}

allSpeeds()