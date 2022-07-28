import React from 'react';
import './Depression.css';

function Depression() {
  return (
    <div>
        <BackImage />
        <HowToLiveWith />
    </div>
  )
}

function BackImage() {
    return (
      <img className='background-image-depression' 
        src={"/images/background.jpg"} 
        alt='backgroundimg'/>
    )
  }

  function HowToLiveWith() {
    return (
        <div className='box-how-to'>
          <div className='content'>
            <div className='h2-how-to'>
                <h2>Depresja cukrzyka</h2>
            </div>
            <p className='p-how-to'>
                <b>Często zdarza się, że osoba chora na cukrzycę ma depresję i inne problemy psychiczne, a to wpływa z kolei na jej zachowanie i zdolność do przestrzegania diety i zaleceń lekarza.</b><br /><br />
                <b>Możliwe problemy psychiczne cukrzyka:</b><br /> <br />
                <b>Zespół lęku napadowego</b> inaczej lęk paniczny – przed chorobą, jej konsekwencjami, utratą kontroli. Objawy to m.in. przyspieszony rytm serca (tachykardia), zbyt szybki i głęboki oddech (hiperwentylacja), duszności, dreszcze, rozstrój żołądka, zawroty głowy, bóle w klatce piersiowej, poczucie obcości. Może pojawić się agorafobia (lęk przed otwartą przestrzenią). Najczęściej u pacjentów z cukrzycą typu I. <br/><br/>
                <b>Lęk uogólniony</b> przed codziennymi wydarzeniami i problemami. Objawy to napięcie mięśniowe, bóle, niepokój i zdenerwowanie, reagowanie irytacją, brak odprężenia, bezsenność, poczucie braku stabilności i braku kontroli nad życiem. Chory może odczuwać uderzenia gorąca i zimna, mdleć. Najczęstsze u osób z cukrzycą typu II. <br/><br/>
                <b>Fobia społeczna</b>, czyli lęk przed ludźmi, wiąże się z unikaniem sytuacji społecznych. Połączony jest z niskim poczuciem własnej wartości i przeświadczeniem o nieprzystosowaniu. U osób z cukrzycą typu II. <br/><br/>
                <b>Zachowania nerwicowe</b>: zbyt częste pomiary stężenia glukozy lub unikanie pomiarów, lęk czy wkłucie pompy insulinowej było odpowiednie, złe interpretacje wyników, obsesyjne myśli, potrzeba ciągłej kontroli i perfekcjonizm. <br/><br/>
                <b>Depresja</b> – może być i skutkiem, i przyczyną cukrzycy. Zwiększa dwukrotnie ryzyko zachorowania na cukrzycę typu II. Choruje na nią ok. 30% cukrzyków. Depresja powoduje, że chorzy mają większe problemy z kontrolą choroby, stosowaniem się do zaleceń dotyczących diety i trybu życia.<br/><br/>
            </p>
        </div>
        </div>
    )
}

export default Depression