import React from 'react';

const FormError = (props) => {
  return (
    <div className='formErrors'>
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
