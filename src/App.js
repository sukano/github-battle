// React
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import { Menu } from './components'

// Config
import routes from './config/routes'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Menu items={routes.filter((route) => route.name)} />

        {routes.map((route, index) => {
          return <Route component={route.component} exact key={index} path={route.path} />
        })}
      </div>
    </Router>
  );
}

export default App;
