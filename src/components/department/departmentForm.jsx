import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import axios from 'axios';

const DepartmentForm = () => {
  const [departmentname, setDepartmentName] = useState('');
  const [numberofrooms, setNumberofrooms] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      departmentName: departmentname,
      numberOfRooms: numberofrooms,
    };
    console.log('Department data' , data)
    // try {
    //   const response = await axios.post('https://your-api-endpoint.com/submit', data);

    //   if (response.status === 200) {
    //     console.log('Form submitted successfully:', response.data);
    //     setDepartmentName('');
    //     setNumberofrooms(0);
    //   } else {
    //     console.error('Failed to submit form:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error submitting the form:', error);
    // }
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
        <h2 style={{ textAlign: 'center' }}>Add Department</h2>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Department Name"
            onChange={(e) => setDepartmentName(e.target.value)}
            value={departmentname}
            fullWidth
            required
          />
          <TextField
            type="number"
            variant="outlined"
            color="secondary"
            label="Number of Rooms"
            onChange={(e) => setNumberofrooms(e.target.value)}
            value={numberofrooms}
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
            Submit
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default DepartmentForm;
