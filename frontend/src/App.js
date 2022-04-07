import './App.css';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <HeaderComp />
      <Switch>
      </Switch>
      <FooterComp />
      </Router>
  );
}

export default App;
