import React from 'react'
import './SmallSpinner.css'


const SmallSpiner = (props) => {

  if (props.background === 'true') {
    return (
      <div className='spinner-dackground'>
        <div className="lds-css-small ng-scope-small">
          <div className="lds-gear-small" >
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="lds-css-small ng-scope-small">
        <div className="lds-gear-small" >
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }

}

export default SmallSpiner
