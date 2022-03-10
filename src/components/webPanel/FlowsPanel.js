import React from 'react'
import { MainPanelGrid } from '../../Styles/Styled'
import FlowComponent from './FlowComponent'

export default function FlowsPanel() {
    const cardsAmount = 28;
  return (
    <MainPanelGrid>
        {[...Array(cardsAmount)].map((i) => <FlowComponent key={i}/>)}
    </MainPanelGrid>
  )
}
