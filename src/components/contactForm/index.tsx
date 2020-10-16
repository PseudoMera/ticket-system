import React, { memo, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import "./style.scss"

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(10, 'Muy corto').required('Requerido'),
    message: Yup.string().min(10, 'Muy corto').required('Requerido'),
    email: Yup.string().email('Correo electronico no valido').required('Requerido')
})

const ContactForm: React.FC = () => {
    return (
        <div className="contactContainer">
            <h2>¡Gracias por tu interés en contactarnos!</h2>
            <p>Completa el siguiente formulario y estaremos en contacto contigo a la mayor brevedad posible</p>
            <Formik
                initialValues={{
                    name: '',
                    message: '',
                    email: ''
                }}
                validationSchema={ContactSchema}
                onSubmit={console.log}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <div>
                            <div className="fieldGroup">
                                <label htmlFor="name">Nombre</label>
                                <Field name="name" id="name" placeholder="Nombre" />
                                <p className="errorParagraph"><ErrorMessage name="name" /></p>
                            </div>
                            <div className="fieldGroup">
                                <label htmlFor="email">Correo electrónico</label>
                                <Field name="email" id="email" placeholder="correo@email.com" />
                                <p className="errorParagraph"><ErrorMessage name="email" /></p>
                            </div>
                        </div>
                        <div className="fieldGroup">
                            <label htmlFor="message">Mensaje</label>
                            <Field name="message" id="message" placeholder="Mensaje" as="textarea" />
                            <p className="errorParagraph"><ErrorMessage name="message" /></p>
                        </div>
                        <button type="submit" className="sendButton">Enviar</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default ContactForm;