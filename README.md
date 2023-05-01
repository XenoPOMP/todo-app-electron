# electron-vite-template

<a href="https://github.com/XenoPOMP/electron-vite-template/releases/"><img src="https://img.shields.io/github/release/XenoPOMP/electron-vite-template?include_prereleases=&sort=semver&color=blue" alt="GitHub release"></a>
<a href="#license"><img src="https://img.shields.io/badge/License-MIT-8CBA04" alt="License"></a>

This repo is based on [electron-vite-react](https://github.com/electron-vite/electron-vite-react).

## 👀 Overview
📦 Ready out of the box  
🎯 Based on the official [template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts), project structure will be familiar to you  
🌱 Easily extendable and customizable

## 🛫 Quick start

### Run development

```sh
yarn dev
```

### Build app

```sh
yarn build
```

## 📂 Directory structure

Familiar React application structure, just with `electron` folder on the top :wink:  
*Files in this folder will be separated from your React application and built into `dist-electron`*

```tree
├── electron                                 Electron-related code
│   ├── main                                 Main-process source code
│   └── preload                              Preload-scripts source code
│
├── release                                  Generated after production build, contains executables
│   └── {version}
│       ├── {os}-{os_arch}                   Contains unpacked application executable
│       └── {app_name}_{version}.{ext}       Installer for the application
│
├── public                                   Static assets
└── src                                      Renderer source code, your React application
```