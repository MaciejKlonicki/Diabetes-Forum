import './App.css';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import Body from './components/Home/Body';
import Contact from './components/Email/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import Login from './components/User/Login';
import Register from './components/User/Register';
import PrivateRoute from './components/PrivateRoute';


function App() {

  window.onbeforeunload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    if (e) {
      e.returnValue = '';
    }
    return '';
  };

  return (
    <Router>
      <HeaderComp />
      <BackImage />
        <Route path='/' exact component={Body} />
        <Route path='/kalkulator' 
        exact component={Calculator} />
        <Route path='/logowanie' 
        exact component={Login}/>
        <Route path='/rejestracja' 
        exact component={Register}/>
        <Route path='/informacje' 
        exact component={Informations} />
        <Route path='/przeliczniki' 
        exact component={Converters} />
        
        <PrivateRoute path='/kontakt' 
        exact component={Contact} />
        <PrivateRoute path='/podstawy' 
        exact component={Basics} />
        <PrivateRoute path='/odzywianie' 
        exact component={Nutrition} />
        <PrivateRoute path='/codziennosc' 
        exact component={Daily} />
        <PrivateRoute path='/glukometry' 
        exact component={Glucometers} />
        <PrivateRoute path='/paski' 
        exact component={Stripes} />
        <PrivateRoute path='/igly' 
        exact component={Needles} />
        <PrivateRoute path='/zycie-z-cukrzyca' 
        exact component={HowTo} />
        <PrivateRoute path='/powiklania-cukrzycy' 
        exact component={Complications} />
        <PrivateRoute path='/apteczka-cukrzyka' 
        exact component={FirstAidKit} />
        <PrivateRoute path='/depresja-cukrzyka' 
        exact component={Depression} />
        <PrivateRoute path='/ciekawostki' 
        exact component={Curiosities} />
        <PrivateRoute path='/infolinie' 
        exact component={Infoline} />

      <FooterComp />
      </Router>
  );
}

function BackImage() {
  return (
    <img className='background-image' 
    src={"/images/background.jpg"} 
    alt='backgroundimg'/>
  )
}


export default App;
