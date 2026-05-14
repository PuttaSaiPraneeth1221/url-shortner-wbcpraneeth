import { Avatar, Container} from '@mantine/core'
import React from 'react'

export default function Profile() {

  const dummy = {
    name: "Praneeth",
    email: "saipraneeth0111@gmail.com",
    id: "1234567890",
    avatar: "https://avatars.githubusercontent.com/u/1234567890?v=4",
  }
  return (
    
    <Container
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >     
      <div>
        <Avatar src={dummy.avatar} size={120} mx="auto" />
        <h2>{dummy.name}</h2>
        <p>{dummy.email}</p>
        <p>ID: {dummy.id}</p>
      </div> 
    </Container>
  )
  
}
