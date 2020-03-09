import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import App from './components/App';
import Home from './components/pages/Home';
import ArticlePage from './components/pages/ArticlePage';
import TopicPage from './components/pages/TopicPage';
import UserPage from './components/pages/UserPage';
import reducer from './reducer/reducer';

const store = createStore(reducer, applyMiddleware(thunk));
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/articles/:article_id' component={ArticlePage} />
          <Route path='/topics/:topic_id' component={TopicPage} />
          <Route path='/users/:user_id' component={UserPage} />
        </Switch>
      </App>
    </Router>
  </Provider>, document.getElementById('root'));
