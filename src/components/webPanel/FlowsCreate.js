import React, { useEffect, useState } from 'react'
import Dropdown from 'react-dropdown'
import { useNavigate } from 'react-router-dom';
import { CreatePanelBox } from '../../Styles/Styled';
import configData from "../../config.json";
import FlowInfo from '../../Models/Flowinfo';

export default function FlowsCreate() {
    const [incomming, setIncomming] = useState('');
    const [outgoing, setOutgoing] = useState('');
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
        FlowInfo(incomming, [], outgoing, "sendMessage", ["Geiki"], ["Pepe laugh", "https://i.imgflip.com/1tecgr.jpg"], ["https://discord.com/api/webhooks/950657239482523699/M8oItZHSTnDzm_z5ZiexrkXWzcryOJzCJUG72sGxWLk3erQQRx__dO2VsEpdUwyAyOLP"])
      )
      console.log(res)
      navigate("/panel")
    }

    useEffect(() => {
      const fetchData = async () => {
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
      fetchData()
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
    </>
  )
}
