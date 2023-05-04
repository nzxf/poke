// give colors based on type
const colors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

// give random number
const rand = max => Math.floor(Math.random() * max)

// make number to #000 format
const digity = function(num) {
    let x = ["#"]
    for(let i = 4; i > num.toString().length; i--) {
        x.push(0)
    }
    return x.concat(num).join('')
}

// capitalize the first letter
const upFirst = str => str[0].toUpperCase().concat(str.slice(1)); 

// PokeAPI = pokeData
const pokeData = async (id) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

const pokeDataAb = async (ability) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/ability/${ability}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}


const cardContainer = document.querySelector('.card-container')

const chooseOne = async (id = rand(152)) => {
    const data = await pokeData(id)

    // Card
    const card = document.createElement('DIV')
    card.classList.add('card')
    cardContainer.append(card)

    // Card: left-side
    const leftCard = document.createElement('DIV')
    leftCard.classList.add('left-card')
    card.append(leftCard)

    // Ability
    for (let i = 0; i < data.abilities.length; i++) {
        const dataAb = await pokeDataAb(data.abilities[i].ability.name)
        
        const pokeAbility = document.createElement('P')
        pokeAbility.classList.add('poke-ability')
        pokeAbility.textContent = data.abilities[i].ability.name.toUpperCase()
        leftCard.append(pokeAbility)
        // Effect
        const pokeAbilityEffect = document.createElement('P')
        pokeAbilityEffect.classList.add('poke-ability-effect')
        pokeAbilityEffect.textContent = dataAb.effect_entries[1].effect
        leftCard.append(pokeAbilityEffect)
        // Short Effect
        const pokeAbilityShortEffect = document.createElement('P')
        pokeAbilityShortEffect.classList.add('poke-ability-short-effect')
        pokeAbilityShortEffect.textContent = dataAb.effect_entries[1].short_effect
        leftCard.append(pokeAbilityShortEffect)
    }

    // Card: middle
    const midCard = document.createElement('DIV')
    midCard.classList.add('mid-card')
    card.append(midCard)

    const pokeImage = document.createElement('IMG')
    pokeImage.classList.add('poke-image')
    pokeImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    midCard.append(pokeImage)

    // Card: right-side
    const rightCard = document.createElement('DIV')
    rightCard.classList.add('right-card')
    card.append(rightCard)

    // Type
    const typeContainer = document.createElement('DIV')
    typeContainer.classList.add('type-container')
    rightCard.append(typeContainer)
    for (let i = 0; i < data.types.length; i++) {
        const pokeType = document.createElement('SPAN')
        pokeType.classList.add('poke-type')
        pokeType.textContent = upFirst(data.types[i].type.name)
        pokeType.style.backgroundColor = colors[data.types[i].type.name]
        typeContainer.append(pokeType)
    }
    // Name
    const pokeName = document.createElement('P')
    pokeName.classList.add('poke-name')
    pokeName.textContent = data.name.toUpperCase()
    rightCard.append(pokeName)
    // Id - Height - Weight - Region
    const descContainer = document.createElement('DIV')
    descContainer.classList.add('desc-container')
    rightCard.append(descContainer)

    const pokeId = document.createElement('SPAN')
    pokeId.classList.add('poke-id')
    pokeId.textContent = digity(data.id)
    descContainer.append(pokeId)
    const pokeHeight = document.createElement('SPAN')
    pokeHeight.classList.add('poke-height')
    pokeHeight.textContent = `${data.height}0 cm`
    descContainer.append(pokeHeight)
    const pokeWeight = document.createElement('SPAN')
    pokeWeight.classList.add('poke-weight')
    pokeWeight.textContent = `${data.weight/10} kg`
    descContainer.append(pokeWeight)
    const pokeRegion = document.createElement('SPAN')
    pokeRegion.classList.add('poke-region')
    pokeRegion.textContent = "Kanto Region"
    descContainer.append(pokeRegion)

    // Stats (hp, att, def, spc-att, spc-def, speed)
    for (let i = 0; i < data.stats.length; i++) {
        const pokeStat = document.createElement('P')
        pokeStat.classList.add('poke-stat')
        pokeStat.textContent = `${upFirst(data.stats[i].stat.name)}: ${data.stats[i].base_stat}`
        rightCard.append(pokeStat)

        const pokeBarHolder = document.createElement('DIV')
        pokeBarHolder.classList.add('poke-bar-holder')
        rightCard.append(pokeBarHolder)

        const pokeBar = document.createElement('DIV')
        pokeBar.classList.add('poke-bar')
        pokeBar.style.width = `${(data.stats[i].base_stat / 300) * 100}%`
        pokeBarHolder.append(pokeBar)
    }

    // XP
    // Base xp
    const pokeXp = document.createElement('P')
    pokeXp.classList.add('poke-xp')
    pokeXp.textContent = `Base Experience: ${data.base_experience}`
    rightCard.append(pokeXp)

    const pokeBarHolderXp = document.createElement('DIV')
    pokeBarHolderXp.classList.add('poke-bar-holder')
    rightCard.append(pokeBarHolderXp)

    const pokeBarXp = document.createElement('DIV')
    pokeBarXp.classList.add('poke-bar')
    pokeBarXp.style.width = `${(data.base_experience / 400) * 100}%`
    pokeBarHolderXp.append(pokeBarXp)
}

chooseOne();