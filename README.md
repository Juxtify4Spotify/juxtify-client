# Juxtify

Juxtify is an alternative interface for Spotify, based off [Juxtopposed's YouTube Video](https://www.youtube.com/watch?v=suhEIUapSJQ) redesigning the platform.

This is a heavy W.I.P. and is not yet ready for use. Juxtify is built with [React](https://react.dev/) and [Typescript](https://www.typescriptlang.org/) on top of [Tauri](https://tauri.app/) for multiplatform compatibility.

## How to install

Follow these instructions to setup your development environment:

```bash
git clone https://github.com/Juxtify4Spotify/juxtify
cd juxtify
npm install
```

## How to run locally

### Browser

To run it in the browser run the following command:

```bash
npm run dev
```

### Natively

To run it as a native app you need to first install [rust](https://www.rust-lang.org/tools/install) then run the following commands:

```bash
npm run tauri init
```

Press `Enter` thruogh all of the questions.
After doing this once you won't need to do it again.

Run the next command to start the application:

```bash
npm run tauri dev
```
