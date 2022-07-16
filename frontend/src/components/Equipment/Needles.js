import React from 'react';
import './Needles.css';

function Needles() {
  return (
    <div>
        <BackImage />
        <InformationAboutNeedles
        img='/images/igly-1.png' />
        <InformationAboutNeedles2 
        img='/images/igly-2.png' />
        <InformationAboutNeedles3 
        img='/images/igly-3.png' />
        <InformationAboutNeedles4 
        img='/images/igly-4.png' />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-needles' 
      src={"/images/background.jpg"} 
      alt='backgroundimg'/>
    )
  }

  function InformationAboutNeedles(props) {
    return (
        <div className='image-for-needles-1'>
          <img
          src={props.img}
          alt='Needlesr-1'
          className='needles-1-photo'
          />
          <div className='h2-position-needles-1'>
          <h2>Igły Verifine 32G 0,23mm x 4mmt</h2>
          </div>
          <p className="image__description-needles-1">
          Trójwarstwowe ścianki poddane wewnętrznemu elektroszlifowi oraz pokryte warstwą silikonu zapewniają łatwą i niemal bezbolesną penetrację skóry i iniekcję insuliny.
          Igły Verifine są produktem sterylnym dzięki naświetlaniu EO. Służą do jednorazowego użytku.
          Igły do penów Verifine pasują do wszystkich powszechnie stosowanych wstrzykiwaczy insuliny i hormonu wzrostu.
          Mogą być stosowane zarówno u dzieci i dorosłych.
          Precyzyjnie wykonany gwint osady igły gwarantuje łatwość nakręcania i zdejmowania igły z pena insulinowego.
          </p>
        </div>
    )
}

function InformationAboutNeedles2(props) {
    return (
        <div className='image-for-needles-2'>
          <img
          src={props.img}
          alt='Needlesr-2'
          className='needles-2-photo'
          />
          <div className='h2-position-needles-2'>
          <h2>Igły Verifine 32G 0,23mm x 6mm</h2>
          </div>
          <p className="image__description-needles-2">
            Igły do penów insulinowych Verifine to najnowszy produkt kanadyjskiej firmy Promisemed . Dzięki wykonaniu w technologii cienkich ścianek (TWT) zapewniają łatwiejszy i szybszy przepływ insuliny.
            Trójwarstwowe ścianki poddane wewnętrznemu elektroszlifowi oraz pokryte warstwą silikonu zapewniają łatwą i niemal bezbolesną penetrację skóry i iniekcję insuliny.
            Igły Verifine są produktem sterylnym dzięki naświetlaniu EO. Służą do jednorazowego użytku.
            Precyzyjnie wykonany gwint osady igły gwarantuje łatwość nakręcania i zdejmowania igły z pena insulinowego.
          </p>
        </div>
    )
}

function InformationAboutNeedles3(props) {
    return (
        <div className='image-for-needles-3'>
          <img
          src={props.img}
          alt='Needlesr-3'
          className='needles-3-photo'
          />
          <div className='h2-position-needles-3'>
          <h2>Igły PIC Insupen 32G 8mm</h2>
          </div>
          <p className="image__description-needles-3">
            Wysokiej jakości igły, które minimalizują dyskomfort podczas zastrzyków. Przeznaczone do stosowania wraz z urządzeniami do wstrzykiwania. Igły są jednorazowe, jałowe i nietoksyczne.
            Igły Insupen są potrójnie zaostrzone i szlifowane w trzech sekcjach, co zmniejsza tarcie podczas robienia zastrzyków. Dodatkowo w celu ułatwienia penetracji skóry podczas nakłucia pokryto je silikonem.
            Natomiast cienki profil zmniejsza odczucie dyskomfortu. Końcówka igły została poddana specjalnej obróbce, dzięki czemu przebija pojemnik z insuliną w sposób, który zapobiega zanieczyszczeniu leku.
          </p>
        </div>
    )
}

function InformationAboutNeedles4(props) {
    return (
        <div className='image-for-needles-4'>
          <img
          src={props.img}
          alt='Needlesr-4'
          className='needles-4-photo'
          />
          <div className='h2-position-needles-4'>
          <h2>Igły PIC Insupen 33G 4mm</h2>
          </div>
          <p className="image__description-needles-4">
            <b>Parametry techniczne: </b><br />
            Jałowe, niepirogenne, nietoksyczne, bez lateksu <br />
            Technologia cienkich ścianek: jeszcze większa średnica wewnętrzna przy zachowaniu takiej samej średnicy zewnętrznej pozwala na łatwiejszy i szybszy przepływ insuliny i w efekcie skraca czas wstrzyknięcia <br />
            Trzykrotne ostrzenie zapewniające łatwiejszą penetrację, zmniejszające do minimum dyskomfort pacjenta <br />
            Pokrycie igły silikonem zmniejszające opór igły podczas wstrzykiwania <br />
            Wyprodukowane w technologii anti-coring <br />
            Wyrób jednorazowego użytku
          </p>
        </div>
    )
}

export default Needles