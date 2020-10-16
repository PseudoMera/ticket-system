import React from "react"
import ContactForm from "../../components/contactForm"
import './style.scss'

const Contact: React.FC = () => {
    return (
        <div className="contactMainContainer">
            <ContactForm />
            <img src="/undrawContact.svg" alt="contact image" className="contactImage" />
        </div>
    )
}

export default Contact