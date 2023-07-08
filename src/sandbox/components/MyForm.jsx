import {  Button, Input, Typography } from '@mui/material'
import React from 'react'
import useText from '../hooks/useText'
import { useTheme } from '../../providers/ThemeProvider';

export default function MyForm() {
    const {text,update,reset,cancel,onSubmit} = useText("ofek");
    const {isDark} = useTheme();

  return (
    <form style={{paddingTop:30}}>
<Input type="text" placeholder='enter text' onChange={update}/> 
<Button type="reset" onClick={reset}>reset</Button>
<Button onClick={cancel}>cancel</Button>
<Button onClick={onSubmit}>submit</Button>
<br />
<Typography sx={{color : isDark && "white"}}>{text}</Typography>
<a href="tel:123-456-7890">123-456-7890</a>
    </form>
  )
}
