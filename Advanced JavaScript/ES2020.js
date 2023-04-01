// ES2020!
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let ian_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 0
    }
}

let power = ian_pokemon?.pikachu?.power || 'no power'

console.log(power);
// let weight = will_pokemon.pikachu.weight;
// console.log('weight:', weight);//?

// if (ian_pokemon.pikachu && ian_pokemon.pikachu.weight) {
//     let weight2 = ian_pokemon.pikachu.weight
// } else {
//     let weight2 = undefined
//     console.log(weight2)//?
// }
