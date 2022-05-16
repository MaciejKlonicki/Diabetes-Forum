import './App.css';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import Body from './components/Body';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Informations from './components/Informations';
import Converters from './components/Converters';


function App() {
  return (
    <Router>
      <HeaderComp />
      <Switch>
        <Route path='/' exact component={Body} />
        <Route path='/kontakt' exact component={Contact} />
        <Route path='/informacje' exact component={Informations} />
        <Route path='/przeliczniki' exact component={Converters} />
      </Switch>
      <FooterComp />
      </Router>
  );
}

export default App;
