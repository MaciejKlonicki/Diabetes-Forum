import React from 'react';
import './Stripes.css';

function Stripes() {
  return (
    <div>
        <BackImage />
        <InformationAboutStripes 
        img='/images/paski-1.png' />
        <InformationAboutStripes2
        img='/images/paski-2.png' />
        <InformationAboutStripes3
        img='/images/paski-3.png' />
        <InformationAboutStripes4
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

  function InformationAboutStripes(props) {
    return (
        <div className='image-for-stripes-1'>
          <img
          src={props.img}
          alt='Stripes-1'
          className='stripes-1-photo'
          />
          <div className='h2-position-stripes-1'>
          <h2>Paski Accu-Chek Active</h2>
          </div>
          <p className="image__description-stripes">
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

function InformationAboutStripes2(props) {
    return (
        <div className='image-for-stripes-2'>
          <img
          src={props.img}
          alt='Stripes-2'
          className='stripes-2-photo'
          />
          <div className='h2-position-stripes-2'>
          <h2>Paski Accu-Chek Guide</h2>
          </div>
          <p className="image__description-stripes-2">
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

function InformationAboutStripes3(props) {
    return (
        <div className='image-for-stripes-3'>
          <img
          src={props.img}
          alt='Stripes-3'
          className='stripes-3-photo'
          />
          <div className='h2-position-stripes-3'>
          <h2>Paski Accu Check Instant</h2>
          </div>
          <p className="image__description-stripes-3">
          Paski testowe  Accu Check Instant pasujące do glukometru o tej samej nazwie tj. Accu Check Instant.
          Paski charakteryzują się zaprojektowaną według nowej technologii szeroką kapilarą, która doskonale zasysa próbkę krwi. 
          Wystarczy przyłożyć niewielką kroplę krwi w dowolnym punkcie żółtej kapilary, a krew zostanie zassana automatycznie. <br />
          Jednostka miary: mg/gl (miligramy na decylitr) <br />
          Opakowanie: 100 testów paskowych
          </p>
        </div>
    )
}

function InformationAboutStripes4(props) {
    return (
        <div className='image-for-stripes-4'>
          <img
          src={props.img}
          alt='Stripes-4'
          className='stripes-4-photo'
          />
          <div className='h2-position-stripes-4'>
          <h2>Paski Examedin Fast</h2>
          </div>
          <p className="image__description-stripes-4">
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