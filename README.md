# Pop It

A two-player Pop It strategy game built with React and Vite.

## How to play

1. Enter player names, the first player plays first
2. Pop any amount of buttons; once you pop one, you can only pop buttons in the same row
3. Your turn will be indicated with a grey background
4. The last one to pop will lose

## Getting started

Requires Node.js 22.22+ or 24.15+.

```bash
npm install
npm start          # dev server at http://localhost:3000
npm test           # run the test suite once
npm run test:watch # run tests in watch mode
npm run build      # production build in dist/
npm run preview    # preview the production build
```

## Deployment

```bash
npm run deploy
```

This builds the app and publishes `dist/` to the `gh-pages` branch.

## Styling

`src/css/custom-bootstrap.css` is generated from
`src/scss/custom-bootstrap.scss`. After editing the SCSS, regenerate the CSS
with:

```bash
npm run build:css
```
