import {array} from './index.js'

function allAbilities() {
    let array2 = []
    array.map((pokemons) => {array2.push(pokemons.abilities)})
    let array3 = array2.flat(Infinity)
    return array3
} 

function allSpeeds() {
    
    array.sort((a,b) => a.characteristics.speed - b.characteristics.speed)
    
}

function strongest() {
    array.sort((a,b) => a.characteristics.attack - b.characteristics.attack)
        return array[array.length - 1]
}

export {allAbilities, allSpeeds, strongest}