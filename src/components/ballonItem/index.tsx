import React from 'react'
import { Wrapper } from './styles'
import { Check } from 'phosphor-react'

interface propsType {
  Icon?: React.ElementType
  Title: string
  Description: string
}

function BallonItem(props: propsType) {
  const { Title, Description, Icon } = props
  return (
    <Wrapper title={Description}>
      {Icon ? <Icon size={24} /> : <Check size={24} />}
      <span>{Title}</span>
    </Wrapper>
  )
}

export default BallonItem
