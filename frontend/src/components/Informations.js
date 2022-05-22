import React from 'react'
import './Body.css';
import './Informations.css'

function Informations() {
  return (
    <div>
        <BackImage />
        <ImagesForInformations
          img='/images/question.jpg'/>
        <ImagesForTypesOfDiabetes
          img='/images/sugar.jpg' />
        <ImagesForTreatmentOfDiabetes
          img='/images/treatment.jpg' />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image' 
      src={"/images/background.jpg"} 
      alt='backgroundimg'/>
    )
  }

  function ImagesForInformations(props) {
    return (
      <div className='image-for-info'>
          <img
          src={props.img}
          alt='Informations'
          className='info-photo'
          />
          <div className='h2-position-info'>
          <h2>Czym jest cukrzyca?</h2>
          </div>
          <div className="image__overlay">
          <p className="image__description-info-1">
          Cukrzyca to przewlekła choroba metaboliczna charakteryzująca się przewlekłą hiperglikemią, gdzie trzustka nie produkuje wystarczającej ilości insuliny lub produkowana insulina nie jest prawidłowo wykorzystywana przez organizm.
          Nieleczona lub niewłaściwie leczona może stanowić przyczynę wielu niebezpiecznych powikłań.
          Częstotliwość występowania tej choroby na świecie stale rośnie, na co w istotnym stopniu wpływa zachodni styl życia.
          Cukrzyca to choroba której nie da się wyleczyć. Stosowane w dziesiejszych czasach leczenie ma na celu unormowanie poziomu glukozy we krwi, a tym samym zapewnienie prawidłowego funkcjonowania organizmu oraz zapobieganie chorobom.
          Nazwa "cukrzyca" pochodzi od łacińskich słów oznaczających "cedzenie wody przez ciało" oraz "słodki jak miód".  
          Oba te określenia dotyczą obiaw jakie przynosi ze sobą cukrzyca : wzmożone pragnienie czy częste oddawanie moczu.
          Cukrzyca to stan, gdzie organizm nie jest w stanie samodzielnie utrzymać poziomu glukozy (cukru) we krwi.
          Glukoza jest to główne źródło energii dla organizmu - każdy spożywany przez nas posiłek jest trawiony do glukozy, która następnie jest wchłaniana do krwi.
          </p>
          </div>
      </div>
    );
  }

  function ImagesForTypesOfDiabetes(props) {
    return (
      <div className='image-for-type'>
          <img
          src={props.img}
          alt='Types'
          className='info-photo'
          />
          <div className='h2-position-type'>
          <h2>Typy cukrzycy</h2>
          </div>
          <div className="image__overlay">
          <p className="image__description-info-2">
          Wyróżnia się cukrzycę typu 1, cukrzycę typu 2, cukrzycę ciążową oraz inne specyficzne typy cukrzycy. <br />
          <b>Cukrzyca typu 1</b> rozwija się ona w wyniku błędu układu odpornościowego, który z niewiadomych powodów niszczy zdrowe komórki trzustki produkujące insulinę. W wyniku tej autoagresji dochodzi do znacznych deficytów, bądź zupełnego braku insuliny w organizmie.
          Cukrzyca typu 1 diagnozowana jest głównie u dzieci i młodzieży. Wymaga leczenia insuliną oraz intensywnej samokontroli. <br />
          <b>Cukrzyca typu 2</b> to przykład schorzenia, która dotyka współczesne społeczeństwa z powodu epidemii nadwagi i otyłości, do których prowadzi niezdrowy stylu życia. Osoby z cukrzycą typu 2 zwykle mają nadmierną masę ciała, są mało aktywne fizycznie, a ich dieta obfituje w cukry proste.
          Trzustka osób z cukrzycą typu 2 w momencie diagnozy zwykle wydziela insulinę, ale albo jest jej zbyt mało, by mogła utrzymać właściwy poziom cukru we krwi. <br />
          <b>Cukrzyca ciążowa</b> to zaburzenia tolerancji glukozy, które po raz pierwszy pojawiły się w okresie ciąży. Podwyższony poziom cukru we krwi u ciężarnych powodowany jest zmianami hormonalnymi wynikającymi z rozwoju płodu.
          Podwyższone cukry, będące efektem cukrzycy ciążowej zwykle koryguje się przy pomocy diety bogatej opartej o węglowodany złożone, a limitującej cukry proste.

          </p>
          </div>
      </div>
    );
  }

  function ImagesForTreatmentOfDiabetes(props) {
    return (
      <div className='image-for-treatment'>
          <img
          src={props.img}
          alt='Treatment'
          className='info-photo'
          />
          <div className='h2-position-treatment'>
          <h2>Leczenie cukrzycy</h2>
          </div>
          <div className="image__overlay">
          <p className="image__description-info-3">
          Leczenie cukrzycy musi być zaplanowane i zaordynowane przez lekarza prowadzącego, który dobierze i określi ich odpowiednie dawki. 
          Leczenie cukrzycy polega przede wszystkim na przestrzeganiu prawidłowej diety, a  najczęściej również, zależnie od typu choroby i zaleceń lekarza, na przyjmowaniu leków i przyjmowaniu insuliny.
          Odpowiednia edukacja chorego też stanowi element leczenia. Ma to znaczenie przede wszystkim takie, że dzięki profesjonalnej wiedzy pacjent może odpowiednio zareagować w razie dostrzeżenia pierwszych niepokojących objawów, które mogą świadczyć o niewłaściwym poziomie cukru we krwi. 
          Osoba chora powinna nauczyć się kilku dodatkowych zasad m.in., jak różne spożywane produkty żywnościowe wpływają na stężenie glukozy we krwi.
          Aktywność fizyczna chorych na cukrzycę, wpływa korzystnie na wrażliwość na insulinę, kontrolę stężenia glukozy we krwi, profil lipidowy oraz sprzyja redukcji masy ciała. Zalecenia dotyczące różnych form aktywności fizycznej mogą się różnić zależnie od typu cukrzycy.
          Badanie stężenia glukozy we krwi w warunkach domowych umożliwia ocenę wyrównania cukrzycy na co dzień. Ustal z lekarzem plan badań, o jakich porach i jak często je wykonywać, jakie powinny być Twoje docelowe wartości stężenia glukozy we krwi, jak postępować w przypadku za wysokich wartości i niedocukrzenia i jak im zapobiegać.
          </p>
          </div>
      </div>
    );
  }

export default Informations