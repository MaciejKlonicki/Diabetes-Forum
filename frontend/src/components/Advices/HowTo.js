import React from 'react';
import './HowTo.css';

function HowTo() {
  return (
    <div>
        <BackImage />
        <HowToLiveWith />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-how-to' 
        src={"/images/background.jpg"} 
        alt='backgroundimg'/>
    )
  }

function HowToLiveWith() {
    return (
        <div className='border-living'>
            <div className='h2-how-to'>
                <h2>Przykazania cukrzyka</h2>
            </div>
              <p className='p-how-to'>
                Naucz się odróżniać sygnały, jakie daje ci organizm. Wzmożone pragnienie, nadmierna senność, zmęczenie, problem z widzeniem, napady głodu, częste oddawanie moczu, gwałtowne pocenie się, nudności, przyspieszone bicie serca mogą być objawem, że grozi ci przecukrzenie lub niedocukrzenie. 
                Pierwsze prowadzi do zapaści lub ataku serca, drugie do utraty przytomności i śpiączki <br /> <br />
                Kontroluj poziom cukru przed jedzeniem lub podaniem insuliny lub 1,5 do 2 godzin po jedzeniu. Sprawdzaj go za pomocą glukometru lub tzw. ciągłego monitoringu glikemii (CGM). Pierwsza metoda jest tańsza, druga pozwala uniknąć częstego nakłuwania palców. <br /> <br />
                Przestrzegaj dokładnie zaleceń lekarza dotyczących brania leków czy podawania insuliny. <br /> <br />
                Informuj każdego lekarza, u którego się leczysz, że jesteś cukrzykiem i jakie leki bierzesz. Pamiętaj, że niektóre leki podwyższają zapotrzebowanie na insulinę. <br /> <br />
                Utrzymuj dietę, którą ustalisz z lekarzem. Nie pij alkoholu, wyeliminuj cukier z diety. <br /> <br />
                Ruszaj się, uprawiaj sport. Ruch dobrze wpływa na wrażliwość organizmu na insulinę, na poziom cukru we krwi, na metabolizm, stany depresyjne, powoduje utratę masy ciała. 
                Dlatego stanowi podstawowy element terapii w cukrzycy. Ale to, jak ćwiczysz, też trzeba omówić z lekarzem, bo niektóre formy wysiłku mogą Ci zaszkodzić. 
                Trenuj bezpiecznie, by nie doszło do gwałtownego spadku cukru – hipoglikemii. <br /> <br />
                Bardzo ważna jest higiena. Kiedy krew jest słodka, nawet drobna ranka może się długo goić. <br /> <br />
                Regularnie sprawdzaj stężenie glukozy we krwi, jeśli nie bierzesz insuliny, to minimum 2 razy w miesiącu. <br />
                Co najmniej 4 razy w roku idź do diabetologa. <br />
                Raz na miesiąc zrób badanie moczu na obecność cukru i acetonu. <br />
                Raz na rok skontroluj: wydalanie białka z moczem, poziom mocznika i kreatyniny we krwi oraz cholesterol. <br />
                Staraj się schudnąć, a przynajmniej nie przytyć. <br />
              </p>
        </div>
    )
}

export default HowTo