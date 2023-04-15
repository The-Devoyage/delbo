import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "./scss/styles.scss";

import TheLayout from "./containers/TheLayout";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/">
            <TheLayout />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
