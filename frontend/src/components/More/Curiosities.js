import React from 'react';
import './Curiosities.css';

function Curiosities() {
  return (
    <div>
        <BackImage />
        <CuriositiesInformationFat
          img='/images/curiosities-1.jpg'/>
        <CuriositiesInformationDie
          img='/images/curiosities-2.jpg'/>
        <CuriositiesInformationTypes
          img='/images/curiosities-3.jpg'/>
        <CuriositiesInformationPregnant
          img='/images/curiosities-4.jpg'/>
        <CuriositiesInformationPercent
          img='/images/curiosities-5.jpg'/>
        <CuriositiesInformationCount
          img='/images/curiosities-6.jpg'/>
        <CuriositiesInformationBlind
          img='/images/curiosities-7.jpg'/>
        <CuriositiesInformationTreatment
          img='/images/curiosities-8.jpg'/>
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-curiosities' 
        src={"/images/background.jpg"} 
        alt='backgroundimg'/>
    )
}

function CuriositiesInformationFat(props) {
    return (
      <div className='image-for-curiosities-fat'>
          <img
            src={props.img}
            alt='Curiosities-fat'
            className='curiosities-photo-fat'
          />
          <div className="image__overlay-curiosities-fat">
            <p className="image__description-curiosities-fat">
              Szacuje się, że w samej Polsce nadwagę i otyłość ma prawie 2/3 społeczeństwa.
              Pomimo że otyłość brzuszna to najpoważniejszy czynnik ryzyka wystąpienia cukrzycy typu II, nie oznacza to, że nie dotyka ona osób szczupłych.
            </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformationDie(props) {
    return (
      <div className='image-for-curiosities-die'>
          <img
            src={props.img}
            alt='Curiosities-die'
            className='curiosities-photo-die'
          />
          <div className="image__overlay-curiosities-die">
            <p className="image__description-curiosities-die">
              Przewiduje się że liczba zgonów z powodu cukrzycy zwiększy się o 50% w ciągu kolejnych 10 lat.
            </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformationTypes(props) {
    return (
      <div className='image-for-curiosities-types'>
          <img
            src={props.img}
            alt='Curiosities-types'
            className='curiosities-photo-types'
          />
          <div className="image__overlay-curiosities-types">
            <p className="image__description-curiosities-types">
              Typ 1 charakteryzuje się
              brakiem produkcji insuliny.
              Drugi typ cukrzycy jest
              rezultatem niewystarczającej
              produkcji insuliny przez organizm.
            </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformationPregnant(props) {
    return (
      <div className='image-for-curiosities-pregnant'>
          <img
            src={props.img}
            alt='Curiosities-pregnant'
            className='curiosities-photo-pregnant'
          />
          <div className="image__overlay-curiosities-pregnant">
            <p className="image__description-curiosities-pregnant">
              Trzeci typ cukrzycy to cukrzyca ciążowa<br />
            </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformationPercent(props) {
    return (
      <div className='image-for-curiosities-percent'>
          <img
            src={props.img}
            alt='Curiosities-percent'
            className='curiosities-photo-percent'
          />
          <div className="image__overlay-curiosities-percent">
            <p className="image__description-curiosities-percent">
              Za 50% do 80% zgonów
              wśród osób cierpiących na cukrzycę
              odpowiedzialne są choroby układu krążenia.
            </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformationCount(props) {
    return (
      <div className='image-for-curiosities-count'>
          <img
            src={props.img}
            alt='Curiosities-count'
            className='curiosities-photo-count'
          />
          <div className="image__overlay-curiosities-count">
            <p className="image__description-curiosities-count">
              Cukrzyca spowodowała 4,2 miliona zgonów na całym świecie w 2019 roku.
            </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformationBlind(props) {
    return (
      <div className='image-for-curiosities-blind'>
          <img
            src={props.img}
            alt='Curiosities-blind'
            className='curiosities-photo-blind'
          />
          <div className="image__overlay-curiosities-blind">
            <p className="image__description-curiosities-blind">
              Cukrzyca prowadzi do ślepoty, amputacji oraz niewydolności nerek.
            </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformationTreatment(props) {
    return (
      <div className='image-for-curiosities-treatment'>
          <img
            src={props.img}
            alt='Curiosities-treatment'
            className='curiosities-photo-treatment'
          />
          <div className="image__overlay-curiosities-treatment">
            <p className="image__description-curiosities-treatment">
              Obecnie nie ma możliwości wyleczenia cukrzycy.
            </p>
          </div>
      </div>
    );  
  }

export default Curiosities
