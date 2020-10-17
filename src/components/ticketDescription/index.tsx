import React, { memo, useContext, useState } from "react"
import { Dropdown } from 'primereact/dropdown'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { DropDownItems } from "../../models/ticket"
import { Ticket } from '../../models/ticket';
import { Token } from '../../models/token';
import { TICKET_STATUS, MODAL_MODE } from '../../constants'

import { API } from "../../constants/api"
import "./style.scss"
import UserContext from "../../context/userContext"

const TicketSchema = Yup.object().shape({
    title: Yup.string().min(10, 'Muy corto').required('Requerido'),
    description: Yup.string().min(10, 'Muy corto').required('Requerido'),
    status: Yup.mixed().oneOf(Object.keys(TICKET_STATUS))
})

type CreateTicketsFormType = {
    title: string;
    description: string;
    status: string;
}

type TicketDescriptionProps = {
    mode: string;
    onClose: () => void;
    ticket?: Ticket | null;
}

const handleSubmit = async (values: CreateTicketsFormType) => {
    const token = localStorage.getItem('token')

    if (token) {
        const parsedToken: Token = JSON.parse(token);
        const url = API.createTicket
        const body = new URLSearchParams()

        body.append('title', values.title)
        body.append('description', values.description)

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: body,
                headers: {
                    Authorization: `Bearer ${parsedToken.accessToken}`,
                },
            });
            const result = await response.json()
            if (result)
                console.log('Result ', result)
        } catch (error) {
            console.error(error)
        }
    }
};

const TicketDescription: React.FC<TicketDescriptionProps> = ({ mode, ticket, onClose }: TicketDescriptionProps) => {
    const { data } = useContext(UserContext);
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
                    title: ticket?.title ? ticket.title : '',
                    description: ticket?.description ? ticket.description : '',
                    status: ticket?.status ? ticket.status : TICKET_STATUS.OPEN
                }}
                validationSchema={TicketSchema}
                onSubmit={(values) => {
                    handleSubmit(values)
                    onClose()
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <Field name="title" id="title" placeholder="Titulo del ticket" className="inputElement" disabled={mode === MODAL_MODE.DETAIL ? true : false} />
                        <p className="errorParagraph"><ErrorMessage name="title" /></p>
                        <Field name="description" id="description" placeholder="Descripcion del ticket" as="textarea" className="inputElement" disabled={mode == MODAL_MODE.DETAIL ? true : false} />
                        <p className="errorParagraph"><ErrorMessage name="description" /></p>
                        {mode !== MODAL_MODE.CREATE && data?.isAdmin &&
                            <section className="selectSection">
                                <h3>Estado: </h3>
                                <Dropdown optionLabel="status" value={values.status} options={dropDownItems} onChange={e => setFieldValue("status", e.value)} placeholder="Estado del ticket" style={{ width: "180px" }} />
                            </section>
                        }
                        <button type="submit">{mode === MODAL_MODE.CREATE ? 'Crear' : 'Editar'} ticket</button>
                    </Form>
                )}
            </Formik>
        </section>
    )
}

export default memo(TicketDescription);