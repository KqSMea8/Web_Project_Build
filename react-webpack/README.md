# Build React

Use webpack build react

## Directory Layout

```sh
├── README.md
├── build
│   ├── webpack.base.config.js
│   ├── webpack.dev.config.js
│   └── webpack.production.config.js
├── package.json
├── src
│   ├── App.js
│   ├── actions
│   │   └── demo.js
│   ├── commons
│   │   └── AsyncComponent.js
│   ├── components
│   │   ├── Button
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Input
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── StyleComponent
│   │   │   └── index.js
│   │   └── UseJquery
│   │       └── index.js
│   ├── index.html
│   ├── main.js
│   ├── reducers
│   │   ├── demo.js
│   │   └── index.js
│   ├── route
│   ├── styles.css
│   └── views
│       ├── Content
│       │   ├── About
│       │   │   └── index.js
│       │   ├── Home
│       │   │   └── index.js
│       │   ├── Topics
│       │   │   └── index.js
│       │   └── router.js
│       └── RouterLink
│           └── index.js
└── yarn.lock
```

## Intro

use latest webpack@v4 build SPA react app

```sh
$ yarn dev
```

open `http://localhost:4200/src/` show your app

## Feature

- [x] Add redux
- [x] Add react-router
