
<p  align="center">

<a  href="https://github.com/esolidar/toolkit/packages/83065">

<img  src="https://www.esolidar.com/images/login-logo-top.png"  alt="Bootstrap logo"  width="72"  height="72">

</a>

</p>

  

<h3  align="center">eSolidar Toolkit</h3>

  

<p  align="center">

Toolkit for building eSolidar Projects.

<br>

<a  href="https://htmlpreview.github.io/?https://github.com/esolidar/toolkit-styleguide/blob/master/index.html"><strong>eSolidar Styleguide »</strong></a>

<br>

<br>

</p>

  
  

## Table of contents

  

-  [Quick start](#quick-start)
-  [Before installing the package](#before-installing-the-package)
-  [Install package](#install-package)
-  [Using sass](#using-sass)
-  [Documentation](#documentation)
-  [Copyright and license](#copyright-and-license)

  
  

## Quick start

  

Several quick start options are available:

  

- Clone the repo: `git clone https://github.com/esolidar/toolkit.git`

  

### Running toolkit locally

  

1. Run `yarn` to install all dependencies.

2. Run `yarn styleguide` to start the styleguide.

3. Open `http://localhost:6060` in your browser, and voilà.

4.  **Tests**

5. Run `yarn test` to run all components tests.

6. Run `yarn test --coverage` to run tests, coverage analysis and report.

7. Run `yarn test:lint` to run eslint analysis.

8.  **Builds**

9. Run `yarn styleguide:build` to create a production build for the styleguide documentation.

10. Run `yarn build` to create a production build for the package.

11. Run `yarn clean` to delete the build (lib folder) locally.

  
  

## Before installing the package

  

1. Create access token with [Permissions: repo / write:packages / read:packages / delete:packages].

2. Add Token to global **~/.npmrc** file. Open the shell and do **C:>code ~/.npmrc** to open the file, then add the following line: `//npm.pkg.github.com/:_authToken=TOKEN`

3.  **Or** login on the command line: `npm login --registry=https://npm.pkg.github.com`

4. In the same directory as your package.json file, create or edit an **.npmrc** file to include a line specifying GitHub Package Registry URL and the account esolidar: `@esolidar:registry=https://npm.pkg.github.com`

5. Run `yarn add @esolidar/toolkit`

  
  

## Install Package

  
If you want to use our package, just follow these instructions:

  

##### Install from the command line:

`yarn add -D @esolidar/toolkit@1.0.0`

  

##### Install via package.json:

`"@esolidar/toolkit": "1.0.0"`

  
  ## Using Sass

This library uses sass, so it is mandatory that the React project has sass loaders.
To override the styles used in the library components, simply override the following sass variables:
  
[_variaveis](This%20library%20uses%20sass,%20so%20it%20is%20mandatory%20that%20the%20React%20project%20has%20its%20loaders.%20To%20override%20the%20styles%20used%20in%20the%20library%20components,%20simply%20override%20the%20following%20sass%20variables:)

## Documentation

The eSolidar Toolkit documentation, included in this repo in the root directory on styleguide/build, is built with [React Styleguidist](https://react-styleguidist.js.org/) and publicly hosted on GitHub Pages at [Toolkit-Styleguide](https://htmlpreview.github.io/?https://github.com/esolidar/toolkit-styleguide/blob/master/index.html). The docs may also be run locally with the command line `yarn styleguide`.

  
  

## Copyright and license

©2019 eSolidar. All rights reversed.
Code released under the MIT License.