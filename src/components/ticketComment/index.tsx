import React, { memo } from "react"
import "./style.scss"

type CommentProps = {
    body: string;
    createdAt: Date;
}

const Comment: React.FC<CommentProps> = ({ body, createdAt }: CommentProps) => {

    return (
        <li className="comment">
            <p>{body}</p>
            <time>{createdAt}</time>
        </li>
    )
}

const TicketComment: React.FC = () => {
    return (
        <section className="commentSection">
            <ul>
            </ul>
            <input type="text" placeholder="Deja un comentario" />
        </section>
    )
}

export default memo(TicketComment);