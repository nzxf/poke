const cardContainer = document.querySelector('.card-container')

const chooseOne = function(id) {
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
    pokeImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    midCard.append(pokeImage)

    // Card: right-side
    const rightCard = document.createElement('DIV')
    rightCard.classList.add('right-card')
    card.append(rightCard)

    // Type
    for (let i = 0; i < 2; i++) {
        const pokeType = document.createElement('SPAN')
        pokeType.classList.add('poke-type')
        pokeType.textContent = "Flying"
        rightCard.append(pokeType)
    }
    // Name
    const pokeName = document.createElement('P')
    pokeName.classList.add('poke-name')
    pokeName.textContent = "CHARIZARD"
    rightCard.append(pokeName)
    // Id - Height - Weight - 
    const pokeId = document.createElement('SPAN')
    pokeId.classList.add('poke-id')
    pokeId.textContent = "#006"
    rightCard.append(pokeId)
    const pokeHeight = document.createElement('SPAN')
    pokeHeight.classList.add('poke-height')
    pokeHeight.textContent = "170 Cm"
    rightCard.append(pokeHeight)
    const pokeWeight = document.createElement('SPAN')
    pokeWeight.classList.add('poke-weight')
    pokeWeight.textContent = "905 Kg"
    rightCard.append(pokeWeight)
    // Region?
    // Base xp
    const pokeXp = document.createElement('P')
    pokeXp.classList.add('poke-xp')
    pokeXp.textContent = "XP: 78"
    rightCard.append(pokeXp)

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
}

chooseOne(6)