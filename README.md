# Jigsaw Studio PWA

A full-featured puzzle game in web app format.

## [Demo](https://rfbkak37y3kiy.github.io/game-pazzle/)


## Implemented Features

- Responsive interface for mobile, tablet, and desktop
- Canvas-based puzzle engine with curved pieces
- Dragging, rotation, auto-solve, and shuffle
- Pause and resume
- Progress saving between sessions (localStorage)
- Local records by difficulty level
- Daily challenge
- Export of a screenshot of the current game
- Settings screen (RU/EN language, vibration, compact UI)
- Achievements and rewards system (XP)
- PWA: manifest + service worker + offline fallback
- Installable app on a device (the button appears when supported by the browser)
- PNG icons for Android/iOS installation compatibility

## Structure

- `index.html` — application interface
- `styles/main.css` — styles and responsive layout
- `scripts/app.js` — game engine and app logic
- `manifest.webmanifest` — PWA metadata
- `sw.js` — caching and offline mode
- `offline.html` — offline page

## Run Locally

The PWA works correctly only over HTTP/HTTPS, not via file://

Node.js option:

```bash
npx serve .
```

After starting, open the generated local URL in your browser.

## PWA Icons

The project already includes:

- `assets/icons/icon-192.png`
- `assets/icons/icon-512.png`
- `assets/icons/maskable-512.png`
- SVG versions for fallback
