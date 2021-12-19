import './Modal.css'
import React, { useRef, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Context = React.createContext();

export function ModalProvider({children}) {
    const modalRef = useRef()
    const [context, setContext] = useState();
    useEffect(() => {
        setContext(modalRef.current);
      }, []);

    return (
        <>
            <div ref={modalRef}/>
            <Context.Provider value={context}>{children}</Context.Provider>
        </>
    );
}


export function Modal({onClose, children}) {
    const modalNode = useContext(Context);

    return ( 
            modalNode ?
            ReactDOM.createPortal(
                    <div className="modal_backdrop" onClick={onClose}>
                        <div onClick={(e) => {e.stopPropagation()}} className="modal">
                            <div className="modal_header">
                                <span className="modal_close-button" onClick={onClose}>
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        xmlns="http://www.w3.org/2000/svg"
                                        ><line
                                        fill="none"
                                        stroke="#000"
                                        strokeWidth="1.1"
                                        x1="1"
                                        y1="1"
                                        x2="13"
                                        y2="13"
                                        /><line
                                        fill="none"
                                        stroke="#000"
                                        strokeWidth="1.1"
                                        x1="13"
                                        y1="1"
                                        x2="1"
                                        y2="13"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="modal-content">
                                {children}
                            </div>
                        </div>
                    </div>, modalNode
                )
            : null
    );
}
