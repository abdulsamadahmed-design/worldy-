
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const results = document.getElementById("results");
const error = document.getElementById("error");
const themeBtn = document.getElementById("theme-btn");
const favoritesList = document.getElementById("favorites-list");




function getFavorites() {
    const stored = localStorage.getItem("favorites");
    if (!stored) {
        return [];
    }
    return JSON.parse(stored);
}

function saveFavorite(word) {
    const favorites = getFavorites();
    const alreadySaved = favorites.some(fav => fav.toLowerCase() === word.toLowerCase());
    if (alreadySaved) {
        return;
    }
    favorites.push(word);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function removeFavorite(word) {
    const favorites = getFavorites();
    const updated = favorites.filter(fav => fav.toLowerCase() !== word.toLowerCase());
    localStorage.setItem("favorites", JSON.stringify(updated));
}



function displayFavorites() {
    favoritesList.innerHTML = "";
    const favorites = getFavorites();
    for (const fav of favorites) {
        const li = document.createElement("li");
        li.textContent = fav;

        li.addEventListener("click", function() {
            input.value = fav;
            fetchWordData(fav);
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.setAttribute("aria-label", `Remove ${fav} from favorites`);
        removeBtn.addEventListener("click", function() {
            removeFavorite(fav);
            displayFavorites();
        });

        li.appendChild(removeBtn);
        favoritesList.appendChild(li);
    }
}


themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light";
    } else {
        themeBtn.textContent = "Dark";
    }
});

function displayResults(data) {
    results.innerHTML = "";
    const word = data[0];

    const clearBtn = document.createElement("button");
    clearBtn.textContent = "clear";
    clearBtn.addEventListener("click", function() {
        results.innerHTML = "";
        input.value = "";
        error.textContent = "";
    });
    results.appendChild(clearBtn)
    
    const h2 = document.createElement("h2");
    h2.textContent = word.word;
    results.appendChild(h2);

    const savedBtn = document.createElement("button");

    const favorites = getFavorites();
    const isSaved = favorites.some(fav => fav.toLowerCase() === word.word.toLowerCase());
    if (isSaved) {
        savedBtn.textContent = "Saved";
        savedBtn.classList.add("saved");
        savedBtn.setAttribute("aria-label", `${word.word} is already saved to favorites`);
    }  else {
         savedBtn.textContent = "Save Word";
    }
results.appendChild(savedBtn);

savedBtn.addEventListener("click", function () {
    const word = results.querySelector("h2").textContent;
    saveFavorite(word);
    displayFavorites();
    savedBtn.textContent = "Saved";
    savedBtn.classList.add("saved");
    savedBtn.setAttribute("aria-label", `${word} is already saved to favorites`);
});  

    const phonetics = word.phonetics.find(p => p.audio);
    if (phonetics) {
        const audio = new Audio(phonetics.audio);
        const playButton = document.createElement("button");
        playButton.textContent = "Play Pronunciation";
        playButton.setAttribute("aria-label", `Play pronunciation of ${word.word}`);
        playButton.addEventListener("click", () => {audio.play();});
        results.appendChild(playButton);
    }

    for (const meaning of word.meanings) {
        const p = document.createElement("p");
        p.textContent = meaning.definitions[0].definition;
        results.appendChild(p);

    if (meaning.synonyms && meaning.synonyms.length > 0) {
        const synonymsp = document.createElement("p");
        synonymsp.textContent = "Synonyms: " + meaning.synonyms.join(", ");
        results.appendChild(synonymsp); 
     }
    }
}


function showError(message) {
    error.textContent = message;
}

async function fetchWordData(word) {
    try {
        error.textContent = "";
        results.innerHTML  = "loading...";
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
        if (!response.ok) {
            showError("Word not found.");
            return;
        }
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        showError("Word not found.");
    }
}



 form.addEventListener("submit", function(event) {
    event.preventDefault();
    const word = input.value.trim();
    if (!word) {
        showError("Please enter a word.");
        return;
    }
    fetchWordData(word);
});

displayFavorites();


 
 
