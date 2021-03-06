<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/den/master/about/identity/den-logo.png" height="200px">
</p>



<p align="center">
    <img src="https://img.shields.io/badge/version-0.0.1-blue.svg?colorB=000000&style=for-the-badge" alt="Version">
    <a href="https://github.com/plurid/den/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg?colorB=000000&style=for-the-badge" alt="License">
    </a>
</p>



<h1 align="center">
    denium
</h1>

[Plurid](https://github.com/plurid/plurid)-based web browser implemented on Electron/Chromium.



+ [Install](#install)
+ [Build](#build)



## Install

Download system-specific application from [den.plurid.com/install](https://den.plurid.com/install).



## Screenshots

<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/den/master/implementations/denium/about/screenshots/ss.png" height="500px">
</p>



## Build

In the Terminal application, clone the repository

    git clone https://github.com/plurid/den.git

change the directory

    cd den/

install the dependencies

    yarn install

run the build process to aggregate the files from `./source/` to `./build/`

    yarn build

or

    yarn develop

run the electron build process

    yarn electron


For a continuous build process

    yarn watch


To package the application run the command specific to the operating system

    yarn electron.linux
    yarn electron.mac
    yarn electron.windows
