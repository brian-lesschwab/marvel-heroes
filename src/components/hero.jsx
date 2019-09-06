import React from 'react'
import { Button, Card, Elevation, Popover } from '@blueprintjs/core';
const iconPath = process.env.PUBLIC_URL + '/avengers/'

const Content = ({ description }) =>
  <div className={'hero-content'}>
    <span>{description}</span>
  </div>

const Hero = ({ hero: { description, action, img, name }}) =>
  <Popover content={<Content description={description} />} usePortal={false}>
    <Card
      className={'hero-card'}
      interactive={true}
      onClick={action}
      elevation={Elevation.TWO}>
      <div className={'hero-image-container'}>
        <img className={'hero-image'} src={`${iconPath}/${img}.jpg`} />
      </div>
      <h5>{name}</h5>
    </Card>
</Popover>


export default Hero
