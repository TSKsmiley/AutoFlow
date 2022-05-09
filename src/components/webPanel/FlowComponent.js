import React from 'react'
import { Box, CopyButton, DeleteButton, FlowFlex, LeftText } from '../../Styles/Styled'
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
      <Box>
          <FlowFlex>
            <LeftText>{props.from} &#8594; {props.to}</LeftText>
            <DeleteButton type='button' onClick={DeleteFlow}>X</DeleteButton>
          </FlowFlex>
          <CopyButton type="button" onClick={CopyToClip}>Copy To Clipboard</CopyButton>
      </Box>
  )
}