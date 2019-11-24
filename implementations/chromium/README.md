<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/den/master/about/identity/den-logo.png" height="200px">
</p>



<p align="center">
    <img src="https://img.shields.io/badge/version-0.1.0-blue.svg?colorB=000000&style=for-the-badge" alt="Version">
    <a href="https://github.com/plurid/den/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg?colorB=000000&style=for-the-badge" alt="License">
    </a>
</p>



<h1 align="center">
    den
</h1>

[Plurid](https://github.com/plurid/plurid)-powered web browser based on Electron/Chromium.



+ [Install](#install)
+ [Build](#build)



## Install

Download system-specific application from [den.plurid.com/install](https://den.plurid.com/install).



## Build

In the Terminal application, clone the repository

    git clone https://github.com/plurid/den.git

change the directory

    cd den/

install the dependencies

    npm install

run the build process to aggregate the files from `./app/` to `./build/`

    npm run build

run the electron build process

    npm run electron


For a continuous build process

    npm run watch


To package the application run the command specific to the operating system

    npm run electron:linux
    npm run electron:mac
    npm run electron:windows
