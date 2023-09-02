import React from 'react';
import './Modal.css';
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <AiOutlineClose style={{width:"50px", height:"50px", fill:"#f8821e"}}/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;