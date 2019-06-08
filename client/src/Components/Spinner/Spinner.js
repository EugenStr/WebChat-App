import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='shape'>
      <div className="lds-css ng-scope"><div className="lds-wedges"><div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div></div>
    </div>
  )
}

export default Spinner
