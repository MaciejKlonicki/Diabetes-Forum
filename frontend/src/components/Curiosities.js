import React from 'react';
import './Curiosities.css';

function Curiosities() {
  return (
    <div>
        <BackImage />
        <CuriositiesInformations1
          img='/images/curiosities-1.jpg'/>
        <CuriositiesInformations2
          img='/images/curiosities-2.jpg'/>
        <CuriositiesInformations3
          img='/images/curiosities-3.jpg'/>
        <CuriositiesInformations4
          img='/images/curiosities-4.jpg'/>
        <CuriositiesInformations5
          img='/images/curiosities-5.jpg'/>
        <CuriositiesInformations6
          img='/images/curiosities-6.jpg'/>
        <CuriositiesInformations7
          img='/images/curiosities-7.jpg'/>
        <CuriositiesInformations8
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

function CuriositiesInformations1(props) {
    return (
      <div className='image-for-curiosities-1'>
          <img
          src={props.img}
          alt='Curiosities'
          className='curiosities-photo'
          />
          <div className="image__overlay-curiosities">
          <p className="image__description-curiosities-1">
            Szacuje się, że w samej Polsce nadwagę i otyłość ma prawie 2/3 społeczeństwa.
            Pomimo że otyłość brzuszna to najpoważniejszy czynnik ryzyka wystąpienia cukrzycy typu II, nie oznacza to, że nie dotyka ona osób szczupłych.
          </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformations2(props) {
    return (
      <div className='image-for-curiosities-2'>
          <img
          src={props.img}
          alt='Curiosities-2'
          className='curiosities-photo-2'
          />
          <div className="image__overlay-curiosities-2">
          <p className="image__description-curiosities-2">
          Przewiduje się że liczba zgonów z powodu cukrzycy zwiększy się o 50% w ciągu kolejnych 10 lat.
          </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformations3(props) {
    return (
      <div className='image-for-curiosities-3'>
          <img
          src={props.img}
          alt='Curiosities-3'
          className='curiosities-photo-3'
          />
          <div className="image__overlay-curiosities-3">
          <p className="image__description-curiosities-3">
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

  function CuriositiesInformations4(props) {
    return (
      <div className='image-for-curiosities-4'>
          <img
          src={props.img}
          alt='Curiosities-4'
          className='curiosities-photo-4'
          />
          <div className="image__overlay-curiosities-4">
          <p className="image__description-curiosities-4">
          <b>Trzeci typ cukrzycy to cukrzyca ciążowa</b><br />
            Ten typ cukrzycy charakteryzuje się
            hiperglikemią, oraz podwyższonym
            poziomem cukru we krwi podczas
            ciąży, z wartością powyżej normy ale
            poniżej poziomu charakterystycznego
            dla cukrzycy właściwej.
            Kobiety cierpiące na cukrzycę
            ciążową są w grupie zwiększonego
            ryzyka powikłań podczas ciąży i
            porodu. Ponadto są one także
            narażone na zachorowanie na
            cukrzycę typu 2 w przyszłości.
          </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformations5(props) {
    return (
      <div className='image-for-curiosities-5'>
          <img
          src={props.img}
          alt='Curiosities-5'
          className='curiosities-photo-5'
          />
          <div className="image__overlay-curiosities-5">
          <p className="image__description-curiosities-5">
            Za 50% do 80% zgonów
            wśród osób cierpiących na cukrzycę
            odpowiedzialne są choroby układu krążenia.
          </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformations6(props) {
    return (
      <div className='image-for-curiosities-6'>
          <img
          src={props.img}
          alt='Curiosities-6'
          className='curiosities-photo-6'
          />
          <div className="image__overlay-curiosities-6">
          <p className="image__description-curiosities-6">
          Cukrzyca spowodowała 4,2 miliona zgonów na całym świecie w 2019 roku.
          </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformations7(props) {
    return (
      <div className='image-for-curiosities-7'>
          <img
          src={props.img}
          alt='Curiosities-7'
          className='curiosities-photo-7'
          />
          <div className="image__overlay-curiosities-7">
          <p className="image__description-curiosities-7">
          Cukrzyca prowadzi do ślepoty, amputacji oraz niewydolności nerek.
          </p>
          </div>
      </div>
    );
  }

  function CuriositiesInformations8(props) {
    return (
      <div className='image-for-curiosities-8'>
          <img
          src={props.img}
          alt='Curiosities-8'
          className='curiosities-photo-8'
          />
          <div className="image__overlay-curiosities-8">
          <p className="image__description-curiosities-8">
          Obecnie nie ma możliwości wyleczenia cukrzycy.
          </p>
          </div>
      </div>
    );
  }

export default Curiosities
