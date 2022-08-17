import React from 'react';
import './Glucometers.css';

function Glucometers() {
  return (
    <div>
        <InformationAboutGlucometerGlucomaxxx
          img='/images/glucometr-1.png' />
        <InformationAboutGlucometerGlucosense
          img='/images/glucometr-2.png' />
        <InformationAboutGlucometeriXellPro
          img='/images/glucometr-3.png' />
        <InformationAboutGlucometeriXell
          img='/images/glucometr-4.png' />
    </div>
  )
}

function InformationAboutGlucometerGlucomaxxx(props) {
    return (
        <div className='image-for-glucometr-glucomaxxx'>
          <img
            src={props.img}
            alt='Glucometr-Glucomaxxx'
            className='glucometr-glucomaxxx-photo'
          />
          <div className='h2-position-glucometer-glucomaxxx'>
          <h2>Glukometr Glucomaxx Connect</h2>
          </div>
            <p className="image__description-glucomaxxx">
              Precyzyjny i dokładny system monitorowania glikemii dla pacjentów z cukrzycą.
              Posiada duży ekran z podświetlanymi cyframi, co gwarantuje czytelność wyniku oraz podświetlaną szczelinę, która ułatwia umieszczenie paska testowego.
              Posiada 4 tryby pomiarów (Gen- ogólny, AC-przed posiłkiem, PC- po posiłku, QC-pomiar kontrolny), które pozwalają kontrolować glikemię w zależności od posiłku.
              Jeden przycisk ustawień zapewnia łatwą obsługę.
            </p>
        </div>
    )
}

function InformationAboutGlucometerGlucosense(props) {
  return (
      <div className='image-for-glucometr-glucosense'>
        <img
          src={props.img}
          alt='Glucometr-glucosense'
          className='glucometr-glucosense-photo'
        />
        <div className='h2-position-glucometer-glucosense'>
        <h2>Glukometr Glucosense</h2>
        </div>
          <p className="image__description-glucosense">
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

function InformationAboutGlucometeriXellPro(props) {
  return (
      <div className='image-for-glucometr-iXellPro'>
        <img
          src={props.img}
          alt='Glucometr-iXellPro'
          className='glucometr-iXellPro-photo'
        />
        <div className='h2-position-glucometer-iXellPro'>
        <h2>Glukometr iXell PRO</h2>
        </div>
          <p className="image__description-iXellPro">
            Ekran LED z podświetlanymi cyframi – gwarancja czytelności wyniku.
            Zasilanie baterią AAA – wygodne, ogólnodostępne i gdyż wystarcza na wiele pomiarów, a gdy bateria się wyczerpie jest ona dostępna wszędzie, a jej koszt jest niewielki.
            Możliwość oznaczenia pomiaru przed i po posiłku (funkcja AC/PC) – możliwość poznania reakcji organizmu na wszystkie produkty, które spożywamy.
            Jeden przycisk – proste użytkowanie glukometru,
            Elegancki wygląd, wyjątkowa lekkość
          </p>
      </div>
  )
}

function InformationAboutGlucometeriXell(props) {
  return (
      <div className='image-for-glucometr-iXell'>
        <img
          src={props.img}
          alt='Glucometr-iXell'
          className='glucometr-iXell-photo'
        />
        <div className='h2-position-glucometer-iXell'>
        <h2>Glukometr iXell</h2>
        </div>
          <p className="image__description-iXell">
            Jeden przycisk – proste użytkowanie glukometru
            Brak kodowania – eliminuje ryzyko błędu przy nowym opakowaniu pasków.
            Wyrzut paska po pomiarze – bezpieczeństwo dla pacjenta i osób z jego otoczenia.
            Funkcja średnich z 60 i 90 dni – pomoc w oszacowaniu HbA1c i profilaktyce powikłań cukrzycy.
            Paski testowe iXell używane są przez personel medyczny, w polskich szpitalach.
            Dokładność systemu potwierdzona certyfikatem spełnienia wymogów najnowszej normy.
          </p>
      </div>
  )
}

export default Glucometers