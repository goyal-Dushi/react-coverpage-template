import "./components/nav.css";
import Navmenu from "./components/navmenu";
import LandingPage from "./pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navmenu />
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
