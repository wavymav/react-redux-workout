import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import promise from 'redux-promise'
import * as reducers from './reducers'
import { App } from './components'
import { PostsIndex, PostsNew } from './containers'


const reducer = combineReducers(reducers)
const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(
  promise,
  logger
)(createStore);
const store = createStoreWithMiddleware(reducer)


const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ PostsIndex } />
      <Route path="posts/new" component={ PostsNew }/>
    </Route>
  </Router>
)


render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.querySelector('.container')
)
