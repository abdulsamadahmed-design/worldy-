# worldy-
Wordly is a simple dictionary web app I built using HTML, CSS, and JavaScript. You can search for any English word and get its meaning, synonyms, and pronunciation. You can also save your favorite words so you can find them again later, even after closing the browser.

I built this project to practice working with APIs, DOM manipulation, and localStorage in vanilla JavaScript (no frameworks).

## Live Demo

_(Add your deployed link here if you host it, e.g. on GitHub Pages or Netlify)_

## Features

- Search any word and get its definition from the [Free Dictionary API](https://dictionaryapi.dev/)
- See definitions and synonyms for the word you searched
- Play pronunciation audio (when available)
- Save words to Favorites — favorites are stored in your browser's `localStorage`, so they stay saved even after you refresh or close the page
- Remove a word from your favorites list
- Click a saved word to instantly search it again
- Save button changes to "Saved" once a word has been added to favorites
- Loading indicator while the app is fetching data
- Dark mode toggle
- Clear button to reset the results
- Responsive design that works on different screen sizes
- Error handling for words that aren't found and for empty search input

## How to Run It

This project doesn't need any installation or build tools — it's just plain HTML, CSS, and JavaScript.

1. Download or clone this repository
2. Open the `index.html` file in your browser

   OR

3. If you're using VS Code, right-click `index.html` and choose **"Open with Live Server"** (recommended, since it auto-refreshes when you make changes)

## Project Structure

# Main HTML file
# All styling, including dark mode
# All app logic (search, favorites, dark mode, etc.)
#README.md


## Technologies Used

- **HTML5** — page structure
- **CSS3** — styling, dark mode, responsive layout
- **JavaScript (Vanilla)** — DOM manipulation, event handling, fetch API
- **[Free Dictionary API](https://dictionaryapi.dev/)** — word definitions, synonyms, and audio
- **localStorage** — saving favorite words permanently in the browser

## What I Learned

While building this project, I practiced:
- Fetching data from a real API using `fetch()` and `async/await`
- Handling errors when a word isn't found or the request fails
- Reading from and writing to `localStorage` to make data persist
- Creating and updating elements dynamically with JavaScript
- Debugging real bugs by reading error messages in the browser console

## Possible Future Improvements

- Add accessibility labels (aria-labels) for screen reader support
- Add a search history feature
- Support multiple dictionary languages
- Add unit tests

## Author

Built by Abdulsamad as a personal JavaScript learning project.
