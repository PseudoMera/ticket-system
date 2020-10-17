import React, { memo } from "react"
import { Comment } from '../../models/comment';
import "./style.scss"

type CommentProps = {
    comment?: Comment;
}

const CommentItem: React.FC<CommentProps> = ({ comment }: CommentProps) => {
    return (
        <li className="comment">
            <p>{comment?.body}</p>
            <time>{comment?.createdAt}</time>
        </li>
    )
}

type TicketCommentProps = {
    comments?: Comment[];
}

const TicketComment: React.FC<TicketCommentProps> = ({ comments }: TicketCommentProps) => {
    return (
        <section className="commentSection">
            <ul>
                {comments ? comments?.map(comment => (
                    <li className="comment" key={comment.id}>
                        <div className="commentHeader">
                            <h4>Juan Rodriguez</h4>
                            <time>24 sept 2018</time>
                        </div>
                        <p>alksndalknd</p>
                    </li>
                )) : <h3>No se han hecho comentarios</h3>}
            </ul>
            <input type="text" placeholder="Deja un comentario" />
        </section>
    )
}

export default memo(TicketComment);