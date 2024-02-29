const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    return players.map(player => {
        return {
            name: player.name,
            strength: getRandomStrength(),
            img: 'images/super-${index + 1}.png',
            type: (Math.floor(Math.random() * 2) === 0) ? 'hero' : 'villain'
        };
    });
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    return players
        .filter(player => player.type === type)
        .map(player => {
            return `<div class="player">
                        <img src="images/${player.name}.png" alt="${player.name}">
                        <div class="name">${player.name}</div>
                        <div class="strength">${player.strength}</div>
                    </div>`;
        })
        .join('');
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    const PLAYERS = [
        { name: 'player1' },
        { name: 'player2' },
        { name: 'player3' },
        { name: 'player4' },
        { name: 'player5' }
    ];
    viewPlayers(initPlayers(PLAYERS));
}