import emailjs from "emailjs-com";
import React from 'react';
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

    return(
        <div>
            <div>
            <form onSubmit={sendEmail}>
                        <div className="name-holder">
                            <input type="text" className="form-control" placeholder="Nazwa użytkownika" required name="name"/>
                        </div>
                        <div className="email-holder">
                            <input type="email" className="form-control" placeholder="E-mail" required name="email"/>
                        </div>
                        <div className="text-holder">
                            <input type="text" className="form-control" placeholder="Temat" required name="subject"/>
                        </div>
                        <div className="form-holder">
                            <textarea className="form-control" id="" cols="80" rows="20" placeholder="Wiadomość" required name="message"></textarea>
                        </div>
                        <div className="submit-holder">
                            <button className="footer-button" value="Wyślij">Wyślij</button>
                        </div>
                </form>
            </div>
        </div>
    )
}