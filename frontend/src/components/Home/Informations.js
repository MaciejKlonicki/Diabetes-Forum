import React from 'react'
import './Informations.css'

function Informations() {
  return (
    <div>
        <ImagesForInformations
          img='/images/question.jpg'/>
        <ImagesForTypesOfDiabetes
          img='/images/sugar.jpg' />
        <ImagesForTreatmentOfDiabetes
          img='/images/treatment.jpg' />
    </div>
  )
}

  function ImagesForInformations(props) {
    return (
      <div style={{position: "fixed", top: "50%", left: "250px", 
      height: "600px", width: "380px", transform: "translate(-50%, -50%)", textAlign: "center"}}>
          <img
          src={props.img}
          alt='Informations'
          className='info-photo'
          />
          <div style={{position: "absolute", bottom: "0%", 
          left: "15%", color: "white", width: "350px", height: "650px"}}>
          <h2>Czym jest cukrzyca?</h2>
          </div>
          <div className="image__overlay">
          <p className='image__description'>
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
      <div style={{position: "fixed", top: "50%", left: "870px", 
      height: "600px", width: "380px", transform: "translate(-50%, -50%)", textAlign: "center"}}>
          <img
          src={props.img}
          alt='Types'
          className='info-photo'
          />
          <div style={{position: "absolute", bottom: "0%", 
          left: "15%", color: "white", width: "350px", height: "650px"}}>
          <h2>Typy cukrzycy</h2>
          </div>
          <div className="image__overlay">
          <p className='image__description'>
          Wyróżnia się cukrzycę typu 1, cukrzycę typu 2, cukrzycę ciążową oraz inne specyficzne typy cukrzycy. <br />
          <b>Cukrzyca typu 1</b> rozwija się ona w wyniku błędu układu odpornościowego, który z niewiadomych powodów niszczy zdrowe komórki trzustki produkujące insulinę. W wyniku tej autoagresji dochodzi do znacznych deficytów, bądź zupełnego braku insuliny w organizmie.
          Cukrzyca typu 1 diagnozowana jest głównie u dzieci i młodzieży. Wymaga leczenia insuliną oraz intensywnej samokontroli. <br />
          <b>Cukrzyca typu 2</b> to przykład schorzenia, która dotyka współczesne społeczeństwa z powodu epidemii nadwagi i otyłości, do których prowadzi niezdrowy styl życia. Osoby z cukrzycą typu 2 zwykle mają nadmierną masę ciała, są mało aktywne fizycznie, a ich dieta obfituje w cukry proste.
          Trzustka osób z cukrzycą typu 2 w momencie diagnozy zwykle wydziela insulinę, ale albo jest jej zbyt mało, by mogła utrzymać właściwy poziom cukru we krwi. <br />
          <b>Cukrzyca ciążowa</b> to zaburzenia tolerancji glukozy, które po raz pierwszy pojawiły się w okresie ciąży. Podwyższony poziom cukru we krwi u ciężarnych powodowany jest zmianami hormonalnymi.

          </p>
          </div>
      </div>
    );
  }

  function ImagesForTreatmentOfDiabetes(props) {
    return (
      <div style={{position: "fixed", top: "50%", left: "1520px", 
      height: "600px", width: "380px", transform: "translate(-50%, -50%)", textAlign: "center"}}>
          <img
          src={props.img}
          alt='Treatment'
          className='info-photo'
          />
          <div style={{position: "absolute", bottom: "0%", 
          left: "15%", color: "white", width: "350px", height: "650px"}}>
          <h2>Leczenie cukrzycy</h2>
          </div>
          <div className="image__overlay">
          <p className='image__description'>
          Leczenie cukrzycy musi być zaplanowane i zaordynowane przez lekarza, który dobierze i określi ich odpowiednie dawki. 
          Leczenie cukrzycy polega przede wszystkim na przestrzeganiu prawidłowej diety, a  najczęściej również, zależnie od typu choroby i zaleceń lekarza, na przyjmowaniu leków i przyjmowaniu insuliny.
          Odpowiednia edukacja chorego też stanowi element leczenia. Ma to znaczenie przede wszystkim takie, że dzięki profesjonalnej wiedzy pacjent może odpowiednio zareagować w razie dostrzeżenia pierwszych niepokojących objawów, które mogą świadczyć o niewłaściwym poziomie cukru we krwi. 
          Osoba chora powinna nauczyć się kilku dodatkowych zasad m.in., jak różne spożywane produkty żywnościowe wpływają na stężenie glukozy we krwi.
          Aktywność fizyczna chorych na cukrzycę, wpływa korzystnie na wrażliwość na insulinę, kontrolę stężenia glukozy we krwi, profil lipidowy oraz sprzyja redukcji masy ciała. Zalecenia dotyczące różnych form aktywności fizycznej mogą się różnić zależnie od typu cukrzycy.
          Badanie stężenia glukozy we krwi w warunkach domowych umożliwia ocenę wyrównania cukrzycy na co dzień. Ustal z lekarzem plan badań, o jakich porach i jak często je wykonywać.
          </p>
          </div>
      </div>
    );
  }

export default Informations;