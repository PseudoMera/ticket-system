import React, { useState, useEffect, useRef } from "react"
import { createPortal } from 'react-dom'
import './style.scss'

type ModalProps = {
    children: JSX.Element | JSX.Element[];
    onClose: () => void;
    width: string;
}

function Modal({ children, onClose, width }: ModalProps) {
    return (
        <div className="modalLayout">
            <div className="modalContent" style={{ width: width }}>
                <button className="modalButton" onClick={onClose}>X</button>
                <div className="modalChildren">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default function ModalPortal({ children, onClose, width }: ModalProps) {
    const ref = useRef<Element | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.getElementById('modal-root')
        setMounted(true)
    })

    return mounted ? createPortal(
        <Modal onClose={onClose} width={width}>
            {children}
        </Modal>, ref.current!) : null
}