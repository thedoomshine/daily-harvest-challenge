import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Global, css } from '@emotion/core'

import { breakpoints, colors, fonts } from 'theme'

import { HomeView } from 'views'
import { GlobalNav } from 'flows'

const styleReset = css`
  ${breakpoints}
  ${colors}
  ${fonts}

  *, *::after, *::before {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }

  body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    font-family: var(--font-family-sans-serif);
  }
`

const App = () => {
  return (
    <>
      <Global styles={styleReset} />
      <GlobalNav />
      <Router>
        <Switch>
          <Route exact path='/' component={HomeView} />
        </Switch>
      </Router>
    </>
  )
}

export default App
