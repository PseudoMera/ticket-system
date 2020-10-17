import React, { ChangeEvent, useState, useContext, useEffect } from "react"
import { Comment } from '../../models/comment';
import { API } from "../../constants/api"
import { Ticket } from '../../models/ticket';
import "./style.scss"
import { Token } from "../../models/token";
import UserContext from '../../context/userContext';

type CommentProps = {
    comment: Comment;
}

const CommentItem: React.FC<CommentProps> = ({ comment }: CommentProps) => {
    return (
        <li className="comment">
            <div className="commentHeader">
                <h4>{`${comment.user.firstName} ${comment.user.lastName}`}</h4>
                <time>{comment.createdAt}</time>
            </div>
            <p>{comment.body}</p>
        </li>
    )
}

type TicketCommentProps = {
    id: number | undefined;
}

const TicketComment: React.FC<TicketCommentProps> = ({ id }: TicketCommentProps) => {
    const { data } = useContext(UserContext);
    const [inputValue, setInputValue] = useState<string>("")
    const [tickets, setTickets] = useState<Ticket[] | null>(null);
    const [comments, setComments] = useState<Comment[]>();
    const token = localStorage.getItem('token')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const getTickets = async () => {
        const token = localStorage.getItem('token');

        if (token) {
            const parsedToken: Token = JSON.parse(token);
            const url = data?.isAdmin ? API.getAllTickets : API.tickets;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${parsedToken.accessToken}`,
                },
            });

            const parsedTickets: Ticket[] = await response.json();
            setTickets(parsedTickets);
        }
    };

    useEffect(() => {
        getTickets();
    }, []);

    useEffect(() => {
        if (tickets) {
            let ticket = tickets.filter(ticket => ticket.id === id)[0]
            console.log('Id que llego al ticketcomment component')
            console.log(id)
            if (ticket) {
                setComments(ticket.comments)
            }
        }
    }, [tickets])

    const handleSubmit = async (value: string) => {
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
                if (result) {
                    getTickets()
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <section className="commentSection">
            <ul>
                {(comments === undefined || comments.length === 0) && <h3>No se han hecho comentarios</h3>}
                {comments?.map(comment => (
                    <CommentItem comment={comment} key={comment.id} />
                ))}
            </ul>
            <div>
                <input type="text" placeholder="Deja un comentario" onChange={(e) => handleChange(e)} value={inputValue} />
                <button type="submit" onClick={() => {
                    console.log('Iniciamos')
                    handleSubmit(inputValue)
                    console.log('Acabamos')
                }}>Comentar</button>
            </div>
        </section>
    )
}

export default TicketComment;