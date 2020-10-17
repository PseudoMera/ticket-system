import React, { ChangeEvent, memo, useState, useEffect } from "react"
import { Comment } from '../../models/comment';
import { API } from "../../constants/api"
import "./style.scss"
import { Token } from "../../models/token";

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
    id: number | undefined;
    comments?: Comment[];
}

const TicketComment: React.FC<TicketCommentProps> = ({ id, comments }: TicketCommentProps) => {
    const [value, setValue] = useState<string>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleSubmit = async (value: string) => {
        const token = localStorage.getItem('token')
        if (token && id) {
            const parsedToken: Token = JSON.parse(token);
            const url = `${API.createComment}/${id}/comment`
            const body = new URLSearchParams()

            body.append('body', value)

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
    }

    useEffect(() => {
        console.log('Comments')
        console.log(comments)
    }, [])

    return (
        <section className="commentSection">
            <ul>
                {(comments === undefined || comments.length === 0) && <h3>No se han hecho comentarios</h3>}
                {comments?.map(comment => (
                    <li className="comment" key={comment.id}>
                        <div className="commentHeader">
                            <h4>{`${comment.user.firstName} ${comment.user.lastName}`}</h4>
                            <time>{comment.createdAt}</time>
                        </div>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
            <div>
                <input type="text" placeholder="Deja un comentario" onChange={(e) => handleChange(e)} value={value} />
                <button type="submit" onClick={() => {
                    console.log('Se clickeo aqui')
                    handleSubmit(value)
                }}>Comentar</button>
            </div>
        </section>
    )
}

export default TicketComment;