import React, { useState, useEffect } from 'react';
import { TextField, Button, Stack, Select, MenuItem } from '@mui/material';
import axios from 'axios'; 

const PatientRegisterForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [reasonForAdmission, setReasonForAdmission] = useState('');
  const [department, setDepartment] = useState('');
  const [departments, setDepartments] = useState([]);


//   useEffect(() => {
//     const fetchDepartments = async () => {
//       try {
//         const response = await axios.get('');
//         setDepartments(response.data);
//       } catch (error) {
//         console.error('Error fetching departments:', error);
//       }
//     };

//     fetchDepartments();
//   }, []); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const patientData = {
      name,
      age,
      gender,
      admissionDate,
      reasonForAdmission,
      department,
    };

    // try {
    //   const response = await axios.post('', patientData);
    //   console.log('Patient added successfully:', response.data);
    //   alert('Patient data submitted successfully!');
      
    //   setName('');
    //   setAge('');
    //   setGender('');
    //   setAdmissionDate('');
    //   setReasonForAdmission('');
    //   setDepartment('');
    // } catch (error) {
    //   console.error('Error submitting patient data:', error);
    //   alert('Failed to submit patient data');
    // }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ textAlign: 'center' }}>Add Patient Data</h2>
      
      <Stack spacing={2} sx={{ marginBottom: 4, width: '100%' }}>
        <TextField
          type="text"
          variant="outlined"
          label="Patient Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          fullWidth
          required
        />

        <TextField
          type="number"
          variant="outlined"
          label="Age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          fullWidth
          required
        />

        <Select
          label="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          fullWidth
          variant="outlined"
          required
        >
          <MenuItem value="" disabled>Select Gender</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>

        <TextField
          type="date"
          variant="outlined"
          label="Admission Date"
          onChange={(e) => setAdmissionDate(e.target.value)}
          value={admissionDate}
          fullWidth
          required
        />

        <TextField
          type="text"
          variant="outlined"
          label="Reason for Admission"
          onChange={(e) => setReasonForAdmission(e.target.value)}
          value={reasonForAdmission}
          fullWidth
          required
        />

        <Select
          label="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          fullWidth
          variant="outlined"
          required
        >
          <MenuItem value="" disabled>Select Department</MenuItem>
          {/* {departments.map((dept, index) => (
            <MenuItem key={index} value={dept.name}>
              {dept.name}
            </MenuItem>
          ))} */}
        </Select>
      </Stack>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          sx={{
            backgroundColor: '#1a1a1a',
            color: 'white',
            '&:hover': { backgroundColor: '#ff4500' }
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default PatientRegisterForm;
