<h1 align="center">
  Online-store
</h1>

> Hi , my name is Trung .i'm create this project to learn react at school .

## 🗒️ Features

- Latest [Gatsby](https://www.gatsbyjs.org/) and [React](https://reactjs.org/).
- TypeScript
- ESLint (with custom ESLint rules), Prettier, Editor Config
- Basic component structure
- Styling with [emotion](https://emotion.sh/), [tailwindcss](https://tailwindcss.com/) and combine them with [tailwind.macro](https://www.npmjs.com/package/tailwind.macro).
- Manage your state by [Redux](https://redux.js.org/), [redux-saga](https://redux-saga.js.org/)
- Localize your product from web to mobile and desktop by [i18next](https://www.i18next.com/)
- Test and write document for reusable components by using [Storybook](https://storybook.js.org/).

## 🚀 Quick start

> A [nodejs](https://nodejs.org/) >= 10.13.0 setup with [yarn](https://yarnpkg.com/) is recommended.

1.  **Install Gatsby CLI.**

    Install `gatsby-cli` package globally on your machine.

    ```bash
    npm install -g gatsby-cli
    ```

    Use the `gatsby-cli` to create a new site and install its dependencies.

2.  **Clone online-store project from Github**

    Clone with HTTPS

    ```bash
    git clone https://github.com/minhtrungimalive/online-store.git
    ```

3.  **Build your application in development.**

    > Move to project's directory.

    ```bash
    cd online-store/
    ```

    > Install library in package.json file

    ```bash
    npm install
    ```

    > Start your site.

    ```bash
    npm run dev
    ```

4.  **Build your application in production.**

    > Move to project's directory.

    ```bash
    cd online-store/
    ```

    > Clear the cache in the project

    ```bash
    npm run clean
    ```

    > Install library in package.json file

    ```bash
    npm install
    ```

    > Build your project

    ```bash
    npm run build
    ```

    > Run your project in production

    ```bash
    npm run serve
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a online-store project.

    .
    ├── .vscode
    ├── node_modules
    ├── plugins
    ├── src
        ├── components
        ├── config
        ├── layouts
        ├── locales
        ├── mock-api
        ├── pages
        ├── reducers
        ├── services
        ├── styles
        ├── templates
        ├── utils
    ├── static
    ├── .editorconfig
    ├── .env.development
    ├── .eslintrc
    ├── .gitignore
    ├── .prettierrc
    ├── babel-plugin-macros-config.js
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tailwind.config.js
    ├── tsconfig.json
    └── yarn.lock

1.  **`.vscode`**: This directory contains general configuration on VS Code on the project.

2.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3.  **`/plugins`**: This folder hosts any project-specific (“local”) plugins that aren’t published as an npm package. Check out the [plugin docs](https://www.gatsbyjs.org/docs/plugins/) for more detail.

4.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

    - **`/components`**: This directory will contain all of the reusable component in the project.
    - **`/config`**: This directory will contain all of the configuration like store, apollo, etc...
    - **`/content`**: This directory will contain mock content from markdown file.
    - **`/layouts`**: This directory will contain your layout component.
    - **`/locales`**: This directory will contain all of the translation file when you use i18n.
    - **`/mock-api`**: This directory will contain all of the fake api for using service in redux and redux-saga.
    - **`/pages`**: Components under src/pages become pages automatically with paths based on their file name. Check out the [pages recipes](https://www.gatsbyjs.org/docs/recipes/pages-layouts/) for more detail.
    - **`/reducers`**: This will contain all of file as reducer.ts, saga.ts, action.ts, model.ts in using redux and redux-saga.
    - **`/services`**: This will contain all of file relate to call API in real server or visual server.
    - **`/styles`**: This will contain the global style files.
    - **`/templates`**: Contains templates for programmatically creating pages. Check out the [templates docs](https://www.gatsbyjs.org/docs/building-with-components/#page-template-components) for more detail.
    - **`/utils`**: Contains classes, functions or variables that you can be reuse it in your project.

5.  **`/static`**: If you put a file into the static folder, it will not be processed by Webpack. Instead it will be copied into the public folder untouched. Check out the [assets docs](https://www.gatsbyjs.org/docs/static-folder/#adding-assets-outside-of-the-module-system) for more detail.

6.  **`.editorconfig`**: A file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles.

7.  **`.env.development`**: A file contains all of environment variables when you run the project in dev mode.

8.  **`.eslintrc`**: A file contains all of the configuration for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. You can read [docs](https://eslint.org/docs/user-guide/getting-started) for details.

9.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

10. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

11. **`babel-plugin-macros-config.js`**: Defines a standard interface for libraries that want to use compile-time code transformation without requiring the user to add a babel plugin to their build system (other than babel-plugin-macros, which is ideally already in place). Read more [here](https://github.com/kentcdodds/babel-plugin-macros)

12. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

13. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

14. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

15. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

16. **`LICENSE`**: Gatsby is licensed under the MIT license.

17. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

18. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

19. **`README.md`**: A text file containing useful reference information about your project.

20. **`tailwind.config.js`**: Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind. By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations. Read more [here](https://tailwindcss.com/docs/configuration/).

21. **`tsconfig.json`**: The tsconfig.json file specifies the root files and the compiler options required to compile the project. Read more [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

22. **`yarn.lock`**: In order to get consistent installs across machines, Yarn needs more information than the dependencies you configure in your package.json. Yarn needs to store exactly which versions of each dependency were installed. Read more [here](https://yarnpkg.com/lang/en/docs/yarn-lock/).

## 📚 Storybook

[Storybook](https://storybook.js.org/) is a UI development environment for your UI components. With it, you can visualize different states of your UI components and develop them interactively.

1. **Setup environment**

```bash
 npm install -g @storybook/cli
```

2. **Add Storybook to gatsby project**
   > Move to project's directory.

```bash
cd online-store/
```

> Run init command

```bash
sb init
```

3. **Run storybook in dev environment**

> You can change your host and port by using `-h` and `-p`. For example:

```bash
start-storybook -h 192.168.0.7 -p 6006
```

> By default you can run as below:

```bash
npm run storybook:dev
```

If you want to read more details you can go to the [docs](https://storybook.js.org/docs/configurations/cli-options/) page of storybook.

4. **Run storybook in prod environment**

If you want to run the storybook project in static, you can do step by step as below.

> Build static.

```bash
npm run storybook:static
```

> Run static storybook

```bash
npm run storybook:serve
```

Sometimes, the static build maybe failed cause of a few something error, so you have to clear cache before you build static project.

```bash
npm run storybook:clean
```

5. **Write your story and config more**

You can read at the [storybook's docs](https://storybook.js.org/docs/basics/introduction/).
