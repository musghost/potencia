# Potencia Sitio
Informative website using ReactJS

## Quick Start

1. `npm install`
2. `npm run serve` to develop (open your browser at [http://localhost:3000/](http://localhost:3000/))
3. `npm run build` to create a distribution build

## Requirements

* [node.js](https://nodejs.org) v6.2.x (LTS)
* [gulp.js](http://gulpjs.com) v4+

## Sass Code

* Document your code
* Indent in all your code
* Consider if your class could be used as a global or if it will only be used in a section
* Don't use global selectors for elements of base templates
* Class names must be descriptive
* Documentation for css is necessary in this format:
* Use the available tools
* Don't repeat styles

~~~scss
  /**
  * Description
  * Justification if override another style.
  * Justification if have an !important.
  */
  .your-class {
    background: #000 ; /*1*/
  }
~~~

## Javascript and ES6 code

* Document your code
* Indent in all your code
* Use the available tools
* Don't repeat functionality
* Use global components
* The js code must be clean of style code embedded
* Use class like selectors

~~~javascript
    /*
    * Description
    * Justification if override another function.
    * @param name description
    * @return type
    */
~~~

## Contributing

See [CONTRIBUTING.md](./.github/CONTRIBUTING.md).
