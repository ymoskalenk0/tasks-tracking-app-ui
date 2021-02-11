import { observer } from 'mobx-react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageKit from './components/layout/PageKit/PageKit';
import Homepage from './pages/Homepage/Homepage';
import RootStore from './state/rootStore';

export type AppProps = {
  rootStore: RootStore;
};

const App = observer(({ rootStore }: AppProps) => {
  const { projectsStore } = rootStore;

  return (
    <Router>
      <PageKit>
        <Switch>
          <Route exact path="/">
            <Homepage projectsStore={projectsStore} />
          </Route>
        </Switch>
      </PageKit>
    </Router>
  );
});

export default App;
