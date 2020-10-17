import React, { useEffect } from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"
import TicketComment from "../../components/ticketComment"
import TicketDescription from "../../components/ticketDescription"
import "./style.scss"

type TicketDetailParams = {
    id?: string;
};

type TicketDetailProps = RouteComponentProps<TicketDetailParams>;

const Detail: React.FC<TicketDetailProps> = ({ match }: TicketDetailProps) => {
    const { id } = match.params
    useEffect(() => {
        console.log('ID', id)
    }, [])
    return (
        <div>
            <div className="detailContainer">
                <TicketDescription viewOnly={false} />
                <TicketComment />
            </div>
        </div>
    )
}

export default withRouter(Detail);