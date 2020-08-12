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
    photo: 'https://static.pokemonpets.com/images/monsters-images-800-800/133-Eevee.png'
}

let array = [Noctowl, Vulpix, Eevee, Raichu]

export {array}
import {allSpeeds, allAbilities, strongest} from './functions.js'

// Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

console.log(strongest())

// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

console.log(allAbilities())

// Сортирати покемоне по брзини, растуће.

console.log(allSpeeds())
