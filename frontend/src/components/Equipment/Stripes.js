import React from 'react';
import './Stripes.css';

function Stripes() {
  return (
    <div>
        <BackImage />
        <InformationAboutStripeAccuChekActive
        img='/images/paski-1.png' />
        <InformationAboutStripeAccuChekGuide
        img='/images/paski-2.png' />
        <InformationAboutStripeAccuCheckInstant
        img='/images/paski-3.png' />
        <InformationAboutStripeExamedinFast
        img='/images/paski-4.png' />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-stripes' 
        src={"/images/background.jpg"} 
        alt='backgroundimg'/>
    )
  }

  function InformationAboutStripeAccuChekActive(props) {
    return (
        <div className='image-for-stripes-accuChekActive'>
          <img
          src={props.img}
          alt='Stripes-accuChekActive'
          className='stripes-accuChekActive-photo'
          />
          <div className='h2-position-stripes-accuChekActive'>
          <h2>Paski Accu-Chek Active</h2>
          </div>
          <p className="image__description-stripes-accuChekActive">
          Testy paski testowe Accu Check ACtive znajdują się na liście refundacyjnej.
          Metoda pomiaru: Fotometryczna <br />
          Wielkość próbi krwi: 1-2 µl <br />
          Typ badanego materiału: Pełna krew włośniczkowa <br />
          Jednostka miary: mg/gl (miligramy na decylitr) <br />
          Zakres pomiaru: 10-600 mg/dl (0,6-33,3 mml/l) <br />
          Czujnik minimalnej objętości próbki krwi - Tak
          </p>
        </div>
    )
}

function InformationAboutStripeAccuChekGuide(props) {
    return (
        <div className='image-for-stripes-accuChekGuide'>
          <img
          src={props.img}
          alt='Stripes-accuChekGuide'
          className='stripes-accuChekGuide-photo'
          />
          <div className='h2-position-stripes-accuChekGuide'>
          <h2>Paski Accu-Chek Guide</h2>
          </div>
          <p className="image__description-stripes-accuChekGuide">
          Temperatura przechowania: od 4°C do 30°C. <br />
          Granica wykrywalności (najniższa wyświetlana wartość): 10 mg/dL (0,6 mmol/L) dla testu paskowego <br />
          Zakres pomiarowy systemu: 10–600 mg/dL (0,6–33,3 mmol/L) <br />
          Wielkość próbki: 0,6 µL <br />
          Czas trwania pomiaru: 4 sekundy <br />
          Dokładność systemu: Spełnia wymogi normy ISO 15197:2013/ EN ISO 15197:2015
          </p>
        </div>
    )
}

function InformationAboutStripeAccuCheckInstant(props) {
    return (
        <div className='image-for-stripes-accuChekInstant'>
          <img
          src={props.img}
          alt='Stripes-accuChekInstant'
          className='stripes-accuChekInstant-photo'
          />
          <div className='h2-position-stripes-accuChekInstant'>
          <h2>Paski Accu Check Instant</h2>
          </div>
          <p className="image__description-stripes-accuChekInstant">
          Paski testowe  Accu Check Instant pasujące do glukometru o tej samej nazwie tj. Accu Check Instant.
          Paski charakteryzują się zaprojektowaną według nowej technologii szeroką kapilarą, która doskonale zasysa próbkę krwi. 
          Wystarczy przyłożyć niewielką kroplę krwi w dowolnym punkcie żółtej kapilary, a krew zostanie zassana automatycznie. <br />
          Jednostka miary: mg/gl (miligramy na decylitr) <br />
          Opakowanie: 100 testów paskowych
          </p>
        </div>
    )
}

function InformationAboutStripeExamedinFast(props) {
    return (
        <div className='image-for-stripes-examedinFast'>
          <img
          src={props.img}
          alt='Stripes-examedinFast'
          className='stripes-examedinFast-photo'
          />
          <div className='h2-position-stripes-examedinFast'>
          <h2>Paski Examedin Fast</h2>
          </div>
          <p className="image__description-stripes-examedinFast">
          Testy paskowe Examedin FAST służą do oznaczania stężenia glukozy w świeżej krwi kapilarnej. 
          Wynik podawany jest na podstawie pomiaru prądu elektrycznego, wytworzonego w reakcji glukozy z enzymem umieszczonym na elektrodzie testu paskowego. 
          Próbka krwi jest automatycznie zasysana przez okienko testu paskowego dzięki wykorzystaniu zjawiska kapilarnego. 
          System skalibrowany jest do osocza krwi.
          Testy paskowe przeznaczone są zarówno do samokontroli, jak też użytku profesjonalnego.
          </p>
        </div>
    )
}

export default Stripes