import React from 'react';
import './Validation.sass'


const Validation = (props) => {
  return (
    <div className="valid-error"><p>{props.text}</p></div>
  )
}

export default Validation
