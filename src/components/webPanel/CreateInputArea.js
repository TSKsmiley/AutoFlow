import React, { useEffect } from 'react'
import EditBox from '../univeralComponents/Editbox'

export default function CreateInputArea(props) {
  return (
    <div>
      <h3>{props.text}</h3>
      <EditBox route={props.inpFunc} index={props.index} value={props.inpValue}/>
    </div>
  )
}
