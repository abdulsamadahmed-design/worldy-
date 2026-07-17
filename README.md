# Wordly Dictionary SPA

Wordly is a Single Page Application (SPA) dictionary built with HTML, CSS, and JavaScript. It lets you search for any English word and view its definition, pronunciation, examples, and synonyms using a public dictionary API. You can also save your favorite words so they stay available even after refreshing the page.

The app never reloads the page — every search, favorite, and theme change updates the content directly through JavaScript.

## Features

- Word search
- Definitions and parts of speech
- Pronunciation text
- Audio pronunciation (when available)
- Example sentences (when available)
- Synonyms (when available)
- Favorites using localStorage (save, remove, and persist after refresh)
- Error handling for empty input, words not found, and failed requests
- Responsive design for desktop and mobile
- Light/dark theme toggle

## Technologies Used

- HTML
- CSS
- JavaScript
- Free Dictionary API
- localStorage

## Project Structure

```
wordly/
index.html
css/
 style.css
 js/
index.js
assets/
  (screenshots)
README.md
```

## How to Run the Project

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a browser, or right-click it in VS Code and choose "Open with Live Server."
4. Enter a word in the search field and click Search.

## API Information

Wordly uses the [Free Dictionary API](https://dictionaryapi.dev/):

```
https://api.dictionaryapi.dev/api/v2/entries/en/{word}
```

The app sends the searched word to this endpoint and displays whatever the API returns: meanings, pronunciation, audio, examples, synonyms, and source links, when they exist. Not every word has all of these — the app only displays a section if the data for it is actually present.

## Usage

1. Enter a word in the search field.
2. Click Search.
3. View the definition, pronunciation, examples, and synonyms.
4. Play the audio pronunciation, if available.
5. Click "Save Word" to add it to your Favorites, or "Saved" if it's already there.
6. Click a saved word in the Favorites list to search it again.
7. Click "Remove" to delete a word from Favorites.

## Screenshots

_(Add at least one screenshot of the completed app here, saved inside the `assets` folder, e.g.:)_

```markdown
![Wordly search results]()./assetsassets/image.png)
```

## Known Limitations

- Some words do not have audio, examples, or synonyms available from the API.
- The app currently supports English words only.

## Live Demo

_(Add your deployed link here, if hosted)_

## Author

Built by Abdulsamad as a learning project.
GitHub: _(https://github.com/abdulsamadahmed-design)_

## License

This project is for educational purposes.
