# Contributing

You are welcome to contribute some code or to help translate this project! If you want to do so, here you will find some useful information to get you started.

## Help translate this application

If you would like to volunteer to become a M³ language moderator for a language you speak, please [sign in to Crowdin](https://crowdin.com/project/meeting-media-manager) using your GitHub account, and let us know by [creating a new discussion](https://github.com/sircharlo/meeting-media-manager/discussions/new?category=translations) in the **Translations** category.

As language moderator, you will get notified of changes to the English original strings. You will also have access to an easy-to-use interface to review existing and untranslated strings in your language, and submit new translations.

## Help maintain this application

In order to help maintain this application, the following information will help you get started. If anything is unclear or you simply need more information, please feel free to make contact through [a discussion thread](https://github.com/sircharlo/meeting-media-manager/discussions).

### Developer Tools

- [Git](https://git-scm.com/) ^2.45.2
- [Node.js](https://nodejs.org/en/) ^20 || ^22 || ^24
- [Yarn](https://yarnpkg.com/) ^4.5.1
- [VS Code](https://code.visualstudio.com/) ^1.94.2
  - VS Code extensions: see [extensions.json](./.vscode/extensions.json)

### Getting Started

To get started, you first have to install Git, Node.js and VS Code (see their respective documentation for more information). Once you have installed those, you can easily install Yarn by executing the following commands:

```bash
# Enable corepack feature of Node.js (includes yarn)
corepack enable

# Update yarn to the latest stable version
yarn set version stable
```

Once you have done that, you are ready to contribute! Fork this repository, clone it, and when you have something to contribute, you can create a Pull Request on GitHub.

### Build Setup

The following commands are used during the development of the application to test and build it:

```bash
# Install dependencies
yarn install

# Rebuild native modules
yarn electron-rebuild

# Generate icon font
yarn icons

# Serve app with hot reload for development
yarn dev

# Build electron application for production
yarn build

# Build electron application for production with debugging enabled
yarn build:debug

# Format all files
yarn format

# Lint all JS/TS/Vue files
yarn lint

# Check for type errors
yarn type-check

# Run tests
yarn test
```

### Build Tools

This project is built with [Quasar](https://quasar.dev/). Documentation about the directory structure can be found [here](https://quasar.dev/quasar-cli-webpack/directory-structure).

This project uses [Electron.js](https://www.electronjs.org/) to create the desktop application. The Electron.js framework is a cross-platform framework for building native applications.

The UI process is made using [Vue.js](https://vuejs.org/). Vue.js is framework for building web applications.

The UI components are made from [Quasar](https://quasar.dev/docs) components.

### Release Procedure

To release a new version of the application, a draft release must be created on GitHub. Then, the [package.json](package.json) version must be updated to the desired version and the changes committed with the message `chore(release): vx.x.x` (e.g. `chore(release): v26.3.1`). Afterwards, the build/release workflow will be executed automatically and will add the necessary executable files to the release draft. After adding a description of the release (features, bug fixes, etc.), it can now be published.

### Contribute to the documentation site

The documentation website lives in the `docs` folder. It is built with [VitePress](https://vitepress.dev/). Information about the directory structure can be found [here](https://vitepress.dev/guide/getting-started#file-structure). To work on the documentation site, you can use the following commands:

```bash
# Install dependencies
yarn install

# Serve website locally with hot reload for development
yarn docs:dev

# Build the website for production
yarn docs:build

# Preview the production build locally
yarn docs:preview

# Lint all JS/TS/Vue files
yarn lint

# Format all files
yarn format
```
