import { Button } from '@mui/material'
import React, { useRef } from 'react'



export default function FirstComponent() {

const anchorEL = useRef();

  return (
    <>
    <Button ref={anchorEL}> click </Button>
   
  </>
  )
}

