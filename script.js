const movies = [

    {
        id: "dune-2",
        title: "Dune: Part Two",
        year: 2024,
        genre: ["science fiction", "adventure", "action"],
        rating: 8.6,
        runtime: "2h 46m",
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        description:
            "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",
        trailer: "Way9Dexny3w"
    },

    {
        id: "kung-fu-panda-4",
        title: "Kung Fu Panda 4",
        year: 2024,
        genre: ["animation", "comedy", "adventure"],
        rating: 6.3,
        runtime: "1h 34m",
        poster: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
        description:
            "Po must train a new warrior while preparing to become the spiritual leader of the Valley of Peace.",
        trailer: "_inKs4eeHiI"
    },

    {
        id: "wonder-woman-1984",
        title: "Wonder Woman 1984",
        year: 2020,
        genre: ["superhero", "action", "fantasy"],
        rating: 5.3,
        runtime: "2h 31m",
        poster: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
        description:
            "Wonder Woman faces a powerful enemy while navigating a mysterious artifact that changes people's lives.",
        trailer: "sfM7_JLk-84"
    },

    {
        id: "interstellar",
        title: "Interstellar",
        year: 2014,
        genre: ["science fiction", "adventure"],
        rating: 8.7,
        runtime: "2h 49m",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description:
            "A team of explorers travels through space in search of a new home for humanity.",
        trailer: "zSWdZVtXT7E"
    },

    {
        id: "inception",
        title: "Inception",
        year: 2010,
        genre: ["science fiction", "action"],
        rating: 8.8,
        runtime: "2h 28m",
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description:
            "A skilled thief enters people's dreams to steal valuable secrets.",
        trailer: "YoHD9XEInc0"
    },

    {
        id: "the-dark-knight",
        title: "The Dark Knight",
        year: 2008,
        genre: ["action", "superhero"],
        rating: 9.0,
        runtime: "2h 32m",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description:
            "Batman faces a criminal mastermind who creates chaos across Gotham City.",
        trailer: "EXeTwQWrcwY"
    },

    {
        id: "avatar",
        title: "Avatar",
        year: 2009,
        genre: ["science fiction", "adventure", "action"],
        rating: 7.8,
        runtime: "2h 42m",
        poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        description:
            "A former marine becomes involved in the conflict between humans and the inhabitants of Pandora.",
        trailer: "5PSNL1qE6VY"
    },

    {
        id: "avengers-endgame",
        title: "Avengers: Endgame",
        year: 2019,
        genre: ["action", "superhero", "adventure"],
        rating: 8.4,
        runtime: "3h 1m",
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description:
            "The Avengers work together to reverse the devastating events that changed their world.",
        trailer: "TcMBFSGVi1c"
    },

    {
        id: "spider-man",
        title: "Spider-Man: No Way Home",
        year: 2021,
        genre: ["superhero", "action", "adventure"],
        rating: 8.2,
        runtime: "2h 28m",
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        description:
            "Peter Parker's life becomes complicated when a spell opens the door to unexpected visitors.",
        trailer: "JfVOs4VSpmA"
    },

    {
        id: "toy-story-3",
        title: "Toy Story 3",
        year: 2010,
        genre: ["animation", "comedy", "adventure"],
        rating: 8.3,
        runtime: "1h 43m",
        poster: "https://image.tmdb.org/t/p/w500/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
        description:
            "Woody, Buzz and the toys face a new chapter as Andy prepares to leave home.",
        trailer: "JcpWXaA2qeg"
    }

];


document.addEventListener("DOMContentLoaded", function () {

    setupTheme();

    displayFeaturedMovies();

    displayPopularMovies();

    displayAllMovies();

    displayTopMovies();

    displayFavorites();

    displayMovieDetails();

    setupSearch();

});


function createMovieCard(movie) {

    return `

        <div class="movie-card">

            <a href="movie.html?id=${movie.id}">

                <img
                    src="${movie.poster}"
                    alt="${movie.title} poster"
                >

                <div class="movie-card-content">

                    <h3>
                        ${movie.title}
                    </h3>

                    <div class="movie-info">

                        <span>
                            ${movie.year}
                        </span>

                        <span class="card-rating">
                            ⭐ ${movie.rating}
                        </span>

                    </div>

                </div>

            </a>

        </div>

    `;
}


function displayFeaturedMovies() {

    const container =
        document.getElementById("featuredMovies");

    if (!container) return;

    const featured =
        movies.slice(0, 5);

    container.innerHTML =
        featured.map(createMovieCard).join("");

}


function displayPopularMovies() {

    const container =
        document.getElementById("popularMovies");

    if (!container) return;

    const popular =
        [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    container.innerHTML =
        popular.map(createMovieCard).join("");

}


function displayAllMovies(list = movies) {

    const container =
        document.getElementById("allMovies");

    if (!container) return;

    if (list.length === 0) {

        container.innerHTML = `

            <div class="empty-message">

                <h2>No movies found</h2>

                <p>
                    Try another search or genre.
                </p>

            </div>

        `;

        return;
    }

    container.innerHTML =
        list.map(createMovieCard).join("");

}


function setupSearch() {

    const searchInput =
        document.getElementById("searchInput");

    const searchButton =
        document.getElementById("searchButton");

    const genreFilter =
        document.getElementById("genreFilter");


    if (!searchInput) return;


    function filterMovies() {

        const search =
            searchInput.value
            .toLowerCase()
            .trim();

        const genre =
            genreFilter.value
            .toLowerCase();


        const filtered =
            movies.filter(movie => {

                const matchesSearch =
                    movie.title
                    .toLowerCase()
                    .includes(search);


                const matchesGenre =
                    genre === "all" ||
                    movie.genre.includes(genre);


                return matchesSearch &&
                    matchesGenre;

            });


        displayAllMovies(filtered);

    }


    searchInput.addEventListener(
        "input",
        filterMovies
    );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            filterMovies
        );

    }


    if (genreFilter) {

        genreFilter.addEventListener(
            "change",
            filterMovies
        );

    }

}


function displayTopMovies() {

    const container =
        document.getElementById("topMovies");

    if (!container) return;


    const sorted =
        [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);


    container.innerHTML =
        sorted.map((movie, index) => `

            <a
                href="movie.html?id=${movie.id}"
                class="top-movie"
            >

                <div class="top-number">
                    ${index + 1}
                </div>

                <img
                    src="${movie.poster}"
                    alt="${movie.title}"
                >

                <div class="top-info">

                    <h3>
                        ${movie.title}
                    </h3>

                    <p>
                        ${movie.year} • ${movie.runtime}
                    </p>

                </div>

                <div class="top-rating">
                    ⭐ ${movie.rating}
                </div>

            </a>

        `).join("");

}


function displayMovieDetails() {

    const container =
        document.getElementById("movieDetails");

    if (!container) return;


    const params =
        new URLSearchParams(window.location.search);

    const id =
        params.get("id");


    const movie =
        movies.find(item => item.id === id);


    if (!movie) {

        container.innerHTML = `

            <div class="empty-message">

                <h2>Movie not found</h2>

                <a
                    href="movies.html"
                    class="main-button"
                >
                    Back to Movies
                </a>

            </div>

        `;

        return;

    }


    container.innerHTML = `

        <div class="movie-page">

            <div class="movie-page-poster">

                <img
                    src="${movie.poster}"
                    alt="${movie.title}"
                >

            </div>


            <div class="movie-page-info">

                <span class="movie-badge">
                    ${movie.genre[0].toUpperCase()}
                </span>

                <h1>
                    ${movie.title}
                </h1>


                <div class="movie-meta">

                    <span>
                        ${movie.year}
                    </span>

                    <span>•</span>

                    <span>
                        ${movie.runtime}
                    </span>

                </div>


                <div class="rating">
                    ⭐ ${movie.rating} / 10
                </div>


                <p>
                    ${movie.description}
                </p>


                <div class="movie-buttons">

                    <button
                        class="favorite-button"
                        onclick="toggleFavorite('${movie.id}')"
                    >
                        ❤️ Add to Favorites
                    </button>

                    <a
                        class="main-button"
                        href="https://www.youtube.com/watch?v=${movie.trailer}"
                        target="_blank"
                    >
                        ▶ Watch Trailer
                    </a>

                </div>

            </div>

        </div>

    `;


    displayRelatedMovies(movie.id);

}


function displayRelatedMovies(currentId) {

    const container =
        document.getElementById("relatedMovies");

    if (!container) return;


    const related =
        movies
        .filter(movie => movie.id !== currentId)
        .slice(0, 5);


    container.innerHTML =
        related.map(createMovieCard).join("");

}


function getFavorites() {

    return JSON.parse(
        localStorage.getItem("movieFavorites")
    ) || [];

}


function toggleFavorite(id) {

    let favorites =
        getFavorites();


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favoriteId => favoriteId !== id
            );

    } else {

        favorites.push(id);

    }


    localStorage.setItem(
        "movieFavorites",
        JSON.stringify(favorites)
    );


    displayFavorites();

}


function displayFavorites() {

    const container =
        document.getElementById("favoriteMovies");

    if (!container) return;


    const favoriteIds =
        getFavorites();


    const favoriteMovies =
        movies.filter(movie =>
            favoriteIds.includes(movie.id)
        );


    if (favoriteMovies.length === 0) {

        container.innerHTML = `

            <div class="empty-message">

                <h2>Your favorites are empty ❤️</h2>

                <p>
                    Add movies to see them here.
                </p>

                <br>

                <a
                    href="movies.html"
                    class="main-button"
                >
                    Browse Movies
                </a>

            </div>

        `;

        return;

    }


    container.innerHTML =
        favoriteMovies
        .map(createMovieCard)
        .join("");

}


function setupTheme() {

    const button =
        document.getElementById("themeButton");

    if (!button) return;


    const savedTheme =
        localStorage.getItem("movieTheme");


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

        button.textContent = "☀️";

    }


    button.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light-mode"
            );


            const light =
                document.body.classList.contains(
                    "light-mode"
                );


            localStorage.setItem(
                "movieTheme",
                light ? "light" : "dark"
            );


            button.textContent =
                light ? "☀️" : "🌙";

        }
    );

}