import emailjs from "emailjs-com";
import React from 'react';
import './Body.css';
import './Contact.css';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_hq8h6wh', 'template_4aysgbv', e.target, 'user_oUsHt9lVnpNH0nhyLaFoH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    function BackImage() {
        return (
          <img className='background-image' 
          src={"/images/background.jpg"} 
          alt='backgroundimg'/>
        )
      }

    return(
        <div>
            <div className="container">
            <BackImage />
            <form onSubmit={sendEmail}>
                        <div className="name-holder">
                            <input type="text" className="form-control" placeholder="Nazwa" name="name"/>
                        </div>
                            <input type="email" className="form-control" placeholder="E-mail" name="email"/>
                            <input type="text" className="form-control" placeholder="Temat" name="subject"/>
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Wiadomość" name="message"></textarea>
                            <input type="submit" className="btn btn-info" value="Wyślij"></input>
                </form>
            </div>
        </div>
    )
}