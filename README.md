# Build Web Project
In this repository , I put the build web project file.

- first folder is gulp only
- secound folder is webpack only (In development)
- third folder is gulp+webpack (In development)

The construction of each folder can be used alone.

## Directory Layout

```c
-------------------project
|   |
|   |--------------dist (The folder to generate packaging)
|   |   |
|   |   |----------css
|   |   |   |
|   |   |   |------index-9dcc24fe2e.css
|   |   |
|   |   |----------js
|   |   |   |
|   |   |   |------index-9dcc24fe2e.js
|   |   |----------index.html 
|   |
|   |--------------src
|   |   |
|   |   |----------scss
|   |   |   |------index.scss
|   |   |
|   |   |----------js
|   |   |   |
|   |   |   |------index.js
|   |   |
|   |   |----------index.html
|   |--------------gulpfile.js
|   |--------------package.json
```

## Install

```c
$ npm install
```

## Usage

```c
$ npm run dev

$ npm run build
```