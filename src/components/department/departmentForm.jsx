import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import axios from 'axios';

const DepartmentForm = () => {
  const [departmentname, setDepartmentName] = useState('');
  const [numberofrooms, setNumberofrooms] = useState(0);
  const [equipmentName, setEquipmentName] = useState('');
  const [equipmentList, setEquipmentList] = useState([]);


  const handleAddEquipment = () => {
    if (equipmentName.trim()) {
      setEquipmentList([...equipmentList, equipmentName]);
      setEquipmentName(''); 
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const departmentData = {
      departmentName: departmentname,
      numberOfRooms: numberofrooms,
      equipment: equipmentList, 
    };

    console.log('Department data:', departmentData);

    // try {
    //   const response = await axios.post('https://your-api-endpoint.com/submit', departmentData);

    //   if (response.status === 200) {
    //     console.log('Form submitted successfully:', response.data);
    //     setDepartmentName('');
    //     setNumberofrooms(0);
    //     setEquipmentList([]);
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
            onChange={(e) => setNumberofrooms(Number(e.target.value))}
            value={numberofrooms}
            fullWidth
            required
          />
        </Stack>


        <h3 style={{ textAlign: 'center' }}>Add Department's Medical Machines</h3>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Medical Machine Name"
            onChange={(e) => setEquipmentName(e.target.value)}
            value={equipmentName}
            fullWidth
          />
        </Stack>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleAddEquipment}
            sx={{
              backgroundColor: '#1a1a1a',
              color: 'white',
              '&:hover': { backgroundColor: '#9be5aa' }
            }}
          >
            Add
          </Button>

        {equipmentList.length > 0 && (
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ color: '#1a1a1a' }}>Equipment List:</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {equipmentList.map((equipment, index) => (
                <li key={index} style={{ color: '#1a1a1a', marginBottom: '10px' }}>{equipment}</li>
              ))}
            </ul>
          </div>
        )}

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
            Submit Department
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default DepartmentForm;
