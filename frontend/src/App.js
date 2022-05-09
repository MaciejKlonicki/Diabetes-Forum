import './App.css';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import Body from './components/Body';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <HeaderComp />
      <Switch>
        <Route path='/' exact component={Body} />
        <Route path='/kontakt' exact component={Contact} />
      </Switch>
      <FooterComp />
      </Router>
  );
}

export default App;
