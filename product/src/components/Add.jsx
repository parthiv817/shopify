import { Button,TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
  var [user,setuser]= useState([])
//   axios.get("http://localhost:3001/add")
//   .then((response) => {
//       console.log(response.data)
//       setuser(response.data)
  return (
    <div  align="center">
       <table id='table1' border="1">
      <TextField id="standard-basic" label="product name" variant="outlined" />
      <br /> <br />
      <TextField id="standard-basic" label="price" variant="outlined" />
      <br /> <br />
      <TextField id="standard-basic" label="catagery" variant="outlined" />
      <br /> <br />
      <TextField id="standard-basic" label="image" variant="outlined" />
      <br /> <br />
      
      <Button variant="contained">submit</Button>
      <br /> <br />
      </table> 
      <br /><br />
    </div>
  )
}
// )
// }


export default Add
