import React from 'react'
import { Wrapper } from './styles'

interface propsType {
  Name: string
  Role: String
  Feedback: String
}

function CustomerCard(props: propsType) {
  const { Name, Role, Feedback } = props
  return (
    <Wrapper>
      <div className="header">
        <span>"</span>
        <p>{Feedback}</p>
      </div>
      <div className="avatar">
        <div className="avatar-image">
          <img
            src="https://avatars.githubusercontent.com/u/24268349?v=4"
            alt=""
          />
        </div>
        <div className="avatar-description">
          <h3>{Name}</h3>
          <span>{Role}</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default CustomerCard
