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
          <div className='box'>
            <div className='content'>
              <div className='h2-basic'>
                <h2>Podstawy</h2>
              </div>
              <div>
                <p className='p-basic'>
                  Cukrzyca jest przewlekłą chorobą, która występuje, gdy organizm nie wytwarza dostatecznej ilości insuliny lub nie wykorzystuje jej w odpowiedni sposób. 
                  Gdy w organizmie brakuje insuliny lub działa ona nieprawidłowo, poziom glukozy we krwi wzrasta. <br />
                  <br />U chorego może być obecne zarówno upośledzenie wydzielania, jak i funkcji insuliny.
                  W zależności od jej przyczyn cukrzycę dzielimy na typy - różniące się m.in. przebiegiem i metodą leczenia. Słowo “cukrzyca” nie zawsze oznacza to samo.
                  Według WHO (Światowa Organizacja Zdrowia) obecnie 422 mln osób na świecie choruje na cukrzycę. 
                  W 2013 roku liczba osób chorujących na cukrzycę w Polsce wynosiła 2,73 mln, z czego ok. 26% jest nieświadomych choroby.
                  Jest wiele przykładów, w Polsce i na świecie, że osoby z cukrzycą osiągnęły sukces w różnych dziedzinach życia.<br />
                  <br />Cukrzycę typu 1 cechuje bezwględny niedobór insuliny co oznacza, że od początku rozpoznania osoba chora wymaga leczenia insuliną. 
                  W typie 2 cukrzycy, który stanowi większość przypadków, zaburzone jest działanie insuliny (tzw. insulinooporność), a także jej wydzielanie. 
                  Osoby te na początku są leczone dietą i lekami doustnymi, a na pewnym etapie choroby zwykle będą wymagały leczenia insuliną.
                  Wczesne rozpoznanie cukrzycy i od początku dobra jej kontrola pozwalają zapobiec powikłaniom i prowadzić aktywne życie.<br />
                  <br />Pewne badania wskazują, że choroba Alzheimera również może być odmianą cukrzycy wynikającą ze złej tolerancji glukozy przez mózg.
                  Glikemia u zdrowego człowieka waha się w granicach 70-99 mg/dl (na czczo; po 2 godzinach od posiłku nie powinno być to więcej niż 140 mg/dl). 
                  Wartości wykraczające poza ten zakres mogą z czasem powodować rosnące problemy zdrowotne i prowadzić do uszkodzenia organów, takich jak nerki czy serce.
                </p>
              </div>
            </div>
          </div>
      )
  }

export default Basics