import React from 'react';
import './Nutrition.css';

function Nutrition() {
  return (
    <div>
        <BackImage />
        <FiveRules />
        <WhatToEat />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-nutrition' 
        src={"/images/background.jpg"} 
        alt='backgroundimg'/>
    )
  }

  function FiveRules() {
      return (
        <div>
          <div>
            <div className='border-window-how-to-cook'>
              <p className='p-nutrition'><b>Potrawy sporządzaj:</b><br />
                <b>1.</b> Gotowane na wodzie,<br />
                <b>2.</b> Na parze,<br />
                <b>3.</b> Duszone,<br />
                <b>4.</b> Pieczenie bez tłuszczu,<br />
                <b>5.</b> Folii do grilowania
              </p>
            </div>
            <div className='border-window-avoid'>
              <p className='p-nutrition'><b>Unikaj:</b><br />
              <b>1.</b> Pieczywa zawierającego miód, karmel, słód jęczmienny<br />
              <b>2.</b> Ciast kruchych, francuskich ucieranych,<br />
              <b>3.</b> Ciepłego pieczywa, <br />
              </p>
            </div>
            <div className='border-window-continues'>
              <p className='p-nutrition'>
              <b>4.</b> Chipsów, krakersów, paluszków, słodyczy,<br />
              <b>5.</b> Rozgotowanych produktów, potraw np.: makaronu, kaszy, ziemniaków, warzyw,<br />
              <b>6.</b> Smażonych potraw - ich spożycie podnosi poziom cukru nawet do 5 godzin<br />
              </p>
            </div>
          </div>
        </div>
      );
  }

  function WhatToEat() {
      return (
          <div>
              <div className='box-nutrition'>
                <div className='content-nutrition'>
              <h2 className='h2-nutrition-what-and-when'>Co i kiedy jeść?</h2>
              <p className='p-nutrition-what-and-when'>
                <b>Pieczywo: </b> razowe, żytnio-razowe, graham, 100% żytni (chleb) <br />
                <b>Nabiał: </b> chudy, przetworzony np.: jogurt naturalny, kefir, ser biały chudy, serek wiejski lekki, maślanka <br />
                <b>Jaja: </b> 4-5 sztuk w tygodniu - GOTOWANE na miękko, na twardo, w koszulce<br />
                <b>Ser zółty: </b> chudy ok. 20% tł. np.: Hollender 17% i wiele innych, ewentualnie ser długodojrzewający np.: bursztyn, parmezan, grana padano <br />
                <b>Wędliny:</b> szynka, polędwica (nie mocno wędzona) <br />
                <b>Mięso:</b> chude np.: drób bez skóry, wołowina, cielęcina, schab, polędwiczki np.: królik <br />
                <b>Ryby chude:</b> pstrąg, dorsz, morszczuk, mintaj, sandacz, sola, tuńczyk <br />
                <b>Ryby tłuste:</b> halibut, makrela, śledź, karp, łosoś <br />
                <b>OWOCE DO GODZINY 16:00 W ILOŚCI 200-250G DZIENNIE</b><br />
                <b>Owoce: </b> grejpruty, jabłka ze skórką, kiwi, maliny, jagody, borówka - do 3/4 szklanki, truskawki 10-15 sztuk <br />
                <b>Warzywa: (jemy o określonej godzinie posiłku!!!)</b> ziemniaki, buraki, marchew gotowana, kukurydza, fasola, groch, bób, soja <br />
                <b>Napoje bez cukru</b><br />
                <b>Tłuszcze roślinne: </b> olej rzepakowy, oliwa - na zimno i ciepło, olej słonecznikowy, olej lniany - tylko na zimno <br />
                <b>Zup nie gotować na wywarach z korpusów, skrzydełek, żeberek, kości, nie dodajemy wegety, kucharków, kostek rosołowych, bulionetek czy mąki</b><br />
                <b>Zupy najlepiej gotować na wywarach z chudego mięsa czy na wywarach warzywnych, można dodać jogurtu naturalnego</b>
              </p>
              </div>
            </div>
          </div>
      )
  }

export default Nutrition