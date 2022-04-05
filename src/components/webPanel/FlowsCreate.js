import React, { useEffect, useState } from 'react'
import Dropdown from 'react-dropdown'
import { useNavigate } from 'react-router-dom';
import { CreateFlowGrid, CreatePanelBox } from '../../Styles/Styled';
import configData from "../../config.json";
import FlowInfo from '../../Models/Flowinfo';
import EditBox from '../univeralComponents/Editbox';


export default function FlowsCreate() {
  // useReducer
    const [incomming, setIncomming] = useState('');
    const [outgoing, setOutgoing] = useState('');
    const [action, setAction] = useState('');
    const [contentRequired, setContReq] = useState([]);
    const [contentOptional, setContOpt] = useState([]);
    const [optionsOptional, setOptOpt] = useState([]);
    const [optionsRequired, setOptReq] = useState([]);
    const [routes, setRoutes] = useState([]);
    const [actions, setActions] = useState([]);
    const [actionArray, setActionArray] = useState([]);
    const [currentAction, setCurrentAction] = useState([]);

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
      let incArray = []
      console.log(actionArray)
      let flag = 0
      for(let i = 0; i < actionArray.length || flag === 0; i++){
        if(actionArray[i].name === e.value){
          flag = 1
          for(let j = 0; j < actionArray[i].executeAction.length; j++){
            incArray.push({label: actionArray[i].executeAction[j], value: actionArray[i].executeAction[j]})
          }
        }
      }
      setCurrentAction(incArray)
      setOutgoing(e.value)
    }

    const handleActionChange = (e) => {
      setAction(e.value)
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
        
        await fetch(`${api_url}/info`, {
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
          CreateRoutes(res.routes)
          setActionArray(res.actions)
          CreateActions(res.actions)
        })

      }
      if(isSubbed){
        fetchData()
      }
      return () => isSubbed = false
    }, []);

    function CreateRoutes(route = []) {
      let incomRoutes = []
      for(let i = 0; i < route.length; i++){
        console.log(route[i])
        incomRoutes.push({label: route[i].platform, value: route[i].platform});
      }

      
      console.log(incomRoutes);
      setRoutes(incomRoutes)
    }

    function CreateActions(actionArray = []) {
      let incomActions = []
      for(let i = 0; i < actionArray.length; i++){
        console.log(actionArray[i])
        incomActions.push({label: actionArray[i].name, value: actionArray[i].name});
      }

      
      console.log(incomActions);
      setActions(incomActions);
    }

  return (
    <>
    <CreatePanelBox>
      <Dropdown
        label="Incomming" 
        options={routes}
        value={incomming}
        onChange={handleIncommingChange}
        placeholder="Select an incomming point"
      />

      <Dropdown
        label="Incomming" 
        options={actions}
        value={outgoing}
        onChange={handleOutgoingChange}
        placeholder="Select an outgoing point"
      />
      <Dropdown
        label="Action" 
        options={currentAction}
        value={action}
        onChange={handleActionChange}
        placeholder="Select an action"
      />
      <button type="submit" onClick={PostData}>Create Flow</button>
    </CreatePanelBox>
    <CreateFlowGrid>
    <div>
      <h3>Content required</h3>
      <EditBox route={setContReq} isArray={true}/>
    </div>
    <div>
      <h3>Content optional</h3>
      <EditBox route={setContOpt} isArray={true}/>
    </div>
    <div>
      <h3>Options required</h3>
      <EditBox route={setOptReq} isArray={true}/>
    </div>
    <div>
      <h3>Options optional</h3>
      <EditBox route={setOptOpt} isArray={true}/>
    </div>
    </CreateFlowGrid>
    </>
  )
}
