<h1 align="center">
  commitlint-config
</h1>

<h3 align="center">
  An CommitLint config standard for my projects
</h3>

<p align="center">
This is a CommitLint config that you can use in your projects.
</p>

<p align="center">
  <a href="https://github.com/DiogoCastroSilva/commitlint-config/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="commitlint-config is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/@diogozx-org/commitlint-config">
    <img src="https://img.shields.io/npm/v/@diogozx-org/commitlint-config.svg" alt="Current npm package version." />
  </a>
</p>

## 🚀 Get Up and Running

You can install this package using either **npm** or **yarn**.

### **Yarn**

If using Yarn:

1. Install the package as a development dependency:

```shell
yarn add @diogozx/commitlint-config --dev
```


### **NPM**

If using NPM:

1. Install the package as a development dependency:

```shell
npm install @diogozx/commitlint-config --save-dev
```

### Install commitizen if it's not already installed
- https://commitizen-tools.github.io/commitizen/


### Create a config file
1. Create an `.commitlint.config.js`  file in the root of your project and add the following code:
``` js
module.exports = {
  extends: ['@diogozx/commitlint-config'],
};
```
