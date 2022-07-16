import React from 'react';
import './Daily.css';

function Daily() {
  return (
    <div>
        <BackImage />
        <DailyRoutines />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-daily' 
      src={"/images/background.jpg"} 
      alt='backgroundimg'/>
    )
  }

function DailyRoutines() {
  return (
    <div>
      <div className='h2-daily'>
        <h2>Codzienność</h2>
      </div>
      <div>
        <p className='p-daily'>
          Podstawowym narzędziem, z którym diabetyk się nie rozstaje to glukometr.
          Jest to małe urządzenie przy pomocy, którego możemy oznaczyć aktualny poziom cukru we krwi.
          Kropla krwi nanoszona jest na pasek testowy. Na wyświetlaczu uzyskujemy wynik. <br />
          Na podstawie aktualnego poziomu, planowanego posiłku i aktywności fizycznej należy podjąć decyzję terapeutyczną odnośnie dawki insuliny, która aktualnie mamy podać.
          Czynności te wykonujemy przed każdym posiłkiem, kontrolnie po posiłkach, a także w sytuacjach nietypowych, jak stres, wysiłek fizyczny, złe samopoczucie, choroba.
          Poziom cukru we krwi należy oznaczać od kilku do kilkunastu razy na dobę. <br />
          Obecnie w połączeniu z nowoczesnymi aplikacjami na smartfony glukometr umożliwia dużo lepszą kontrolę cukrzycy. 
          Dostępne są również systemy monitoringu glikemii, które dają możliwość nieograniczonej kontroli aktualnego poziomu cukru – bez konieczności nakłuwania palca. 
          Sensor zakładamy raz na kilka dni, a wynik odczytujemy na pompach insulinowych, specjalnych czytnikach lub aplikacjach na telefony.
          Teraz pozostaje obliczyć, a następnie przyjąć dawkę insuliny potrzebną na dany moment. <br />
          Drogi podania insuliny są dwie. <br />
          Przy pomocy penów insulinowych lub przy użyciu pompy insulinowej. 
          Bardziej popularne są peny – przede wszystkim ze względu na koszty zakupu i użytkowania pompy insulinowej. 
          Pen z wyglądu przypomina długopis i dzięki niemu, po wbiciu do ciała małej igiełki, możemy podać odpowiednia dawkę leku – insuliny. 
          Takie zastrzyki w przypadku cukrzycy typu 1 to codzienność. 
          Diabetyk musi wykonać ich nawet kilka dziennie. <br />
          Jeżeli posiadamy pompę insulinową (do 26 roku życia pompy są refundowane), to wkłucie z igłą wymieniamy raz na 2 lub 3 dni. 
          Ogranicza to znacznie liczbę zastrzyków. 
          Wielkość dawki insuliny programujemy na urządzeniu, które następnie wtłacza lek do organizmu. 
          Czynności te powtarzamy wielokrotnie. Bez końca. <br />
          Cukrzyca wpływa na wiele aspektów naszego życia. 
          Pomiar cukru we krwi i podawanie leków to jej podstawa. 
          Świat mknie do przodu. Medycyna i dostępne metody diagnostyczne także cały czas się rozwijają i ewoluują. 
          Naukowcy pracują i dostarczają nowoczesne rozwiązania, które możemy stosować w leczeniu cukrzycy. 
          W dalszym ciągu jednak cukrzyca pozostaje chorobą nieuleczalną, a jedynym lekiem ratującym życie w przypadku cukrzycy typu 1 jest insulina. <br />
          Aktywność fizyczna jest ważną częścią prawidłowego, kompleksowego
          postepowania w profilaktyce wielu chorób, m.in. cukrzycy i otyłości.
          Regularne ćwiczenia fizyczne powodują obniżenie poziomu glukozy we
          krwi.
          Istotny jest każdy element codziennej aktywności, dlatego:<br />
          <b>zrezygnuj z windy, wchodź po schodach,</b><br />
          <b>spaceruj,</b><br />
          <b>jeśli jeździsz samochodem, zaparkuj dalej, jeżeli jeździsz autobusem,
          wysiadaj przystanek wcześniej lub późnej,</b><br />
          <b>wyrób nawyk regularnych ćwiczeń np. porannych</b><br />
        </p>
      </div>
    </div>
  )
}

export default Daily