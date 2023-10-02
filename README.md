# git-beauty-commit

> turn git commit massage into a more beautiful massage

<p>
  <a href="https://www.npmjs.com/package/git-beauty-commit">
    <img src="https://img.shields.io/npm/v/git-beauty-commit.svg" alt="Version" />
  </a>
  <a href="https://coveralls.io/github/yyz945947732/git-beauty-commit?branch=master">
    <img
      src="https://coveralls.io/repos/github/yyz945947732/git-beauty-commit/badge.svg?branch=master"
      alt="Coverage Status"
    />
  </a>
  <a href="https://github.com/yyz945947732/git-beauty-commit/pulls">
    <img
      src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
      alt="PRs Welcome"
    />
  </a>
  <a href="https://github.com/yyz945947732/git-beauty-commit/blob/master/LICENSE">
    <img
      src="https://img.shields.io/badge/license-MIT-blue.svg"
      alt="GitHub license"
    />
  </a>
</p>

## Install

```bash
npm install --save git-beauty-commit
```

## Usage

```js
import transform from 'git-beauty-commit';

const message = transform('fix: input should be ahead of select (#3373)');
//🐛 Input should be ahead of select (#3373)
```

### API

```js
function(msg: string): string;
```

## Emoji

| emoji | type     | description                                                                                                 |
| ----- | -------- | ----------------------------------------------------------------------------------------------------------- |
| ✨     | feat     | A new feature                                                                                               |
| 🐛     | fix      | A bug fix                                                                                                   |
| 📖     | docs     | Documentation only changes                                                                                  |
| 💄     | style    | Changes that do not affect the meaning of the code                                                          |
| 🛠     | refactor | A code change that neither fixes a bug nor adds a feature                                                   |
| ⚡️     | perf     | A code change that improves performance                                                                     |
| ✅     | test     | Adding missing tests or correcting existing tests                                                           |
| 📦     | build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ⚙️     | ci       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| 🚀     | chore    | Other changes that don't modify src or test files                                                           |
| 🗑     | revert   | Reverts a previous commit                                                                                   |
| 🤞     | try      | Add untested to production                                                                                  |
| 🎉     | init      | Add untested to production                                                                                  |

## LICENSE

[MIT](https://github.com/yyz945947732/git-beauty-commit/blob/master/LICENSE)

---

This project is created using [generator-stupid](https://github.com/yyz945947732/generator-stupid).
