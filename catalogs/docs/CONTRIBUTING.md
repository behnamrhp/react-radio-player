# Contributing
Contributions are always welcome, no matter how large or small!

## Code architecture

For understanding how to add logics to the project you can take a look at [full documentation](./full-documentation.md)

## Developement workflow

You can take a task from board from this [link](https://github.com/users/behnamrhp/projects/4).<br/>

To get starting with the project, at first you need to install depenedencies by yarn

```bash
yarn
```
> Our tooling built with yarn so it's recommended to continue on working with yarn

To start Storybook:
```bash
yarn storybook
```

To start typescript and linter check:
```bash
yarn tsc
yarn lint
```

To start unit test:
```bash
yarn test
```

## Pull Requests

This project works based on fully automated pipeline and gitflow for versioning, staging and release. so we follow conventional name for branches. our template for branch name will be like this.

> [prefix]/[your branch name]

branches prefix:

- `feature`: Add new feature to the project that doesn't change previouse user usage and final APIs

- `change`: If your changes is supposed to change previouse user usage and final APIs

- `fix`: If your changes is supposed to just fix bugs

- `doc`: For adding documentation to the project

- `refactor`: To refactoring some codes in the project

for example: 
> feature/add-new-component

### DOD

- Add Storybook (if you added a component)
- Add unit test for UI logics (if you added or modified some ui logics)
- Branch name should be based on our [conventions](#pull-requests)
- For styles should be used default theme
