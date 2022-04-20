import './App.css';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import Body from './components/Body';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <HeaderComp />
      <Switch>
        <Route path='/' exact component={Body} />
      </Switch>
      <FooterComp />
      </Router>
  );
}

export default App;
