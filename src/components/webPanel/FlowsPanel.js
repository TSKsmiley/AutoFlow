import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddButton, MainPanelGrid } from '../../Styles/Styled'
import FlowComponent from './FlowComponent'
import configData from "../../config.json";

export default function FlowsPanel() {
    const [flows, setFlows] = useState(null)
    const api_url = `${configData.API}/flows/` // maybe not right url

    const navigate = useNavigate();
    
    const defaultFlows = {
      flows: []
    }

    useEffect(() => {

      let data = fetch(api_url)
      .then(result => {
        if(!result.ok){
          setFlows(defaultFlows.flows)
          throw new Error('Did not connect to the server!')
        }
        result.json()
      })
      setFlows(data.flows)
      return
      
    }, [])



    function handleOnClick(){
      console.log(flows)
      navigate("/createPanel")
      //setFlows([...flows, {}])
    }
    
    
    
    
  console.log(defaultFlows.flows.length)

  return (
    <MainPanelGrid>
      {console.log(flows)}
        { flows?.map((element, i) => (
          <FlowComponent from={element.from} to={element.to} key={i}/>
        ))}
        
        <AddButton type='button' onClick={handleOnClick}>
        </AddButton>
      

    </MainPanelGrid>
  )
}
