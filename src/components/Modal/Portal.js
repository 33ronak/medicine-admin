import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Portal.css"

const Portal = ({ children, onClose }) => {
    const el = useRef(document.createElement("div"));

    useEffect(() => {
        const portalRoot = document.getElementById("portal-root");
        portalRoot.appendChild(el.current);
        return () => {
            portalRoot.removeChild(el.current);
        };
    }, []);

    return createPortal(
        <div className="portal-overlay" onClick={onClose}>
            <div className="portal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        el.current
    );
};

export default Portal;