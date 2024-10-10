import React, { useState } from 'react';
import { TextField, Button, Stack ,Select, MenuItem} from '@mui/material';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [usertype, setUserType] = useState('');
  const optionList = ['Admin' , 'Patient' , 'Doctor'];
  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    const registrationData = {
      firstName,
      lastName,
      email,
      password,
      phone,
      usertype
    };

    console.log('Registration Data:', registrationData);

    // axios.post('https://your-api-endpoint.com/register', registrationData)
    //   .then(response => {
    //     console.log('Registration successful:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error registering:', error);
    //   });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ textAlign: 'center' }}>Registration Form</h2>

        <Stack spacing={2} sx={{ width: '100%', marginBottom: 4 }}>
        <Select
            label="Select User Type"
            value={usertype}
            onChange={(e) => setUserType(e.target.value)}
            fullWidth
            variant="outlined"
            required
          >
            <MenuItem value="" disabled>User Types</MenuItem>
            {optionList.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
          />
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
          <TextField
            type="password"
            variant="outlined"
            color="secondary"
            label="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            fullWidth
            required
          />
          <TextField
            type="tel"
            variant="outlined"
            color="secondary"
            label="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            fullWidth
            required
          />
        </Stack>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            sx={{
              backgroundColor: '#1a1a1a',
              color: 'white',
              '&:hover': { backgroundColor: '#9be5aa' }
            }}
          >
            Register
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default RegistrationForm;
