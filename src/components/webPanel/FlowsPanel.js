import React, { useState } from 'react'
import { MainPanelGrid } from '../../Styles/Styled'
import FlowComponent from './FlowComponent'
import { Box } from '../../Styles/Styled';

export default function FlowsPanel() {
    const [cardsAmount, updateCardsAmount] = useState(0);


  return (
    <MainPanelGrid>
        {[...Array(cardsAmount)].map((i) => <FlowComponent key={i}/>)}
        
        <button type='button' onClick={() => updateCardsAmount(prevCount => prevCount + 1)}>
          <Box>
          </Box>
        </button>
      

    </MainPanelGrid>
  )
}
