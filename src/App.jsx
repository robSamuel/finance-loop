import React, { Suspense } from 'react';
import './App.css';
import './assets/scss/main.scss';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {Spinner} from 'reactstrap';
import Layout from './components/Layout';
import routes from './components/Routes';

const App = () => {
  const mappedRoutes = routes.map(route => {
    return route.component && (
      <Route
        key={uuidv4()}
        path={route.path}
        exact={route.exact}
        name={route.name}
        component={route.component}
      />
    );
  });

  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Layout>
          <Switch>
            { mappedRoutes }
            <Redirect from="/" to="/home" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
