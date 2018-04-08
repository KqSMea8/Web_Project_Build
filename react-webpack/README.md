# Build React

Use webpack build react

## Directory Layout

```sh
├── README.md
├── build
│   ├── webpack.dev.config.js
│   └── webpack.production.config.js
├── dist
│   ├── index.html
│   ├── main.chunk.8b251a0bf1634d939190.js
│   ├── runtime~main.3a4b89dce385e991eef0.js
│   ├── styles.c6cb68fe7d1f1cf2a382.css
│   └── vendors~main.chunk.c83bd548a5f2ca258340.js
├── package.json
├── server.js
├── src
│   ├── App.js
│   ├── components
│   │   ├── Button
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Input
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── StyleComponent
│   │   │   └── index.js
│   │   └── UseJquery
│   │       └── index.js
│   ├── index.html
│   ├── main.js
│   └── styles.css
├── template
│   └── index.template.html
└── yarn.lock
```

## Intro

use latest webpack@v4 build SPA react app

```sh
$ yarn dev
```

open `http://localhost:4200/src/` show your app

## Feature

[ ] Add redux
[ ] Add react-router