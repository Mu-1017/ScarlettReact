import React from 'react';
import './Contact.css';

function Contact() {
    // var tooptip = "Clcik to download résumé";
    return (
        <div id="contact-div" className="container">
            <div className="d-flex justify-content-center">
                <a className="icon" href='mailto: mutong1017@gmail.com' tooptip="mutong1017@gmail.com" target='_blank' rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/icon/email.png'} alt="Email"></img>
                </a>
                <a className="icon" href='https://www.linkedin.com/in/tong-mu/' tooltip="https://www.linkedin.com/in/tong-mu/" target='_blank' rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/icon/linkedin.png'} alt="LinkedIn"></img>
                </a>
                <a className="icon" href='https://www.facebook.com/tong.mu.92' tooltip="https://www.facebook.com/tong.mu.92" target='_blank' rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/icon/facebook.png'} alt="Facebook"></img>
                </a>
            </div>
            {/* <div className="container d-flex justify-content-center">
                <div className="icon" title={tooptip}>
                    <a href={process.env.PUBLIC_URL + '/Scarlett_Mu_Tong_Resume.docx'} target='_blank' rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/icon/doc.svg'} alt="Mu Tong Resume doc"></img>
                    </a>
                </div>
                <div className="icon" title={tooptip}>
                    <a href={process.env.PUBLIC_URL + '/Scarlett_Mu_Tong_Resume.pdf'} target='_blank' rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/icon/pdf.svg'} alt="Mu Tong Resume pdf"></img>
                    </a>
                </div>
            </div> */}
        </div>
    );
}
export default Contact;