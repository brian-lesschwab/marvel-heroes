import React from 'react'
import { Slider } from '@blueprintjs/core'

const TimelineSlider = ({ timeline, onChange }) =>
  <div className={'slider'}>
    <Slider
        min={1}
        max={10}
        stepSize={0.1}
        labelStepSize={1}
        onChange={onChange}
        value={timeline} />
  </div>

export default TimelineSlider
