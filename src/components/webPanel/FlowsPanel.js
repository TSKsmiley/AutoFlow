import React, { useEffect, useState } from 'react'
import { AddButton, MainPanelGrid } from '../../Styles/Styled'
import FlowComponent from './FlowComponent'
import { Box } from '../../Styles/Styled';

export default function FlowsPanel() {
    const [flows, setFlows] = useState(null)
    const api_url = "https://devapi.aau-sw.dk/flows/" // maybe not right url
    
    const defaultFlows = {
      flows: []
    }

    useEffect(() => {
      setFlows(defaultFlows.flows)
      return
      let data = fetch(api_url)
      .then(result => {
        result.json()
      })
      setFlows(data.flows)
      return
      
    }, [])



    function handleOnClick(){
      console.log(flows)
      setFlows([...flows, {}])
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
