import React from 'react'
import {Avatar, Grid, Paper, TextField, FormGroup, FormControlLabel, Checkbox, Button, Link, Typography} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const Login = () => {

  const paperStyle={padding: 20 , height: '70vh', width: 330, margin: "50px auto"}
  const avatarStyle={backgroundColor: '#007680'}
  const inpStyle = { margin : '12px 0px'}
  const btstyle ={ margin: '12px 0px', backgroundColor: '#007680'}
  const typoStyle = { margin : '12px 0px'}



  return (
	<Grid>
	  <Paper elevation={10} style={paperStyle} >
		  <Grid align='center'>
			<Avatar style={avatarStyle}> <AccountCircleIcon /></Avatar>
			<h2>Sign In</h2>
		  </Grid>
          <TextField  style={inpStyle}   label="username" placeholder="Enter username" fullWidth required />
          <TextField  style={inpStyle}  label="password" placeholder="Enter password" type="password" fullWidth required />
		  
            <FormGroup>
            <FormControlLabel control={<Checkbox color="primary" />} color="primary" label="Remember me" />
            <Button type="submit" color="primary" variant="contained" style={btstyle} >Sign In</Button>
            </FormGroup>
            
            <Typography style={typoStyle} variant="body1" color="initial">
                <Link href="#" >Forgot password</Link>
            </Typography>
                        
            <Typography  style={typoStyle} variant="body1" color="initial">
                Do you have account?
                <Link href="#" > Sign Up</Link>
            </Typography>



	  </Paper>
	</Grid>
  )
}
