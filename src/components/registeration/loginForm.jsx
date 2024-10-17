import React, { useState } from 'react';
import { TextField, Button, Stack, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUserType] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // For displaying error messages

  const optionList = ['Admin', 'Patient', 'Doctor'];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email,
      password,
      usertype,
    };

    try {
      const response = await axios.post('https://your-api-endpoint.com/login', loginData);
      console.log('Login successful:', response.data);


      if (response.status === 200) {
        console.log('Token:', response.data.token); 
      }
    } catch (error) {
      // failed login 
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid email or password');
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Login Form</h2>

        <Stack spacing={2} sx={{ width: '100%', marginBottom: 4 }}>
          <Select
            label="Select User Type"
            value={usertype}
            onChange={(e) => setUserType(e.target.value)}
            fullWidth
            variant="outlined"
            required
          >
            
            <MenuItem value="" disabled>
              User Types
            </MenuItem>
            {optionList.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>

          <TextField
            type="email"
            variant="outlined"
            color="secondary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
          />
          <TextField
            type="password"
            variant="outlined"
            color="secondary"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            fullWidth
            required
          />
        </Stack>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            sx={{
              backgroundColor: '#1a1a1a',
              color: 'white',
              '&:hover': { backgroundColor: '#9be5aa' },
            }}
          >
            Login
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
