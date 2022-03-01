import React, { Fragment } from 'react'
import { CenterText, AutoFlowLogoText, AutoflowCatch } from '../../Styles/Styled'


export default function MainScreen() {

  return (
    <Fragment>
        <CenterText>
            <AutoFlowLogoText>AutoFlow</AutoFlowLogoText>
            
            <AutoflowCatch>Flows your boat</AutoflowCatch>
        </CenterText>
    </Fragment>
  )
}
