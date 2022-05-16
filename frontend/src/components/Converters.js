import React from 'react';
import './Converters.css';
import './Body.css';
  
function Converters() {
  return (
    <div className="Converters">
        <BackImage />
        <FirstTable />
        <SecondTable />
        <ThirdTable />
        <FourthTable />
        <FifthTable />
        <SixthTable />
    </div>
  );
}

function FirstTable() {
  return (
    <div className='first-table'>
      <table>
        <tr>
          <th>Jedzenie</th>
          <th>Przelicznik</th>
          <th>Ilość</th>
        </tr>
        <tr>
          <td>Chleb pszenny</td>
          <td>20g = 1WW</td>
          <td>1 kromka</td>
        </tr>
        <tr>
          <td>Chleb graham</td>
          <td>25g = 1WW</td>
          <td>1 kromka</td>
        </tr>
        <tr>
          <td>Chleb żytni razowy</td>
          <td>25 g = 1WW </td>
          <td>1 kromka</td>
        </tr>
        <tr>
          <td>Chleb tostowy</td>
          <td>20 g = 1WW</td>
          <td>1 kromka</td>
        </tr>
        <tr>
          <td>Kajzerka</td>
          <td>20 g = 1WW</td>
          <td>1/2 bułki</td>
        </tr>
        <tr>
          <td>Bułka tarta</td>
          <td>15 g = 1WW</td>
          <td>1 łyżka stołowa</td>
        </tr>
      </table>
    </div>
  )
}

function SecondTable() {
  return (
    <div className='second-table'>
      <table>
        <tr>
          <th>Jedzenie</th>
          <th>Przelicznik</th>
          <th>Ilość</th>
        </tr>
        <tr>
          <td>Mleko</td>
          <td>200 g = 1WW </td>
          <td>1 szklanka</td>
        </tr>
        <tr>
          <td>Jogurt naturalny</td>
          <td>170 g = 1WW</td>
          <td>3/4 szklanki</td>
        </tr>
        <tr>
          <td>Jogurt truskawkowy</td>
          <td>130 g = 1WW</td>
          <td>1/2 szklanki</td>
        </tr>
        <tr>
          <td>Kefir</td>
          <td>200 g = 1WW</td>
          <td>1 szklanka</td>
        </tr>
        <tr>
          <td>Maślanka</td>
          <td>200 g = 1WW</td>
          <td>1 szklanka</td>
        </tr>
      </table>
    </div>
  )
}

function ThirdTable() {
  return (
    <div className='third-table'>
      <table>
        <tr>
          <th>Jedzenie</th>
          <th>Przelicznik</th>
          <th>Ilość</th>
        </tr>
        <tr>
          <td>Mąka</td>
          <td>15 g = 1WW</td>
          <td>2 łyżki</td>
        </tr>
        <tr>
          <td>Ryż gotowany</td>
          <td>45 g = 1WW </td>
          <td>2 łyżki</td>
        </tr>
        <tr>
          <td>Ryż surowy</td>
          <td>15 g = 1WW</td>
          <td>---</td>
        </tr>
        <tr>
          <td>Płatki owsiane</td>
          <td>15 g = 1WW</td>
          <td>2 łyżki</td>
        </tr>
        <tr>
          <td>Kasza manna</td>
          <td>15 g = 1WW</td>
          <td>3 łyżeczki </td>
        </tr>
        <tr>
          <td>Kasza jęczmienna</td>
          <td>15 g = 1WW</td>
          <td>3 łyżeczki</td>
        </tr>
        <tr>
          <td>Makaron gotowany</td>
          <td>45 g = 1WW</td>
          <td>1/2 szklanki</td>
        </tr>
      </table>
    </div>
  )
}

function FourthTable() {
  return (
    <div className='fourth-table'>
      <table>
        <tr>
          <th>Jedzenie</th>
          <th>Przelicznik</th>
          <th>Ilość</th>
        </tr>
        <tr>
          <td>Ananas</td>
          <td>100 g = 1WW </td>
          <td>2 plastry </td>
        </tr>
        <tr>
          <td>Arbuz</td>
          <td>120 g = 1WW </td>
          <td>1 plaster</td>
        </tr>
        <tr>
          <td>Banan </td>
          <td>80 g = 1WW</td>
          <td>1 banan</td>
        </tr>
        <tr>
          <td>Brzoskwinie</td>
          <td>100 g = 1WW </td>
          <td>1 brzoskwinia</td>
        </tr>
        <tr>
          <td>Cytryna</td>
          <td>170 g = 1WW</td>
          <td>2 średniej wielkości</td>
        </tr>
        <tr>
          <td>Czereśnie </td>
          <td>80 g = 1WW </td>
          <td>ok. 20sztk.</td>
        </tr>
        <tr>
          <td>Agrest </td>
          <td>120 g = 1WW </td>
          <td>1 szklanka</td>
        </tr>
      </table>
    </div>
  )
}

function FifthTable() {
  return (
    <div className='fifth-table'>
      <table>
        <tr>
          <th>Jedzenie</th>
          <th>Przelicznik</th>
          <th>Ilość</th>
        </tr>
        <tr>
          <td>Kukurydza </td>
          <td>100 g = 1WW </td>
          <td>½ kolby  </td>
        </tr>
        <tr>
          <td>Ziemniaki </td>
          <td>65 g = 1WW  </td>
          <td>1 średni</td>
        </tr>
        <tr>
          <td>Buraki</td>
          <td>200 g = 1WW </td>
          <td>4 małe</td>
        </tr>
        <tr>
          <td>Cebula </td>
          <td>200 g = 1WW </td>
          <td>2 duże</td>
        </tr>
        <tr>
          <td>Marchew </td>
          <td>200 g = 1WW </td>
          <td>4 duże</td>
        </tr>
        <tr>
          <td>Kalafior </td>
          <td>200 g = 1WW </td>
          <td>½ sztk. </td>
        </tr>
      </table>
    </div>
  )
}

function SixthTable() {
  return (
    <div className='sixth-table'>
      <table>
        <tr>
          <th>Jedzenie</th>
          <th>Przelicznik</th>
          <th>Ilość</th>
        </tr>
        <tr>
          <td>Kotlet mielony</td>
          <td>60 g = 1WW </td>
          <td>½ porcji </td>
        </tr>
        <tr>
          <td>Kotlet schabowy </td>
          <td>50 g = 1WW  </td>
          <td>½ porcji </td>
        </tr>
        <tr>
          <td>Pulpety </td>
          <td>80 g = 1WW  </td>
          <td>1 mała porcja </td>
        </tr>
        <tr>
          <td>Bigos  </td>
          <td>200 g = 1WW </td>
          <td>3 łyżki</td>
        </tr>
        <tr>
          <td>Pierogi z mięsem  </td>
          <td>40 g = 1WW</td>
          <td>1 sztuka </td>
        </tr>
      </table>
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-converters' 
      src={"/images/background.jpg"} 
      alt='backgroundimg'/>
    )
  }
  
export default Converters;