const games = [
    {
        title: "Red Dead Redemption 2",
        genre: "Action och äventyr",
        year: 2018,
        description: "Ett öppet spel med en stor värld och en stark berättelse.",
        favorite: false
    },
    {
        title: "God of War Ragnarök",
        genre: "Action och äventyr",
        year: 2022,
        description: "Ett äventyr med episka strider och nordisk mytologi.",
        favorite: false
    },
    {
        title: "Ghost of Tsushima",
        genre: "Action",
        year: 2020,
        description: "Utforska ett vackert Japan som samuraj.",
        favorite: false
    },
    {
        title: "Elden Ring",
        genre: "Rollspel",
        year: 2022,
        description: "Ett utmanande äventyr i en stor fantasivärld.",
        favorite: false
    },
    {
        title: "Marvel's Spider-Man 2",
        genre: "Action",
        year: 2023,
        description: "Svinga dig genom New York och bekämpa fiender.",
        favorite: false
    }
];

const gameList = document.querySelector("#game-list");
const favoriteCount = document.getElementById("favorite-count");

function showGames() {
    gameList.innerHTML = "";
    let total = 0;

    for (let i = 0; i < games.length; i++) {
        const game = games[i];

        const card = document.createElement("article");
        card.classList.add("game-card");

        const number = document.createElement("span");
        number.classList.add("game-number");
        number.textContent = "SPEL " + (i + 1);

        const title = document.createElement("h3");
        title.textContent = game.title;

        const description = document.createElement("p");
        description.textContent = game.description;

        const genre = document.createElement("p");
        genre.textContent = "Genre: " + game.genre;

        const year = document.createElement("p");
        year.textContent = "Utgivet: " + game.year;

        const button = document.createElement("button");
        button.classList.add("favorite-button");

        if (game.favorite === true) {
            button.textContent = "Ta bort favorit";
            button.classList.add("active");
            total = total + 1;
        } else {
            button.textContent = "Lägg till favorit";
        }

        button.addEventListener("click", function () {
            toggleFavorite(i);
        });

        card.appendChild(number);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(genre);
        card.appendChild(year);
        card.appendChild(button);
        gameList.appendChild(card);
    }

    favoriteCount.textContent = "Mina favoriter: " + total;
}

function toggleFavorite(index) {
    games[index].favorite = !games[index].favorite;
    showGames();
}

showGames();