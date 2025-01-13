# LittleJS Vanilla JS starter

A simple [LittleJS](https://github.com/KilledByAPixel/LittleJS)
starter pack using [Vite](https://vite.dev/).

![LittleJS Logo](https://raw.githubusercontent.com/KilledByAPixel/LittleJS/refs/heads/main/examples/logo.png)

## Installing

Ensure you have [degit](https://github.com/Rich-Harris/degit) installed:
    npm install -g degit

Then enter the following:
    degit eoinmcg/littlejs-vanilla my-game
    cd my-game
    npm install

## Developing

Start the local dev server:
    npm run dev

## Production build

This will create a minified version in dist/ plus a zip of your game:
    npm run build

## File structure

```
.
├── dist
├── node_modules
├── public
│    ├── tiles.png
├── src
│   ├── main.js
├── index.html
├── package.json
```

`dist` the built project is located here including a zip of your game.
`public` tilesheets such as the example tiles.png are placed here.
`src` all code goes here with main.js as the entry point. Feel free as folders and import files.
