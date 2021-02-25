let pokemonList = [
    {
        name: 'Squirtle',
        height: 51,
        types: 'water'
    },
    {
        name: 'Charizard',
        height: 150,
        types: ['fire', 'flying' ]
    },
    {
        name: 'Ivysaur',
        height: 99,
        types: ['grass', 'poison']
    }
]

for(let i=0; pokemonList[i]; i++){
    document.write(`${pokemonList[i].name} (height:${pokemonList[i].height}cm) `);
    if(pokemonList[i].height > 100){
        document.write(`Wow, that's a big Pokemon! `)
    }
    document.write("<br><br>");
}
