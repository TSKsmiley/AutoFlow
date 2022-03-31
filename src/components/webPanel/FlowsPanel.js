import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddButton, MainPanelGrid } from '../../Styles/Styled'
import FlowComponent from './FlowComponent'
import configData from "../../config.json";

export default function FlowsPanel() {
    const [flows, setFlows] = useState(null)
    const api_url = `${configData.API}/flow/change` // maybe not right url

    const navigate = useNavigate();
    
    const defaultFlows = {
      flows: []
    }

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const fetchData = async () => {
      let data = await fetch(api_url, {
        method: 'GET',
        headers: {
          'Authorization': `${sessionStorage.getItem('token')}`
        }
      })
      .then(async (result) => {
        if(!result.ok){
        console.log("Not ok")
        setFlows(defaultFlows.flows)
        throw new Error('Did not connect to the server!')
      }
      console.log(await result.json())
      //setFlows(result) 
      })

    }
    fetchData()
  }, [api_url, defaultFlows.flows, flows])



    function handleOnClick(){
      navigate("/createPanel")
      //setFlows([...flows, {}])
    }

  return (
    <MainPanelGrid>
        { flows?.map((element, i) => (
          <FlowComponent from={element.from} to={element.to} key={i}/>
        ))}
        
        <AddButton type='button' onClick={handleOnClick}>
        </AddButton>
      

    </MainPanelGrid>
  )
}
