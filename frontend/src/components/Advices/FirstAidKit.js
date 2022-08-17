import React from 'react';
import './FirstAidKit.css';

function FirstAidKit() {
  return (
    <div>
        <FirstAidKitInformations />
    </div>
  )
}
  
  function FirstAidKitInformations() {
    return (
        <div className='box-aid-kit'>
            <div className='h2-aid-kit'>
              <div className='content'>
                <h2>Apteczka cukrzyka</h2>
            </div>
              <p className='p-aid-kit'>
                Dla cukrzyka ważna jest kontrola poziomu glukozy. <br />
                Sprawdza się to za pomocą tzw. pasków, czyli suchych testów albo glukometru. <br />
                Zazwyczaj przed posiłkiem lub podaniem insuliny, a potem 1,5-2 godzin po jedzeniu. <br />
                Jeśli wahania cukru są duże, pozom glukozy trzeba sprawdzać także w nocy. <br /> <br />
                Insulinę dobiera lekarz. <br />
                Jest krótko działająca, o średnim czasie działania i długim. <br />
                Pierwsza najlepiej działa przez 1-3 godziny po podaniu, druga przez 4-12, a trzecia ponad 24 godziny. <br />
                Insulina jest w ampułkach lub penach (urządzeniach przypominających długopisy). <br /> <br />
                <b>Insulinę przechowujemy:</b><br /><br />
                <b>w lodówce, w temperaturze 2-8 st. C</b><br />
                <b>z dala od światła słonecznego</b><br />
                <b>peny do miesiąca, otwartą fiolkę do 6 tygodni</b><br />
                <b>Jeśli insulina zamarza, zmieniła barwę lub konsystencję – nie nadaje się do użytku.</b>
              </p>
        </div>
        </div>
    )
}

export default FirstAidKit