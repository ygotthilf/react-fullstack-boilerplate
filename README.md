A ECMAScript 6 boilerplate with the following stack and tools :
- React : view components
- React-router : views router
- Alt : Flux architecture
- Koa : Web framework for Node.js
- Browserify : module for browser
- Babel : ECMAScript 6 transpiler
- Gulp : task runner
- BrowserSync : livereload tool
- JSCS : JavaScript code style checker
- ESLint : JavaScript linter 

Getting Started
==
- Clone the projet
- `cd react-fullstack-boilerplate'
- `npm install`
- `bower install` 
- `gulp serve`
- browse `http://localhost:4000`
Directory Layout
==

- `client`/ : front-end source code
  - `actions/` : Flux actions
  - `api/` : connectors to back-end endpoints 
  - `assets/` : static files (image, font, ...)
  - `components/` : React components and styles
  - `core/` :  Core component (routing, Flux instance, ...)
  - `scss/`: Global stylesheets
  - `stores/`: Flux stores
  - `index.html`: startup page
  - `index.js` : startup script
  - `index.scss` : startup stylesheet 
- `server/` : back-end source code
  - `api/` : REST API 
  - `auth/` : authentication flow
  - `config/` : server configuration
  - `index.js` : server startup
- `gulp/` : Gulp configuration
- ` .bowerrc` : Bower tool configuration
- `.jscsrc` : JSCS configuration
- `.eslintrc` : ESLint configuration
- `bower.json` : Bower project configuration 
- `gulpfile.js` : Gulp startup
- `package.json` : list of 3rd party libraries and utilities

Todo
==
- Improve doc
- Build task
- Implement test
- Authentication





