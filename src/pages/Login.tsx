import { useState } from 'react'
// @mui
import { Container, Typography, TextField, Button } from '@mui/material';
// components
import Page from '../components/Page';
import axios from '../utils/axios';

// ----------------------------------------------------------------------

export default function LandingPage() {
  const [email, setEmail] = useState<string>(''); 
  const [password, setPwd]= useState<string>('');

  function onSubmit(){
    // email, password
    // post request LOGIN
    axios.post('api/account/login', { 
        email: email,
        password:password})
      .then(res =>{
        console.log(res);
        console.log(res.data);
      })
  };

  return (
    <Page title="Login Page">
      <Container>
          <Typography variant="h3" component="h1" paragraph>
            Login Page
          </Typography>
          <Typography>
          <TextField id="email" onChange={(e) =>setEmail(e.target.value)} value={email} name="email" label="Email" variant="standard" />
          </Typography>
          <Typography>
            <TextField id="password" name="password" onChange={(e)=>setPwd(e.target.value)} value={password} label="Password" variant="standard" type='password'/>
          </Typography>
          <Typography>
            <Button onClick={onSubmit} variant="contained" type='submit'>Submit</Button>
          </Typography>
      </Container>
    </Page>
  );
}
