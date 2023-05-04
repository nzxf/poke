// randomizer
const rand = max => Math.floor(Math.random() * max)

// Axios ==> PokeAPI
const pokeData = async (id) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
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
    for (let i = 0; i < 3; i++) {
        const pokeAbility = document.createElement('P')
        pokeAbility.classList.add('poke-ability')
        pokeAbility.textContent = "Thunderous roar"
        leftCard.append(pokeAbility)
        // Effect
        const pokeAbilityEffect = document.createElement('P')
        pokeAbilityEffect.classList.add('poke-ability-effect')
        pokeAbilityEffect.textContent = "Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight."
        leftCard.append(pokeAbilityEffect)
    }

    // Card: middle
    const midCard = document.createElement('DIV')
    midCard.classList.add('mid-card')
    card.append(midCard)

    const pokeImage = document.createElement('IMG')
    pokeImage.classList.add('poke-image')
    pokeImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
    midCard.append(pokeImage)

    // Card: right-side
    const rightCard = document.createElement('DIV')
    rightCard.classList.add('right-card')
    card.append(rightCard)

    // Type
    const typeContainer = document.createElement('DIV')
    typeContainer.classList.add('type-container')
    rightCard.append(typeContainer)
    for (let i = 0; i < 2; i++) {
        const pokeType = document.createElement('SPAN')
        pokeType.classList.add('poke-type')
        pokeType.textContent = "Flying"
        typeContainer.append(pokeType)
    }
    // Name
    const pokeName = document.createElement('P')
    pokeName.classList.add('poke-name')
    pokeName.textContent = data.name
    rightCard.append(pokeName)
    // Id - Height - Weight - Region
    const descContainer = document.createElement('DIV')
    descContainer.classList.add('desc-container')
    rightCard.append(descContainer)

    const pokeId = document.createElement('SPAN')
    pokeId.classList.add('poke-id')
    pokeId.textContent = "#006"
    descContainer.append(pokeId)
    const pokeHeight = document.createElement('SPAN')
    pokeHeight.classList.add('poke-height')
    pokeHeight.textContent = "170 Cm"
    descContainer.append(pokeHeight)
    const pokeWeight = document.createElement('SPAN')
    pokeWeight.classList.add('poke-weight')
    pokeWeight.textContent = "905 Kg"
    descContainer.append(pokeWeight)
    const pokeRegion = document.createElement('SPAN')
    pokeRegion.classList.add('poke-region')
    pokeRegion.textContent = "Kanto"
    descContainer.append(pokeRegion)

    // Stats (hp, att, def, spc-att, spc-def, speed)
    for (let i = 0; i < 6; i++) {
        const pokeStat = document.createElement('P')
        pokeStat.classList.add('poke-stat')
        pokeStat.textContent = "Health: 62"
        rightCard.append(pokeStat)

        const pokeBarHolder = document.createElement('DIV')
        pokeBarHolder.classList.add('poke-bar-holder')
        rightCard.append(pokeBarHolder)

        const pokeBar = document.createElement('DIV')
        pokeBar.classList.add('poke-bar')
        pokeBar.style.width = `${Math.floor(Math.random() * 100)}%`
        pokeBarHolder.append(pokeBar)
    }

    // XP
    // Base xp
    const pokeXp = document.createElement('P')
    pokeXp.classList.add('poke-xp')
    pokeXp.textContent = "XP: 78"
    rightCard.append(pokeXp)

    const pokeBarHolderXp = document.createElement('DIV')
    pokeBarHolderXp.classList.add('poke-bar-holder')
    rightCard.append(pokeBarHolderXp)

    const pokeBarXp = document.createElement('DIV')
    pokeBarXp.classList.add('poke-bar')
    pokeBarXp.style.width = `${Math.floor(Math.random() * 100)}%`
    pokeBarHolderXp.append(pokeBarXp)
}

chooseOne()