import React, { useState, useEffect } from 'react';
import { TextField, Button, Stack, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const RoomStatus = () => {
  const [departments, setDepartments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [departmentId, setDepartmentId] = useState('');
  const [roomNumber, setRoomNumber] = useState(0);
  const [roomStatus, setRoomStatus] = useState('');
  const [patientId, setPatientId] = useState('');

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(''); 
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    const fetchPatients = async () => {
      try {
        const response = await axios.get('');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchDepartments();
    fetchPatients();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const roomData = {
      departmentId,
      roomNumber,
      roomStatus,
      patientId
    };

    console.log('Room data:', roomData);

    // try {
    //   const response = await axios.post('', roomData);
    //   if (response.status === 200) {
    //     console.log('Form submitted successfully:', response.data);
    //     resetForm();
    //   } else {
    //     console.error('Failed to submit form:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error submitting the form:', error);
    // }
  };

  const resetForm = () => {
    setDepartmentId('');
    setRoomNumber(0);
    setRoomStatus('');
    setPatientId('');
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
        <h2 style={{ textAlign: 'center' }}>Adjust room status</h2>

        <FormControl fullWidth variant="outlined" sx={{ mb: 4 }}>
          <InputLabel>Department</InputLabel>
          <Select
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
            label="Department"
            required
          >
            {/* {departments.map((department) => (
              <MenuItem key={department.id} value={department.id}>
                {department.name}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>

        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Room Number"
          onChange={(e) => setRoomNumber(Number(e.target.value))}
          value={roomNumber}
          fullWidth
          required
          sx={{ mb: 4 }}
        />

        <FormControl fullWidth variant="outlined" sx={{ mb: 4 }}>
          <InputLabel>Room Status</InputLabel>
          <Select
            value={roomStatus}
            onChange={(e) => setRoomStatus(e.target.value)}
            label="Room Status"
            required
          >
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Occupied">Not Available</MenuItem>
          </Select>
        </FormControl>


        <FormControl fullWidth variant="outlined" sx={{ mb: 4 }}>
          <InputLabel>Assign Patient</InputLabel>
          <Select
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            label="Assign Patient"
            required
          >
            {/* {patients.map((patient) => (
              <MenuItem key={patient.id} value={patient.id}>
                {patient.name}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>

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
            Submit Room
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default RoomStatus;
