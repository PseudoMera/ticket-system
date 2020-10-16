import React from "react"
import "./style.scss"
import TicketComment from "../../components/ticketComment"
import TicketDescription from "../../components/ticketDescription"

const Detail: React.FC = () => {
    return (
        <div>
            <div className="detailContainer">
                <TicketDescription />
                <TicketComment />
            </div>
        </div>
    )
}

export default Detail;