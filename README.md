# Capacitor PWA

A Progressive Web App (PWA) demo using Capacitor plugins and Vite.

## Features

- Device info
- Geolocation
- Camera
- Clipboard
- Local notifications

## Structure

- `src/` — Source files (HTML, JS, manifest)
- `dist/` — Production build output
- `service-worker.js` — PWA offline support
- `capacitor.config.ts` — Capacitor configuration

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Getting Started

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build: `npm run build`

## Packaging for Android with Bubblewrap

You can package this PWA as an Android app and publish it to Google Play using Bubblewrap:

1. **Install Bubblewrap CLI globally:**
   ```sh
   npm install -g @bubblewrap/cli
   ```
2. **Initialize Bubblewrap in your project:**
   ```sh
   bubblewrap init --manifest https://YOUR_DEPLOYED_DOMAIN/manifest.json
   ```
   Replace `YOUR_DEPLOYED_DOMAIN` with your actual deployed PWA URL.
3. **Answer the prompts:** Bubblewrap will ask for app name, package ID, launcher icon, etc.
4. **Build the Android project:**
   ```sh
   bubblewrap build
   ```
   This generates an Android project and APK in a new folder.
5. **Open the project in Android Studio:**
   You can sign and publish your app to Google Play from there.

For more info, see the [Bubblewrap documentation](https://github.com/GoogleChromeLabs/bubblewrap).

## License

MIT
