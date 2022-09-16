import React from 'react';
import './Curiosities.css';

function Curiosities() {
  return (
    <div>
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

function CuriositiesInformationFat(props) {
    return (
      <div className='image-for-curiosities-fat'>
          <img
            src={props.img}
            alt='Curiosities-fat'
            className='curiosities-photo'
          />
          <div className="image__overlay-curiosities-top">
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
            className='curiosities-photo'
          />
          <div className="image__overlay-curiosities-top">
            <p className="image__description-curiosities-top">
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
            className='curiosities-photo'
          />
          <div className="image__overlay-curiosities-top">
            <p className="image__description-curiosities-top">
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
            className='curiosities-photo'
          />
          <div className="image__overlay-curiosities-top">
            <p className="image__description-curiosities-top">
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
            className='curiosities-photo'
          />
          <div className="image__overlay-curiosities-bottom">
            <p className="image__description-curiosities-bottom">
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
            className='curiosities-photo'
          />
          <div className="image__overlay-curiosities-bottom">
            <p className="image__description-curiosities-bottom">
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
            className='curiosities-photo'
          />
          <div className="image__overlay-curiosities-bottom">
            <p className="image__description-curiosities-bottom">
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
            className='curiosities-photo'
          />
          <div className="image__overlay-curiosities-bottom">
            <p className="image__description-curiosities-bottom">
              Obecnie nie ma możliwości wyleczenia cukrzycy.
            </p>
          </div>
      </div>
    );  
  }

export default Curiosities
