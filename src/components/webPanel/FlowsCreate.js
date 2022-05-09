import React, { useEffect, useReducer } from 'react'
import Dropdown from 'react-dropdown'
import { useNavigate } from 'react-router-dom';
import { CreateFlowButton, CreateFlowGrid, CreatePanelBox, DropdownDiv, PriorityText, WebPanelBackground } from '../../Styles/Styled';
import configData from "../../config.json";
import FlowInfo from '../../Models/Flowinfo';
import CreateInputArea from './CreateInputArea';

const initialState = {
  incomming: "",
  outgoing: "",
  action: "",
  contentRequired: [],
  contentOptional: [],
  optionsOptional: [],
  optionsRequired: [],
  routes: [],
  actions: [],
  actionArray: [],
  currentAction: [],
  incBool: false,
  outBool: false,
  actionBool: false,
  contReq: [],
  contOpt: [],
  optOpt: [],
  optReq: [],
}

function reducer(state, action){
  switch(action.type){
    case "handleOutgoingChangeAction": {
      let incArray = []
      let tempContentReq = []
      let tempContentOpt = []
      let tempOptionsReq = []
      let tempOptionsOpt = []
      let flag = 0
      for(let i = 0; i < state.actionArray.length || flag === 0; i++){
        if(state.actionArray[i].name === action.payload){
          flag = 1
          for(let j = 0; j < state.actionArray[i].executeAction.length; j++){
            incArray.push({label: state.actionArray[i].executeAction[j], value: state.actionArray[i].executeAction[j]})
          }
          if(state.actionArray[i].content.requiredFields !== undefined) {
            for(let k = 0; k < state.actionArray[i].content.requiredFields.length; k++){
              tempContentReq.push(state.actionArray[i].content.requiredFields[k])
            }
          }
          if(state.actionArray[i].content.optionalFields !== undefined) {
            for(let k = 0; k < state.actionArray[i].content.optionalFields.length; k++){
              tempContentOpt.push(state.actionArray[i].content.optionalFields[k])
            }
          }
          if(state.actionArray[i].options.requiredFields !== undefined) {
            for(let k = 0; k < state.actionArray[i].options.requiredFields.length; k++){
              tempOptionsReq.push(state.actionArray[i].options.requiredFields[k])
            }
          }
          if(state.actionArray[i].options.optionalFields !== undefined) {
            for(let k = 0; k < state.actionArray[i].options.optionalFields.length; k++){
              tempOptionsOpt.push(state.actionArray[i].options.optionalFields[k])
            }
          }
        }
      }
      state.contReq = tempContentReq
      state.contOpt = tempContentOpt
      state.optReq = tempOptionsReq
      state.optOpt = tempOptionsOpt
      state.currentAction = incArray
      state.actionBool = false
      state.action = ""
      state.outgoing = action.payload
      state.outBool = true
      return state 
    }
    case "handleIncommingChangeAction": {
      state.incomming = action.payload
      state.incBool = true
      return state
    }
    case "handleActionChangeAction": {
      state.action = action.payload
      state.actionBool = true
      return state
    }
    case "createActionsAndRoutes": {
      CreateRoutes(action.payload.routes)
      state.actionArray = action.payload.actions
      CreateActions(action.payload.actions)

      function CreateRoutes(route = []) {
        let incomRoutes = []
        for(let i = 0; i < route.length; i++){
          incomRoutes.push({label: route[i].platform, value: route[i].platform});
        }

        state.routes = incomRoutes
      }
  
      function CreateActions(actionArray = []) {
        let incomActions = []
        for(let i = 0; i < actionArray.length; i++){
          incomActions.push({label: actionArray[i].name, value: actionArray[i].name});
        }

        state.actions = incomActions
      }
      return state
    }
    case "setContRequired": {
      if(state.contentRequired.length < action.index){
        for(let i = 0; i < action.index; i++){
          state.contentRequired.splice(i, 0, undefined)
        }
      }
      state.contentRequired.splice(action.index, 1, action.payload)
      return state
    }
    case "setContOptional": {
      if(state.contentOptional.length < action.index){
        for(let i = 0; i < action.index; i++){
          state.contentOptional.splice(i, 0, undefined)
        }
      }
      state.contentOptional.splice(action.index, 1, action.payload)
      return state
    }
    case "setOptRequired": {
      if(state.optionsRequired.length < action.index){
        for(let i = 0; i < action.index; i++){
          state.optionsRequired.splice(i, 0, undefined)
        }
      }
      state.optionsRequired.splice(action.index, 1, action.payload)
      return state
    }
    case "setOptOptional": {
      if(state.optionsOptional.length < action.index){
        for(let i = 0; i < action.index; i++){
          state.optionsOptional.splice(i, 0, undefined)
        }
      }
      state.optionsOptional.splice(action.index, 1, action.payload)
      return state
    }
    default:
      throw new Error()
  }
}

export default function FlowsCreate() {
  // useReducer
    const [state, dispatch] = useReducer(reducer, initialState)
  // Forces update since state does not understand that the state gets updated, and thereby not re rendering
    const [_,forceUpdate] = useReducer((x) => {return x+1},0)

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
        if(response.status === 200){
          return await response.json()
        }
    }

    const handleIncommingChange = (e) => {
      dispatch({type: "handleIncommingChangeAction", payload: e.value})
    }


    const handleOutgoingChange = (e) => {
      dispatch({type: 'handleOutgoingChangeAction', payload: e.value})
      forceUpdate()
    }

    const handleActionChange = (e) => {
      dispatch({type: 'handleActionChangeAction', payload: e.value})
    }

    function PostData(){
      if(state.actionBool && state.outBool && state.incBool){
        let res = sendData(
          FlowInfo(state.incomming, [], state.outgoing, state.action, state.contentRequired, state.contentOptional, state.optionsRequired, state.optionsOptional)
        )

        if(state.incomming === "Slack") {
          window.location.replace('https://api.aau-sw.dk/auth/slack')
        }

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
            throw new Error('Did not connect to the server!')
          }
          let res = await result.json()
          dispatch({type: "createActionsAndRoutes", payload: res})
          forceUpdate()
          
        })

      }
      if(isSubbed){
        fetchData()
      }
      return () => isSubbed = false
    }, []);

    function setContReq(e, index){
      dispatch({type: "setContRequired", payload: e, index: index})
      forceUpdate()
    }

    function setOptReq(e, index) {
      dispatch({type: "setOptRequired", payload: e, index: index})
      forceUpdate()
    }

    function setContOpt(e, index) {
      dispatch({type: "setContOptional", payload: e, index: index})
      forceUpdate()
    }

    function setOptOpt(e, index) {
      dispatch({type: "setOptOptional", payload: e, index: index})
      forceUpdate()
    }


  return (
    <WebPanelBackground>
      <CreatePanelBox>
        <DropdownDiv>
          <Dropdown
            label="Incoming" 
            options={state.routes}
            value={state.incomming}
            onChange={handleIncommingChange}
            placeholder="Select an incoming point"
          />
        </DropdownDiv>
        <DropdownDiv>
          <Dropdown
            label="Incoming" 
            options={state.actions}
            value={state.outgoing}
            onChange={handleOutgoingChange}
            placeholder="Select an outgoing point"
          />
        </DropdownDiv>
        <DropdownDiv>
          <Dropdown
            label="Action" 
            options={state.currentAction}
            value={state.action}
            onChange={handleActionChange}
            placeholder="Select an action"
          />
        </DropdownDiv>
        <div>
          <CreateFlowButton type="submit" onClick={PostData}>Create Flow</CreateFlowButton>
        </div>
      </CreatePanelBox>
      <PriorityText>Required</PriorityText>
      <CreateFlowGrid>
        {state.contReq?.map((element, i) => <CreateInputArea key={i} index={i} text={element} inpFunc={setContReq} inpValue={state.contentRequired}/>)}
        {state.optReq?.map((element, i) => <CreateInputArea key={i} index={i} text={element} inpFunc={setOptReq} inpValue={state.optionsRequired}/>)}
      </CreateFlowGrid>
      <PriorityText>Optional</PriorityText>
      <CreateFlowGrid>
        {state.contOpt?.map((element, i) => <CreateInputArea key={i} index={i} text={element} inpFunc={setContOpt} inpValue={state.contentOptional}/>)}
        {state.optOpt?.map((element, i) => <CreateInputArea key={i} index={i} text={element} inpFunc={setOptOpt} inpValue={state.optionsOptional}/>)}
      </CreateFlowGrid>
    </WebPanelBackground>
  )
}
