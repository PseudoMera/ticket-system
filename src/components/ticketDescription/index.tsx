import React, { memo, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Dropdown } from 'primereact/dropdown'
import { TICKET_STATUS } from '../../constants'
import "./style.scss"

const TicketSchema = Yup.object().shape({
    title: Yup.string().min(10, 'Muy corto').required('Requerido'),
    description: Yup.string().min(10, 'Muy corto').required('Requerido'),
    status: Yup.mixed().oneOf(Object.keys(TICKET_STATUS))
})

type DropItems = {
    status: string;
    value: string;
}

const TicketDescription: React.FC = () => {
    const [dropDownItems, _] = useState<Array<DropItems>>(() => {
        let initialValue = []
        for (const [key, value] of Object.entries(TICKET_STATUS)) {
            let result = value[0] + value.substring(1).toLocaleLowerCase().replace('_', ' ')
            initialValue.push({ status: result, value: key })
        }
        return initialValue
    })
    return (
        <div>
            <h1>Ticket Description</h1>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    status: TICKET_STATUS.OPEN
                }}
                validationSchema={TicketSchema}
                onSubmit={console.log}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <Field name="title" id="title" placeholder="Titulo del ticket" className="inputElement" />
                        <ErrorMessage name="title" />
                        <Field name="description" id="description" placeholder="Descripcion del ticket" as="textarea" className="inputElement" />
                        <ErrorMessage name="title" />
                        <section className="selectSection">
                            <h3>Estado: </h3>
                            <Dropdown optionLabel="status" value={values.status} options={dropDownItems} onChange={e => setFieldValue("status", e.value)} placeholder="Estado del ticket" style={{ width: "180px" }} />
                        </section>
                        <ErrorMessage name="status" />
                        <button type="submit">Crear ticket</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default memo(TicketDescription);