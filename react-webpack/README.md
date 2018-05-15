# Build React

Use webpack v4 build react

## Directory Layout

```sh
├── README.md
├── build
│   ├── webpack.base.config.js
│   ├── webpack.dev.config.js
│   └── webpack.production.config.js
├── package.json
├── postcss.config.js
├── src
│   ├── App.js
│   ├── components
│   │   └── Loading
│   │       └── index.js
│   ├── index.html
│   ├── main.js
│   ├── redux
│   │   ├── actions
│   │   │   └── demo.js
│   │   ├── middleware
│   │   │   └── index.js
│   │   ├── reducers
│   │   │   ├── demo.js
│   │   │   └── index.js
│   │   └── store
│   │       └── index.js
│   ├── static
│   │   └── css
│   │       └── normalize.css
│   ├── styles.scss
│   └── views
│       ├── Content
│       │   ├── About
│       │   │   └── index.js
│       │   ├── Home
│       │   │   └── index.js
│       │   ├── Topics
│       │   │   └── index.js
│       │   └── router.js
│       └── RouterLink
│           └── index.js
└── yarn.lock
```

## Introduction

React SPA Project build, it use webpack v4, react-router v4 and redux . use webpack webpack-dev-server and react hot reload realize hot reload in development and code splitting in production

## Use

```sh
$ yarn
# open development
$ yarn dev
# build
$ yarn build
```

open `http://localhost:4200` show your app

> note: you can change PORT in package.json `"dev": "cross-env NODE_ENV=development PORT=4200 node build/webpack.dev.config.js"`

## Feature

- [x] Add redux
- [x] Add react-router
- [x] Add sass and postCSS
- [x] react-hot-loader not work in react-routerv4
- [x] Separation hot reload from production (dev and production all have hot reload now)
- [ ] Use ES6 in webpack config
- [ ] Add open browser default
- [ ] Add chunksName after code splitting (default name is 0, 1 ,2 ...)
- [ ] Use plugin optimizing webpack
