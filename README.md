# Commitlint Config

A reusable [Commitlint](https://commitlint.js.org/) configuration for projects that follow Conventional Commits.

## Requirements

- Node.js 18 or newer
- npm or Yarn
- [Commitlint CLI](https://www.npmjs.com/package/@commitlint/cli) installed in the consuming project

## Install

Install this package in your project:

```sh
npm install --save-dev @diogozx-org/commitlint-config @commitlint/cli
```

Or with Yarn:

```sh
yarn add --dev @diogozx-org/commitlint-config @commitlint/cli
```

## Configure

Create `commitlint.config.cjs` in the root of your project:

```js
module.exports = {
  extends: ['@diogozx-org/commitlint-config'],
};
```

The `.cjs` extension makes the CommonJS module format explicit, regardless of your project's `package.json` module type.

## Rules

This config uses Conventional Commits and enforces:

- A maximum header length of 100 characters
- Lowercase commit types from this list: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, and `test`
- A non-empty subject without a trailing period
- Body and footer lines no longer than 100 characters, with a blank line before each section

Example:

```text
feat: add juror search

Add a searchable list of jurors to the trial workspace.
```

## Optional: Commitizen

This repository also uses [Commitizen](https://commitizen-tools.github.io/commitizen/) for composing commits. Commitizen is a commit-writing helper, not a requirement for using this Commitlint configuration. Install and configure it separately if you want interactive commit prompts.

## Development

```sh
yarn install --frozen-lockfile
yarn test
``

## License

MIT
