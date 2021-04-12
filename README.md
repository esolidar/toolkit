<p  align="center">
<a  href="https://github.com/esolidar/toolkit/packages/83065">
<img  src="https://www.esolidar.com/images/login-logo-top.png"  alt="Bootstrap logo"  width="72"  height="72">
</a>
</p>

<h3  align="center">eSolidar Toolkit</h3>
<p  align="center">
Toolkit for building eSolidar Projects.
<br>
<a target="_blank" href="https://esolidar.github.io/toolkit-styleguide/"><strong>eSolidar Styleguide »</strong></a>
<br>
<br>
</p>
<div align="center">
<img src="https://img.shields.io/badge/node-v12.13.1-blue" alt="node version">
<img src="https://s3-eu-west-1.amazonaws.com/codefactory-eu-west-1-prod-default-build-badges/passing.svg" alt="AWS CodeBuild">
<img src="https://img.shields.io/badge/coverage-98.18%25-green" alt="coverage">
<img src="https://img.shields.io/badge/peer%20dependencies-up%20to%20date-brightgreen" alt="peer dependencies">
<img src="https://img.shields.io/badge/dev%20dependencies-up%20to%20date-brightgreen" alt="dev dependencies">
</div>
 
 [![Codacy Badge](https://app.codacy.com/project/badge/Grade/19f01b53eab5464ca12ea34cfb8dbd3d)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=esolidar/toolkit&amp;utm_campaign=Badge_Grade)

[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/19f01b53eab5464ca12ea34cfb8dbd3d)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=esolidar/toolkit&utm_campaign=Badge_Coverage)

## Table of contents

- [Quick start](#quick-start)
- [Before installing the package](#before-installing-the-package)
- [Install package](#install-package)
- [Publish package](#publish-package)
- [Using sass](#using-sass)
- [Documentation](#documentation)
- [Copyright and license](#copyright-and-license)

## Quick start

Steps to set up the project locally:

- Clone the repo: `git clone https://github.com/esolidar/toolkit.git`
- Update submodule: `git submodule update --init --recursive`
- Checkout branch on submodule: `cd styleguide` then `git checkout master`

### Running toolkit locally

1. Run `yarn` to install all dependencies.
2. Run `yarn styleguide` to start the styleguide.
3. Open `http://localhost:6060` in your browser, and voilà.
4. **Tests**
5. Run `yarn test` to run all components tests.
6. Run `yarn test --coverage` to run tests, coverage analysis and report.
7. Run `yarn test:lint` to run eslint analysis.
8. **Builds**
9. Run `yarn styleguide:build` to create a production build for the styleguide documentation.
10. Run `yarn build` to create a production build for the package.
11. Rum `yarn build:publish` to create a production build and publish the new version package.
12. Run `yarn clean` to delete the build (lib folder) locally.

## Before installing the package

1. Create access token with [Permissions: repo / write:packages / read:packages / delete:packages].
2. Add Token to global **~/.npmrc** file. Open the shell and do **C:>code ~/.npmrc** to open the file, then add the following line: `//npm.pkg.github.com/:_authToken=TOKEN`
3. **Or** login on the command line: `npm login --registry=https://npm.pkg.github.com`
4. In the same directory as your package.json file, create or edit an **.npmrc** file to include a line specifying GitHub Package Registry URL and the account esolidar: `@esolidar:registry=https://npm.pkg.github.com`
5. Run `yarn add @esolidar/toolkit`

## Install Package

If you want to use our package, just follow these instructions:

##### Install from the command line:

`yarn add -D @esolidar/toolkit`

##### Install via package.json:

`"@esolidar/toolkit": "LAST_VERSION"`

## Publish package

Steps to publish the package:

1. Update package.json and change package version.
2. Update README file in all places where the version is referenced.
3. Run `yarn styleguide:build` to build and push the new library version to the styleguide.
4. Run `yarn build`
5. Add all changes to git (pull/add/commit/push)
6. Run `yarn build:publish`

## Using Sass

This library uses sass, so it is mandatory that the React project has sass loaders.

Include the following import:

`import '~@esolidar/toolkit/lib/assets/sass/main';`

If you only want to include the style for the component you used, just include the scss of the component in question, ex:

```
/* Need to import variables as well */
import '~@esolidar/toolkit/lib/assets/sass/variables';
import '~@esolidar/toolkit/lib/assets/sass/footer';
```

To override the styles used in the library components, simply override the following sass variables:

[\_variables](https://github.com/esolidar/toolkit/blob/master/src/assets/sass/_variables.scss)

Then, you must create a sass file in your project and include the following import:
(variables before the library)

```

$mainColor : red;
@import '~@esolidar/toolkit/lib/assets/sass/main';

```

## Documentation

The eSolidar Toolkit documentation, included in this repo in the root directory on styleguide/build, is built with [React Styleguidist](https://react-styleguidist.js.org/) and publicly hosted on GitHub Pages at [Toolkit-Styleguide](https://esolidar.github.io/toolkit-styleguide/). The docs may also be run locally with the command line `yarn styleguide`.

## Copyright and license

©2020 eSolidar. All rights reversed.
Code released under the MIT License.
