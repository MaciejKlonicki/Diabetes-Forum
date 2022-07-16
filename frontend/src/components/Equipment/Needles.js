import React from 'react';
import './Needles.css';

function Needles() {
  return (
    <div>
        <BackImage />
        <InformationAboutNeedleVerifine4mm
        img='/images/igly-1.png' />
        <InformationAboutNeedleVerifine6mm
        img='/images/igly-2.png' />
        <InformationAboutNeedleInsupen8mm
        img='/images/igly-3.png' />
        <InformationAboutNeedleInsupen4mm
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

  function InformationAboutNeedleVerifine4mm(props) {
    return (
        <div className='image-for-needles-verifine4mm'>
          <img
          src={props.img}
          alt='Needless-verifine4mm'
          className='needles-verifine4mm-photo'
          />
          <div className='h2-position-needles-verifine4mm'>
          <h2>Igły Verifine 32G 0,23mm x 4mmt</h2>
          </div>
          <p className="image__description-needles-verifine4mm">
          Trójwarstwowe ścianki poddane wewnętrznemu elektroszlifowi oraz pokryte warstwą silikonu zapewniają łatwą i niemal bezbolesną penetrację skóry i iniekcję insuliny.
          Igły Verifine są produktem sterylnym dzięki naświetlaniu EO. Służą do jednorazowego użytku.
          Igły do penów Verifine pasują do wszystkich powszechnie stosowanych wstrzykiwaczy insuliny i hormonu wzrostu.
          Mogą być stosowane zarówno u dzieci i dorosłych.
          Precyzyjnie wykonany gwint osady igły gwarantuje łatwość nakręcania i zdejmowania igły z pena insulinowego.
          </p>
        </div>
    )
}

function InformationAboutNeedleVerifine6mm(props) {
    return (
        <div className='image-for-needles-verifine6mm'>
          <img
          src={props.img}
          alt='Needless-verifine6mm'
          className='needles-verifine6mm-photo'
          />
          <div className='h2-position-needles-verifine6mm'>
          <h2>Igły Verifine 32G 0,23mm x 6mm</h2>
          </div>
          <p className="image__description-needles-verifine6mm">
            Igły do penów insulinowych Verifine to najnowszy produkt kanadyjskiej firmy Promisemed . Dzięki wykonaniu w technologii cienkich ścianek (TWT) zapewniają łatwiejszy i szybszy przepływ insuliny.
            Trójwarstwowe ścianki poddane wewnętrznemu elektroszlifowi oraz pokryte warstwą silikonu zapewniają łatwą i niemal bezbolesną penetrację skóry i iniekcję insuliny.
            Igły Verifine są produktem sterylnym dzięki naświetlaniu EO. Służą do jednorazowego użytku.
            Precyzyjnie wykonany gwint osady igły gwarantuje łatwość nakręcania i zdejmowania igły z pena insulinowego.
          </p>
        </div>
    )
}

function InformationAboutNeedleInsupen8mm(props) {
    return (
        <div className='image-for-needles-insupen8mm'>
          <img
          src={props.img}
          alt='Needless-insupen8mm'
          className='needles-insupen8mm-photo'
          />
          <div className='h2-position-needles-insupen8mm'>
          <h2>Igły PIC Insupen 32G 8mm</h2>
          </div>
          <p className="image__description-needles-insupen8mm">
            Wysokiej jakości igły, które minimalizują dyskomfort podczas zastrzyków. Przeznaczone do stosowania wraz z urządzeniami do wstrzykiwania. Igły są jednorazowe, jałowe i nietoksyczne.
            Igły Insupen są potrójnie zaostrzone i szlifowane w trzech sekcjach, co zmniejsza tarcie podczas robienia zastrzyków. Dodatkowo w celu ułatwienia penetracji skóry podczas nakłucia pokryto je silikonem.
            Natomiast cienki profil zmniejsza odczucie dyskomfortu. Końcówka igły została poddana specjalnej obróbce, dzięki czemu przebija pojemnik z insuliną w sposób, który zapobiega zanieczyszczeniu leku.
          </p>
        </div>
    )
}

function InformationAboutNeedleInsupen4mm(props) {
    return (
        <div className='image-for-needles-insupen4mm'>
          <img
          src={props.img}
          alt='Needless-insupen4mm'
          className='needles-insupen4mm-photo'
          />
          <div className='h2-position-needles-insupen4mm'>
          <h2>Igły PIC Insupen 33G 4mm</h2>
          </div>
          <p className="image__description-needles-insupen4mm">
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