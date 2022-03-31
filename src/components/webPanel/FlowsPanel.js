import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddButton, MainPanelGrid } from '../../Styles/Styled'
import FlowComponent from './FlowComponent'
import configData from "../../config.json";

export default function FlowsPanel() {

    const [flows, setFlows] = useState([])

    const api_url = `${configData.API}/flow/change` // maybe not right url

    const navigate = useNavigate();
    
    const defaultFlows = {
      flows: []
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
          setFlows(defaultFlows.flows)
          throw new Error('Did not connect to the server!')
        }
        let res = await result.json()
      console.log(res)

      setFlows(res) 

      })

    }
    fetchData()
  }, [])

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
