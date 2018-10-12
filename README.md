# react-boilerplate

This repo is intended to be a reference for standing up a minimal react project
from scratch.

## :electric_plug: Prerequisites

You will need these packages installed globally:

  - [Yarn](https://yarnpkg.com/lang/en/docs/install)
  - [editorconfig-cli](https://www.npmjs.com/package/editorconfig-cli) (optional)

## :octocat: Getting Started

Create your project directory and initialize.

```bash
mkdir example-project
cd example-project
yarn init

# Example input:
question name (example-project):
question version (1.0.0):
question description: A brief description about your project
question entry point (index.js):
question repository url:
question author:
question license (MIT):
question private: true
```

Remove `"entry"` from `package.json` and ensure `"private": true` is set.


Initialize editorconfig. This step is optional, but highly recommended.

```bash
ec init

# Recommended inputs:
? charset? (Use arrow keys)
❯ utf-8

? indent style?
❯ space

? indent size? (2)

? end of line? (Use arrow keys)
❯ lf

? trim trailing whitespace? (Y/n)
? insert final newline? (Y/n)
```


Add linting to the project. This will ensure our code conforms to specific standards.

```bash
yarn add -D eslint
npx eslint --init

# Recommended inputs:
? How would you like to configure ESLint?
❯ Use a popular style guide

? Which style guide do you want to follow? (Use arrow keys)
❯ Airbnb (https://github.com/airbnb/javascript)

? Do you use React? (y/N) y

? What format do you want your config file to be in?
❯ YAML
```


Edit your .eslintrc.yml config:

```YAML
extends: airbnb
env:
  browser: true
rules:
  comma-dangle: [2, "never"]
  semi:         [2, "never"]
```

Add our base dependencies, at a minimum, we require react and react-dom (prop-types is optional but recommended):

```bash
yarn add react react-dom prop-types
```

Add webpack and babel to bundle and transpile our source code, create the empty configs:
```bash
yarn add -D webpack webpack-cli webpack-dev-server @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-loader
touch webpack.config.js
touch .babelrc
```

Edit your `webpack.config.js` file:
```javascript
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path:       __dirname + '/dist',
    publicPath: '/',
    filename:   'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
}
```

Edit your `.babelrc` file:
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}
```

Add the dev-server and build scripts to your `package.json` file:
```json
"scripts": {
  "build": "npx webpack",
  "start": "npx webpack-dev-server --mode development"
}
```

Create the base source files:
```bash
mkdir dist src
touch dist/index.html
touch src/index.js
touch src/App.jsx
```

Edit `dist/index.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>React Boilerplate</title>
</head>
<body>
  <div id="react-root"></div>
  <script src="/bundle.js"></script>
</body>
</html>
```

Edit `src/index.js`:
```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('react-root')
)
```

Lastly, create a bare component in `src/App.jsx`:
```javascript
import React from 'react'

const App = () => (
  <div>
    Minimal react boilerplate
  </div>
)

export default App
```

Run the webpack dev server, your application should be available at [localhost:8080](http://localhost:8080):
```bash
yarn start
```

Bundle your source code:
```bash
yarn build
# Assets will be available in dist
```
