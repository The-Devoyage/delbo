import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./scss/styles.scss";

import TheLayout from "./containers/TheLayout";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <TheLayout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
