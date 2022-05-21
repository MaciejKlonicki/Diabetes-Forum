import React from 'react';
import './Glucometers.css';

function Glucometers() {
  return (
    <div>
        <BackImage />
        <InformationAboutGlucometers
        img='/images/glucometr-1.png' />
        <InformationAboutGlucometers2
        img='/images/glucometr-2.png' />
        <InformationAboutGlucometers3
        img='/images/glucometr-3.png' />
        <InformationAboutGlucometers4
        img='/images/glucometr-4.png' />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-glucometers' 
      src={"/images/background.jpg"} 
      alt='backgroundimg'/>
    )
  }

function InformationAboutGlucometers(props) {
    return (
        <div className='image-for-glucometr-1'>
          <img
          src={props.img}
          alt='Glucometr-1'
          className='glucometr-1-photo'
          />
          <div className='h2-position-glucometer-1'>
          <h2>Glukometr Glucomaxx Connect</h2>
          </div>
          <p className="image__description">
            Precyzyjny i dokładny system monitorowania glikemii dla pacjentów z cukrzycą.
            Posiada duży ekran z podświetlanymi cyframi, co gwarantuje czytelność wyniku oraz podświetlaną szczelinę, która ułatwia umieszczenie paska testowego.
            Posiada 4 tryby pomiarów (Gen- ogólny, AC-przed posiłkiem, PC- po posiłku, QC-pomiar kontrolny), które pozwalają kontrolować glikemię w zależności od posiłku.
            Jeden przycisk ustawień zapewnia łatwą obsługę.
          </p>
        </div>
    )
}

function InformationAboutGlucometers2(props) {
  return (
      <div className='image-for-glucometr-2'>
        <img
        src={props.img}
        alt='Glucometr-2'
        className='glucometr-2-photo'
        />
        <div className='h2-position-glucometer-2'>
        <h2>Glukometr Glucomaxx Connect</h2>
        </div>
        <p className="image__description-2">
          Glukometr Glucosense pro z paskami testowymi Glucosense to system monitorowania glikemii stworzony specjalnie dla osób z cukrzycą typu 2.
          Podświetlany, czytelny wyświetlacz – gwarancja komfortu użytkowania.
          Podświetlana szczelina na pasek testowy – ułatwia umieszczenie paska.
          Bateria AAA (mały paluszek) – łatwość wymiany baterii.
          Prosta obsługa – przyjazne użytkowanie.
          Spełnia wymogi najnowszej normy.
        </p>
      </div>
  )
}

function InformationAboutGlucometers3(props) {
  return (
      <div className='image-for-glucometr-3'>
        <img
        src={props.img}
        alt='Glucometr-3'
        className='glucometr-3-photo'
        />
        <div className='h2-position-glucometer-3'>
        <h2>Glukometr iXell pro</h2>
        </div>
        <p className="image__description-3">
        Ekran LED z podświetlanymi cyframi – gwarancja czytelności wyniku.
        Zasilanie baterią AAA – wygodne, ogólnodostępne i gdyż wystarcza na wiele pomiarów, a gdy bateria się wyczerpie jest ona dostępna wszędzie, a jej koszt jest niewielki.
        Możliwość oznaczenia pomiaru przed i po posiłku (funkcja AC/PC) – możliwość poznania reakcji organizmu na wszystkie produkty, które spożywamy.
        Jeden przycisk – proste użytkowanie glukometru,
        Elegancki wygląd, wyjątkowa lekkość
        </p>
      </div>
  )
}

function InformationAboutGlucometers4(props) {
  return (
      <div className='image-for-glucometr-4'>
        <img
        src={props.img}
        alt='Glucometr-4'
        className='glucometr-4-photo'
        />
        <div className='h2-position-glucometer-4'>
        <h2>Glukometr iXell</h2>
        </div>
        <p className="image__description-4">
        Jeden przycisk – proste użytkowanie glukometru
        Brak kodowania – eliminuje ryzyko błędu przy nowym opakowaniu pasków.
        Wyrzut paska po pomiarze – bezpieczeństwo dla pacjenta i osób z jego otoczenia.
        Funkcja średnich z 60 i 90 dni – pomoc w oszacowaniu HbA1c i profilaktyce powikłań cukrzycy.
        Paski testowe iXell używane są prze personel medyczny, w polskich szpitalach.
        Dokładność systemu potwierdzona certyfikatem spełnienia wymogów najnowszej normy.
        </p>
      </div>
  )
}

export default Glucometers