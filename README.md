This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


---

# File Structure

File structure is loosly based on [React Folder Structure](https://www.robinwieruch.de/react-folder-structure) by Robin Wieruch, and a little bit with [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) by Brad Frost, which makes the project scalable as well as quickly parsable for engineers diving in to the project.

The file structure goes like this:
```
- src/
--- components/
--- flows/
--- hooks/
--- state/
--- services/
--- views/
```

## Components
`Components` exist for small, individual elements, such as text inputs, buttons, or labels. These are highly reusable elements that will be used across multiple pages.

```
- src/
--- components/
----- input/
------- Input.js
------- Input.test.js
----- button/
------- Button.js
------- Button.test.js
----- ...
```

## Flows
`Flows` exists for larger components that may incorporate smaller individual `Components`, but only account for a portion of any given page, or even across multiple pages. Things like a newsletter signup component, that could incorporate a text input, a button, and a label would fit in this folder.

```
- src/
--- flows/
----- App/
------- App.js
------- App.test.js
----- Payment/
------- PaymentForm/
--------- PaymentForm.js
--------- PaymentForm.test.js
------- PaymentWizard/
--------- PaymentWizard.js
--------- PaymentWizard.test.js
----- User/
------- Avatar/
--------- Profile.js
--------- Profile.test.js
------- Profile/
--------- Profile.js
--------- Profile.test.js
------- ...
```

Avoid using `{Folder}/index.js` for better clarity when searching across a large codebase for specific files.

## Hooks
Hooks is a folder used to store [custom, reusable react hooks](https://reactjs.org/docs/hooks-custom.html). Check out [useHooks](https://usehooks.com/) for some great recepies that may spark your imagination.

```
- src/
--- hooks/
----- useClickOutside/
------- useClickOutside.js
------- useClickOutside.test.js
----- ...
```

## Services
`Services` are reusable, context agnostic functions that are usable anywhere in the app. Examples of services would be a function that formats dates or currency.

```
- src/
--- services/
----- currency/
------- currency.js
------- currency.test.js
----- ...
```

## Stores
`Stores` is where our global state is managed. We will be using [React Redux](https://react-redux.js.org/) as a global state manager and also our data layer.

`Stores` is broken down in to modules with separate namespaces for easier data management.

```
- src/
--- hooks/
----- useClickOutside/
------- useClickOutside.js
------- useClickOutside.test.js
----- ...
```

## Theme
`Theme` is where we store our global CSS variables and theme data. This makes managing a styleguide much easier and ensures much more consistency across components.

Theme includes font sizes, styles, colors, viewports, margins, and paddings.

## Views
`Views` is a folder for individual pages in an application, and will most often have their own route. `Views` can incorporate both flows and individual components.

```
- src/
--- Views/
----- Home/
------- Home.js
------- Home.test.js
----- Profile/
------- Profile.js
------- Profile.test.js
----- ...
```

---


# Redux
As we are using Redux as our data layer, we use [Redux Thunk](https://github.com/reduxjs/redux-thunk) to handle our asyncrynous actions and [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux) methodology for splitting our redux stores in to seperate modules. This will allow us to scale our application and not lose control of our redux store.