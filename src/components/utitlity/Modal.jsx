import React from 'react';

const Modal = (props) => {
  const classNames = props.className;
  const hideShowHandler = props.hideShowHandler;
  return (
    <>
      <div className='modal-container' onClick={hideShowHandler} />
      <div className={`modal ${classNames}`}>{props.children}</div>
    </>
  );
};

export default Modal;
