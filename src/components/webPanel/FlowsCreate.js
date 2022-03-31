import React, { useState } from 'react'
import Dropdown from 'react-dropdown'
import { useNavigate } from 'react-router-dom';
import { CreatePanelBox } from '../../Styles/Styled';
import configData from "../../config.json";

export default function FlowsCreate() {
    const [incomming, setIncomming] = useState('');
    const [outgoing, setOutgoing] = useState('');

    const navigate = useNavigate();

    async function sendData(data = {}, url = '/flow/change') {

      const response = await fetch(`${configData.API}${url}`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `${sessionStorage.getItem('token')}`,
              'Access-Control-Allow-Origin': '*'

          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',

          body: JSON.stringify(data)
        })
        console.log(response)
        if(response.status === 200){
          return response.json()
        }
        console.log("Not ok")
    }

    const handleIncommingChange = (e) => {
      setIncomming(e.value)
    }

    const handleOutgoingChange = (e) => {
      setOutgoing(e.value)
    }

    function PostData(){
      sendData({
        "Incomming": {incomming},
        "Outgoing": {outgoing},
      })
      navigate("/panel")
    }

  return (
    <>
    <CreatePanelBox>
      <Dropdown
        label="Incomming" 
        options={[
          { label: 'Github', value: 'githubinc'},
          { label: 'Slack message', value: 'slackmessageinc'},
          { label: 'Time Based', value: 'timer'}
        ]}
        value={incomming}
        onChange={handleIncommingChange}
        placeholder="Select an incomming point"
      />

      <Dropdown
        label="Incomming" 
        options={[
          { label: 'Github', value: 'githubout'},
          { label: 'Slack message', value: 'slackmessageout'},
          { label: 'Discord message', value: 'discout'}
        ]}
        value={outgoing}
        onChange={handleOutgoingChange}
        placeholder="Select an outgoing point"
      />
      <button type="submit" onClick={PostData}>Create Flow</button>
    </CreatePanelBox>
    </>
  )
}
