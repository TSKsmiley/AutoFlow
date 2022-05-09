import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddButton, MainPanelGrid } from '../../Styles/Styled'
import FlowComponent from './FlowComponent'
import configData from "../../config.json";

export default function FlowsPanel() {
    const [flows, setFlows] = useState([])
    const [update, setUpdate] = useState(1)
    const api_url = `${configData.API}/flow`

    const navigate = useNavigate();
    
    const defaultFlows = {
      flows: []
    }

  useEffect(() => {
    let isSubbed = true;

    const fetchData = async () => {
      await fetch(api_url, {
        method: 'GET',
        headers: {
          'Authorization': `${sessionStorage.getItem('token')}`
        }
      })
      .then(async (result) => {
        if(!result.ok && isSubbed){
          setFlows(defaultFlows.flows)
          throw new Error('Did not connect to the server!')
        }
        let res = await result.json()
        
      if(isSubbed){
        setFlows(res)
      } 

      })

    }
    fetchData()
    const interval = setInterval(() => {
      fetchData()
    }, 1000)

    return () => {
      isSubbed = false;
      clearInterval(interval)
    }
  }, [update])

    function handleOnClick(){
      navigate("/createPanel")
      //setFlows([...flows, {}])
    }

  return (
    <MainPanelGrid>
        { flows?.map((element, i) => (
          <FlowComponent from={element.platform} to={element.actions[0].name} id={element._id} key={i} setUpdate={setUpdate} update={update}/>
        ))}
        
        <AddButton type='button' onClick={handleOnClick}>
        </AddButton>
      

    </MainPanelGrid>
  )
}
