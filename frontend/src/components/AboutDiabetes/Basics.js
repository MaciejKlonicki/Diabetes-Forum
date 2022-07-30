import React from 'react';
import './Basics.css';

function Basics() {
  return (
    <div>
        <BackImage />
        <BasicInformations />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-basics' 
      src={"/images/background.jpg"} 
      alt='backgroundimg'/>
    )
  }

  function BasicInformations() {
      return (
          <div className='box-how-to'>
            <div className='content'>
              <div className='h2-how-to'>
                <h2>Podstawy</h2>
              </div>
              <div>
                <p className='p-basics'>
                  <b>Cukrzyca</b> jest przewlekłą chorobą, która występuje, gdy organizm nie wytwarza dostatecznej ilości <b>insuliny</b> lub nie wykorzystuje jej w odpowiedni sposób. 
                  Gdy w organizmie brakuje insuliny lub działa ona nieprawidłowo, poziom <b>glukozy</b> we krwi wzrasta. <br />
                  <br />U chorego może być obecne zarówno upośledzenie wydzielania, jak i funkcji insuliny.
                  W zależności od jej przyczyn cukrzycę dzielimy na typy - różniące się m.in. przebiegiem i metodą leczenia. Słowo <b>“cukrzyca”</b> nie zawsze oznacza to samo.
                  Według <b>WHO</b> (Światowa Organizacja Zdrowia) obecnie 422 mln osób na świecie choruje na cukrzycę. 
                  W 2013 roku liczba osób chorujących na cukrzycę w Polsce wynosiła <b>2,73 mln</b>, z czego ok. <b>26%</b> jest nieświadomych choroby.
                  Jest wiele przykładów, w Polsce i na świecie, że osoby z cukrzycą osiągnęły sukces w różnych dziedzinach życia.<br />
                  <br />Cukrzycę <b>typu 1</b> cechuje bezwględny niedobór insuliny co oznacza, że od początku rozpoznania osoba chora wymaga leczenia insuliną. 
                  W <b>typie 2</b> cukrzycy, który stanowi większość przypadków, zaburzone jest działanie insuliny (tzw. insulinooporność), a także jej wydzielanie. 
                  Osoby te na początku są leczone dietą i lekami doustnymi, a na pewnym etapie choroby zwykle będą wymagały leczenia insuliną.
                  Wczesne rozpoznanie cukrzycy i od początku dobra jej kontrola pozwalają zapobiec powikłaniom i prowadzić aktywne życie.<br />
                  <br />Pewne badania wskazują, że choroba <b>Alzheimera</b> również może być odmianą cukrzycy wynikającą ze złej tolerancji glukozy przez mózg.
                  Glikemia u zdrowego człowieka waha się w granicach <b>70-99</b> mg/dl (na czczo; po 2 godzinach od posiłku nie powinno być to więcej niż 140 mg/dl). 
                  Wartości wykraczające poza ten zakres mogą z czasem powodować rosnące problemy zdrowotne i prowadzić do uszkodzenia organów, takich jak nerki czy serce.
                </p>
              </div>
            </div>
          </div>
      )
  }

export default Basics