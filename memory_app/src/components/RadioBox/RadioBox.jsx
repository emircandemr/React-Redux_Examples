import React from 'react'
import "./RadioBox.scss"

const RadioBox = ({name,selectedItem,onChange}) => {

    const isChecked = name === selectedItem 

  return (
    <div >
        <label className="rad-label">
            <input type="radio" className="rad-input" id={name} name={name} value={name}
             checked={isChecked} onChange={onChange}  />
            <div className="rad-design"></div>
            <div className="rad-text">{name}</div>
        </label>
        {/* <input className='radioBox' type="radio" id={name} name={name} value={name}
        checked={isChecked} onChange={onChange} />
        <label htmlFor={name} >{name}</label> */}
    </div>
  )
}

export default RadioBox