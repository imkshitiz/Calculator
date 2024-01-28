import React from 'react'
const Display = ({DisplayValue}) => {
  return <input className="display" 
  type="text"
   value={DisplayValue}
   readOnly/>
    
  
}

export default Display