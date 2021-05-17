import React from 'react';

const Card = (props) => {
  const classNames = props.className;
  return <section className={`card ${classNames}`}>{props.children}</section>;
};

export default Card;
