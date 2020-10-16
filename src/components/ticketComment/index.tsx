import React, { memo } from "react"
import "./style.scss"

const TicketComment: React.FC = () => {
    return (
        <section className="commentSection">
            <ul>
                <li>
                    <p>Probando como estas esto a ver klk como se van las cosas Probando como estas esto a ver klk como se van las cosas
                    Probando como estas esto a ver klk como se van las cosas
                    Probando como estas esto a ver klk como se van las cosas
                    Probando como estas esto a ver klk como se van las cosas
                    Probando como estas esto a ver klk como se van las cosas
                    </p>
                    <time>Sep 24 at 8:02pm</time>
                </li>
                <li>Esto</li>
                <li>A ver que tal</li>
            </ul>
            <input type="text" placeholder="Deja un comentario" />
        </section>
    )
}

export default memo(TicketComment);