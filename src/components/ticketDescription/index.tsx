import React, { memo, useState } from "react"
import { Dropdown } from 'primereact/dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { TICKET_STATUS } from '../../constants'
import "./style.scss"

const TicketDescription: React.FC = () => {
    const [status, setStatus] = useState("")
    const [description, setDescription] = useState("")
    return (
        <Container>
            <Row sm={12}>
                <h2>Nombre usuario</h2>
            </Row>
            <Row sm={12}>
                <div className="dropdownSelector">
                    <h3>Estatus</h3>
                    <Dropdown value={status} options={TICKET_STATUS} onChange={(e) => { setStatus(e.value) }} placeholder="Select a Status" />
                </div>
            </Row>
            <Row sm={12}>
                <input className="descriptionInput" type="text" value={description} onChange={(e) => {
                    setDescription(e.target.value)
                }} />
            </Row>
        </Container>
    )
}

export default memo(TicketDescription);