import React, { ElementType } from 'react'
import { Wrapper } from './styles'

interface propsType {
  Icon: ElementType
  Title: String
  Description: String
}

function ServiceCard(props: propsType) {
  const { Icon, Title, Description } = props
  return (
    <Wrapper>
      <Icon size={48} color={'#FF9C06'} weight="fill" />
      <div className="content">
        <h3>{Title}</h3>
        <p>{Description}</p>
      </div>
    </Wrapper>
  )
}

export default ServiceCard
