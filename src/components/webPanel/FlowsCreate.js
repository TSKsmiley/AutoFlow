import React, { useEffect, useState } from 'react'
import Dropdown from 'react-dropdown'
import { useNavigate } from 'react-router-dom';
import { CreatePanelBox } from '../../Styles/Styled';
import configData from "../../config.json";
import FlowInfo from '../../Models/Flowinfo';
import EditBox from '../univeralComponents/Editbox';


export default function FlowsCreate() {
    const [incomming, setIncomming] = useState('');
    const [outgoing, setOutgoing] = useState('');
    const [action, setAction] = useState('');
    const [contentRequired, setContReq] = useState([]);
    const [contentOptional, setContOpt] = useState([]);
    const [optionsOptional, setOptOpt] = useState([]);
    const [optionsRequired, setOptReq] = useState([]);

    const api_url = `${configData.API}/flow`

    const navigate = useNavigate();

    async function sendData(data = {}, url = '/flow') {


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
          return await response.json()
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
      let res = sendData(
        FlowInfo(incomming, [], outgoing, action, contentRequired, contentOptional, optionsRequired, optionsOptional)
      )
      console.log(res) 
      navigate("/panel")
    }

    useEffect(() => {
      let isSubbed = true

      const fetchData = async () => {
        if(!isSubbed) return

        await fetch(api_url, {
          method: 'GET',
          headers: {
            'Authorization': `${sessionStorage.getItem('token')}`
          }
        })
        .then(async (result) => {
          if(!result.ok){
            console.log("Not ok")
            throw new Error('Did not connect to the server!')
          }
          let res = await result.json()
          console.log(res)
  
        })

      }
      if(isSubbed){
        fetchData()
      }
      return () => isSubbed = false
    }, []);

  return (
    <>
    <CreatePanelBox>
      <Dropdown
        label="Incomming" 
        options={[
          { label: 'Github', value: 'Github'},
          { label: 'Slack message', value: 'Slack'},
          { label: 'Time Based', value: 'Timer'}
        ]}
        value={incomming}
        onChange={handleIncommingChange}
        placeholder="Select an incomming point"
      />

      <Dropdown
        label="Incomming" 
        options={[
          { label: 'Mail', value: 'Mail'},
          { label: 'Slack message', value: 'Slack'},
          { label: 'Discord message', value: 'Discord'}

        ]}
        value={outgoing}
        onChange={handleOutgoingChange}
        placeholder="Select an outgoing point"
      />
      <button type="submit" onClick={PostData}>Create Flow</button>
    </CreatePanelBox>
    <h3>Action</h3>
    <EditBox route={setAction}/>
    <h3>Content required</h3>
    <EditBox route={setContReq}/>
    <h3>Content optional</h3>
    <EditBox route={setContOpt}/>
    <h3>Options required</h3>
    <EditBox route={setOptReq}/>
    <h3>Options optional</h3>
    <EditBox route={setOptOpt}/>
    </>
  )
}
