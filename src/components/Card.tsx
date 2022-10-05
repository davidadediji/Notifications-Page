import { Box } from '@chakra-ui/react'
import React from 'react'

type Person ={
    firstname:string
}

export const Card = ({firstname}:Person) => {
  return (
    <Box>
        {firstname}
    </Box>
  )
}
