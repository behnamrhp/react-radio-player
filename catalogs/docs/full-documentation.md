## Table of Contents
  - Technologies
  - Folder Structure
  - Architecture

## Technologies

- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Storybook](https://storybook.js.org/)
- [Styled components](https://www.styled-components.com/)
- [ESLint](https://eslint.org/)

## Folder Structure
- `lib`: All of our library logics reside in `lib` folder.<br/>
- `base`: All generic styles, types, theme and components are in the `base` folder
- `components`: All components of library are in 
`components` folder. <br/>
  - [component name]: should be name of component
    - *stories*: storybook related to the component should be here
    - *styles*: styled related to the component will be here 
    - *children*: all component related to the component will be here
- `main.ts`: All components should export from `main.ts`.<br/>
- `Logics`: UI logic related to the components is in logic folder. <br/>


```
.
└── lib/
    ├── base/
    │   ├── styles/
    │   │   ├── general.css
    │   │   └── generic-styles.ts
    │   ├── theme/
    │   │   └── default-theme.ts
    │   ├── types/
    │   │   ├── i-base-props.ts
    │   │   ├── i-base-theme.ts
    │   │   └── i-common-props.ts
    │   └── components/
    │       ├── icons
    │       └── volume
    ├── components/
    │   └── bottom-bar/
    │       ├── styles
    │       ├── stories
    │       └── children
    ├── logics/
    │   └── ui-logic.ts
    └── main.ts
```

## Architecture
In this project as we have just one ui logics and all UIs is supposed to handle on logic in different styles so we'll have just one ui logic and we'll have components for multiple ui logics. <br/> 
You can take a look add Class diagram of the project from [this puml file](./../diagrams/code-architecture.puml)
