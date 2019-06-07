import React from 'react';
import './FormError.sass'

const FormError = (props) => {
  return (
    <div className='form-errors'>
      {Object.keys(props.formErrors).map((fieldName, i) => {
        if(props.formErrors[fieldName].length > 0){
          return (
            <p key={i}>{fieldName} {props.formErrors[fieldName]}</p>
          )
        } else {
          return '';
        }
      })}
    </div>
  )
}

export default FormError
