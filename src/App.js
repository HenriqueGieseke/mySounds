import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Home from './components/views/Home/Home';
import Favorites from './components/views/Favorites/Favorites';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
