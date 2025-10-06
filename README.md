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

## Packaging for iOS with Capacitor

You can package this PWA as an iOS app using Capacitor:

1. **Install Capacitor CLI (if not already):**
   ```sh
   npm install --save @capacitor/core @capacitor/cli
   ```
2. **Add iOS platform:**
   ```sh
   npx cap add ios
   ```
3. **Build your web app:**
   ```sh
   npm run build
   ```
4. **Copy the build output to the iOS project:**
   ```sh
   npx cap copy ios
   ```
5. **Open the iOS project in Xcode:**
   ```sh
   npx cap open ios
   ```
6. **Configure, sign, and publish your app to the App Store using Xcode.**

For more info, see the [Capacitor documentation](https://capacitorjs.com/docs/getting-started).

## iOS Permissions and Info.plist

When using native iOS features (like Camera, Geolocation, Notifications, etc.) with Capacitor, you must declare permissions in your iOS app's `Info.plist` file. This file is located in your iOS project at:

```
ios/App/App/Info.plist
```

Add the following keys for common permissions:

```xml
<!-- Permissions -->
<key>NSCameraUsageDescription</key>
<string>This app needs access to the camera.</string>

<key>NSPhotoLibraryUsageDescription</key>
<string>This app needs access to your photo library.</string>

<key>NSPhotoLibraryAddUsageDescription</key>
<string>This app needs permission to save photos to your library.</string>

<key>NSLocationWhenInUseUsageDescription</key>
<string>This app needs your location to provide location-based features.</string>

<key>NSUserNotificationUsageDescription</key>
<string>This app needs permission to send notifications.</string>
```

**How to add:**

1. Open your iOS project in Xcode (`npx cap open ios`).
2. In the Project Navigator, find `App/App/Info.plist`.
3. Add the required keys and descriptions for each feature your app uses.
4. Save and rebuild your app.

For more info, see the [Apple documentation](https://developer.apple.com/documentation/bundleresources/information_property_list) and [Capacitor iOS guide](https://capacitorjs.com/docs/v5/ios).

## Why assetlinks.json is needed

When publishing your PWA as an Android app using Bubblewrap (Trusted Web Activity), you must host a file called `assetlinks.json` at `/.well-known/assetlinks.json` on your website. This file is required by Android to verify the relationship between your website and your app.

**Purpose:**

- Allows your Android app to open your PWA in full-screen mode without browser UI.
- Enables deep linking and app-to-website trust (Digital Asset Links).
- Required for your app to pass Play Store review and work as a Trusted Web Activity.

**How it works:**

- The file contains a JSON object with your app's package name and signing key.
- Android checks this file to confirm your app is authorized to show your website in a TWA.

**Reference:**

- [Digital Asset Links documentation](https://developer.android.com/trusted-web-activity/quick-start#digital-asset-links)
- [Bubblewrap assetlinks.json guide](https://github.com/GoogleChromeLabs/bubblewrap/blob/main/docs/asset-links.md)

## License

MIT
