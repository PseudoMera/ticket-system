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
                <li className="comment">
                    <p>alksndalknd</p>
                    <time>24 sept 2018</time>
                </li>
                <li className="comment">
                    <p>alksndalknd</p>
                    <time>24 sept 2018</time>
                </li>
            </ul>
            <input type="text" placeholder="Deja un comentario" />
        </section>
    )
}

export default memo(TicketComment);