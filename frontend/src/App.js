import './App.css';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import Body from './components/Home/Body';
import Contact from './components/Email/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Informations from './components/Home/Informations';
import Converters from './components/Home/Converters';
import Basics from './components/AboutDiabetes/Basics';
import Nutrition from './components/AboutDiabetes/Nutrition';
import Daily from './components/AboutDiabetes/Daily';
import Glucometers from './components/Equipment/Glucometers';
import Stripes from './components/Equipment/Stripes';
import Needles from './components/Equipment/Needles';
import HowTo from './components/Advices/HowTo';
import Complications from './components/Advices/Complications';
import FirstAidKit from './components/Advices/FirstAidKit';
import Depression from './components/Advices/Depression';
import Curiosities from './components/More/Curiosities';
import Infoline from './components/More/Infoline';
import Calculator from './components/Home/Calculator';

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
        <Route path='/igly' exact component={Needles} />
        <Route path='/jak-zyc-z-cukrzyca' exact component={HowTo} />
        <Route path='/powiklania-cukrzycy' exact component={Complications} />
        <Route path='/apteczka-cukrzyka' exact component={FirstAidKit} />
        <Route path='/depresja-cukrzyka' exact component={Depression} />
        <Route path='/ciekawostki' exact component={Curiosities} />
        <Route path='/infolinie' exact component={Infoline} />
        <Route path='/kalkulator' exact component={Calculator} />
      </Switch>
      <FooterComp />
      </Router>
  );
}

export default App;
