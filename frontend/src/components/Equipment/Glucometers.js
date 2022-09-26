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
        <div style={{position: "fixed", top: "53%", left: "200px", height: "700px", width: "380px", transform: "translate(-50%, -50%)", zIndex: "1", textAlign: "center"}}>
          <img
            src={props.img}
            alt='Glucometr-Glucomaxxx'
            className='glucometr-glucomaxxx-photo'
          />
          <div style={{position: "absolute", alignItems: "center", justifyContent: "center", color: "black", width: "350px", height: "350px", bottom: "-2%", left: "17%"}}>
            <h2>Glukometr Glucomaxx</h2>
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
      <div style={{position: "fixed", top: "100%", left: "675px", height: "700px", width: "380px", transform: "translate(-50%, -50%)", zIndex: "1", textAlign: "center"}}>
        <img
          src={props.img}
          alt='Glucometr-glucosense'
          className='glucometr-photo'
        />
        <div className='h2-pos'>
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
      <div style={{position: "fixed", top: "100%", left: "1175px", height: "700px", width: "380px", transform: "translate(-50%, -50%)", zIndex: "1", textAlign: "center"}}>
        <img
          src={props.img}
          alt='Glucometr-iXellPro'
          className='glucometr-photo'
        />
        <div className='h2-pos'>
        <h2>Glukometr iXell PRO</h2>
        </div>
          <p className="image__description-glu">
            Ekran LED z podświetlanymi cyframi – gwarancja czytelności wyniku.
            Zasilanie baterią AAA – wygodne, ogólnodostępne i gdyż wystarcza na wiele pomiarów, a gdy bateria się wyczerpie jest ona dostępna wszędzie, a jej koszt jest niewielki.
            Możliwość oznaczenia pomiaru przed i po posiłku (funkcja AC/PC) – możliwość poznania reakcji organizmu na wszystkie produkty, które spożywamy.
          </p>
      </div>
  )
}

function InformationAboutGlucometeriXell(props) {
  return (
      <div style={{position: "fixed", top: "100%", left: "1600px", height: "700px", width: "380px", transform: "translate(-50%, -50%)", zIndex: "1", textAlign: "center"}}>
        <img
          src={props.img}
          alt='Glucometr-iXell'
          className='glucometr-photo'
        />
        <div className='h2-pos'>
        <h2>Glukometr iXell</h2>
        </div>
          <p className="iimage__description-glu">
            Jeden przycisk – proste użytkowanie glukometru
            Brak kodowania – eliminuje ryzyko błędu przy nowym opakowaniu pasków.
            Wyrzut paska po pomiarze – bezpieczeństwo dla pacjenta i osób z jego otoczenia.
            Funkcja średnich z 60 i 90 dni – pomoc w oszacowaniu HbA1c i profilaktyce powikłań cukrzycy.
            Paski testowe iXell używane są przez personel medyczny, w polskich szpitalach.
          </p>
      </div>
  )
}

export default Glucometers