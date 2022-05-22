import './App.css';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import Body from './components/Body';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Informations from './components/Informations';
import Converters from './components/Converters';
import Basics from './components/Basics';
import Nutrition from './components/Nutrition';
import Daily from './components/Daily';
import Glucometers from './components/Glucometers';
import Stripes from './components/Stripes';
import Needles from './components/Needles';


function App() {
  return (
    <Router>
      <HeaderComp />
      <Switch>
        <Route path='/' exact component={Body} />
        <Route path='/kontakt' exact component={Contact} />
        <Route path='/informacje' exact component={Informations} />
        <Route path='/przeliczniki' exact component={Converters} />
        <Route path='/podstawy' exact component={Basics} />
        <Route path='/odzywianie' exact component={Nutrition} />
        <Route path='/codziennosc' exact component={Daily} />
        <Route path='/glukometry' exact component={Glucometers} />
        <Route path='/paski' exact component={Stripes} />
        <Route path='/igły' exact component={Needles} />
      </Switch>
      <FooterComp />
      </Router>
  );
}

export default App;
