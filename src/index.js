import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modules/app/App';

const rootEl = document.getElementById('root')

ReactDOM.render(
  <App />,
  rootEl
)

if (module.hot) {
  module.hot.accept('./modules/app/App', () => {
    const NextApp = require('./modules/app/App').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}
