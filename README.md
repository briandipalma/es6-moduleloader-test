Purpose
=======

Repo that shows how to integrate [es6-module-loader](https://github.com/ModuleLoader/es6-module-loader) and [traceur](https://github.com/google/traceur-compiler).
This allows writing code in ES6, including modules, with the ES6 code being transpiled to ES5 in the browser on the fly.

Usage
==========

Clone the repo.

To set-up `npm i`

To start `npm start`

This should launch a browser. Bringing up the browser console will show console output from a few different ES6 classes and modules. Going to the sources tab shows the loaded code. With source map support enabled in your browser you should see the original ES6 source code otherwise you will see the compiled output.
