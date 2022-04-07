import React from 'react'
import { Box, CopyButton, DeleteButton, LeftText } from '../../Styles/Styled'
import configData from '../../config'

export default function FlowComponent(props) {
  let routes = `${configData.API}/actions`
  function CopyToClip(){
    navigator.clipboard.writeText(`${routes}/${props.from}/${props.id}`)
  }

  async function DeleteFlow(){
    console.log("Deleting")
    fetch(`${configData.API}/flow`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${sessionStorage.getItem('token')}`
      },

      body: JSON.stringify({
        "flowToken": props.id
      })
    })

    props.setUpdate(props.update + 1)
  }


  return (
    <div>
        <Box>
            <LeftText>{props.from} &#8594;</LeftText>
            <LeftText>{props.to}</LeftText>
            <DeleteButton type='button' onClick={DeleteFlow}></DeleteButton>
            <CopyButton type="button" onClick={CopyToClip}>Copy To Clipboard</CopyButton>
        </Box>
    </div>
  )
}