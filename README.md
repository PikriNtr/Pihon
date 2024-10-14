# Pihon

Pihon is a cross-platform Manhwa/Manga reader application built using JavaScript and a bit of Ruby, utilizing the powerful React Native framework called [ReNative](https://renative.org/). This project is capable of deploying to Android, iOS, Web, and Windows platforms, providing a seamless reading experience across multiple devices.

## Features

- Cross-platform support (Android, iOS, Web, Windows)
- Smooth Manhwa/Manga reading experience with pagination, zoom, and bookmarks
- Built primarily in JavaScript with some Ruby components
- Built with ReNative, simplifying multi-platform deployment
- User-friendly interface designed for optimal reading on mobile and desktop

## Requirements

- Node.js (>=14.x)
- ReNative CLI
- Ruby (for specific backend or script functionality)
- Android Studio / Xcode (for Android and iOS development)
- Windows SDK (for Windows deployment)

## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/pihon.git
    cd pihon
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Install ReNative CLI:

    ```bash
    npm install -g rnv
    ```

4. Set up your platforms:

    ```bash
    rnv platform configure
    ```

### Running the Project

#### Android:

```bash
rnv run -p android
```

#### IOS:

```bash
rnv run -p ios
```

#### Web:

```bash
rnv run -p web
```

#### Windows:

```bash
rnv run -p windows
```

## Project Structure

- `src/` - Main application source code (JS and Ruby)
- `appConfigs/` - Platform-specific configurations for ReNative
- `platformAssets/` - Static assets specific to each platform

## Contributing

We welcome contributions to enhance the functionality or add new features to Pihon. Feel free to submit issues and pull requests!

## License

This project is licensed under the MIT License.



