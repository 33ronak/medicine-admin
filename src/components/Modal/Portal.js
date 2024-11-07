import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Portal.css";

const Portal = ({ children, onClose }) => {
    const el = useRef(document.createElement("div"));

    useEffect(() => {
        const portalRoot = document.getElementById("portal-root");
        portalRoot.appendChild(el.current);
        return () => {
            portalRoot.removeChild(el.current);
        };
    }, []);

    return ReactDOM.createPortal(
        <div className="portal-overlay" onClick={onClose}>
            <div className="portal-content" onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>,
        el.current
    );
};

export default Portal;