import React, { useEffect, useState } from 'react'
import Dropdown from 'react-dropdown'
import { useNavigate } from 'react-router-dom';
import { CreateFlowGrid, CreatePanelBox } from '../../Styles/Styled';
import configData from "../../config.json";
import FlowInfo from '../../Models/Flowinfo';
import EditBox from '../univeralComponents/Editbox';
import CreateInputArea from './CreateInputArea';


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
    const [incBool, setIncBool] = useState(false);
    const [outBool, setOutBool] = useState(false);
    const [actionBool, setActionBool] = useState(false);
    const [contReq, setReq] = useState();
    const [contOpt, setOpt] = useState();
    const [optOpt, setOptionalOpt] = useState();
    const [optReq, setOptionalReq] = useState();

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
      setIncBool(true)
    }

    const handleOutgoingChange = (e) => {
      let incArray = []
      let tempContentReq = []
      let tempContentOpt = []
      let tempOptionsReq = []
      let tempOptionsOpt = []
      console.log(actionArray)
      let flag = 0
      for(let i = 0; i < actionArray.length || flag === 0; i++){
        if(actionArray[i].name === e.value){
          flag = 1
          for(let j = 0; j < actionArray[i].executeAction.length; j++){
            incArray.push({label: actionArray[i].executeAction[j], value: actionArray[i].executeAction[j]})
          }
          if(actionArray[i].content.requiredFields !== undefined) {
            for(let k = 0; k < actionArray[i].content.requiredFields.length; k++){
              tempContentReq.push(actionArray[i].content.requiredFields[k])
            }
          }
          if(actionArray[i].content.optionalFields !== undefined) {
            for(let k = 0; k < actionArray[i].content.optionalFields.length; k++){
              tempContentOpt.push(actionArray[i].content.optionalFields[k])
            }
          }
          if(actionArray[i].options.requiredFields !== undefined) {
            for(let k = 0; k < actionArray[i].options.requiredFields.length; k++){
              tempOptionsReq.push(actionArray[i].options.requiredFields[k])
            }
          }
          if(actionArray[i].options.optionalFields !== undefined) {
            for(let k = 0; k < actionArray[i].optionalFields.optionalFields.length; k++){
              tempOptionsOpt.push(actionArray[i].options.optionalFields[k])
            }
          }
        }
      }
      setReq(tempContentReq)
      setOpt(tempContentOpt)
      setOptionalReq(tempOptionsReq)
      setOptionalOpt(tempOptionsOpt)
      setCurrentAction(incArray)
      setActionBool(false)
      setAction("")
      setOutgoing(e.value)
      setOutBool(true)
    }

    const handleActionChange = (e) => {
      setAction(e.value)
      setActionBool(true)
    }

    function PostData(){
      if(actionBool && outBool && incBool){
        let res = sendData(
          FlowInfo(incomming, [], outgoing, action, contentRequired, contentOptional, optionsRequired, optionsOptional)
        )
        console.log(res) 
        navigate("/panel")
      }
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
    <h2>Required</h2>
    <CreateFlowGrid>
    {contReq?.map((i) => <CreateInputArea key={i} text={"text"} inpFunc={setContReq}/>)}
    {optReq?.map((i) => <CreateInputArea key={i} text={"text"} inpFunc={setOptReq}/>)}
    </CreateFlowGrid>
    <h2>Optional</h2>
    <CreateFlowGrid>
    {contOpt?.map((i) => <CreateInputArea key={i} text={"text"} inpFunc={setContOpt}/>)}
    {optOpt?.map((i) => <CreateInputArea key={i} text={"text"} inpFunc={setOptOpt}/>)}
    </CreateFlowGrid>
    </>
  )
}
