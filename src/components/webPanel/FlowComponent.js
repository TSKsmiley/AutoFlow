import React from 'react'
import { Box } from '../../Styles/Styled'
import ToggleableButton from '../univeralComponents/ToggleableButton'

export default function FlowComponent( from, to, toggled = false ) {
  return (
    <div>
        <Box>
            <ToggleableButton toggled={toggled}/>
        </Box>
    </div>
  )
}
