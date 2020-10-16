import React, { memo, useState } from "react"
import { Dropdown } from 'primereact/dropdown'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { DropDownItems } from "../../models/ticket"
import { TICKET_STATUS } from '../../constants'
import "./style.scss"

const TicketSchema = Yup.object().shape({
    title: Yup.string().min(10, 'Muy corto').required('Requerido'),
    description: Yup.string().min(10, 'Muy corto').required('Requerido'),
    status: Yup.mixed().oneOf(Object.keys(TICKET_STATUS))
})

type TicketDescriptionProps = {
    viewOnly: boolean
}

const TicketDescription: React.FC<TicketDescriptionProps> = ({ viewOnly }: TicketDescriptionProps) => {
    const [dropDownItems, _] = useState<Array<DropDownItems>>(() => {
        let initialValue = []
        for (const [key, value] of Object.entries(TICKET_STATUS)) {
            let result = value[0] + value.substring(1).toLocaleLowerCase().replace('_', ' ')
            initialValue.push({ status: result, value: key })
        }
        return initialValue
    })
    return (
        <section>
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
                        <Field name="title" id="title" placeholder="Titulo del ticket" className="inputElement" disabled={viewOnly ? true : false} />
                        <p className="errorParagraph"><ErrorMessage name="title" /></p>
                        <Field name="description" id="description" placeholder="Descripcion del ticket" as="textarea" className="inputElement" disabled={viewOnly ? true : false} />
                        <p className="errorParagraph"><ErrorMessage name="description" /></p>
                        <section className="selectSection">
                            <h3>Estado: </h3>
                            <Dropdown optionLabel="status" value={values.status} options={dropDownItems} onChange={e => setFieldValue("status", e.value)} placeholder="Estado del ticket" style={{ width: "180px" }} disabled={viewOnly ? true : false} />
                        </section>
                        <button type="submit">Crear ticket</button>
                    </Form>
                )}
            </Formik>
        </section>
    )
}

export default memo(TicketDescription);