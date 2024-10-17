import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography, Stack, Grid } from '@mui/material';
import axios from 'axios';

const DoctorApprove = () => {
  const [doctors, setDoctors] = useState([]);

  // Dummy data for doctors (can be replaced with API fetch)
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // const response = await axios.get('');
        // setDoctors(response.data);

        const dummyDoctors = [
          {
            id: 1,
            name: 'Dr. John Doe',
            specialization: 'Cardiologist',
            age: 45,
            gender: 'Male',
            email: 'johndoe@gmail.com',
            contactNumber: '123-456-7890',
          },
          {
            id: 2,
            name: 'Dr. Jane Smith',
            specialization: 'Neurologist',
            age: 38,
            gender: 'Female',
            email: 'janesmith@gmail.com',
            contactNumber: '098-765-4321',
          },
        ];
        setDoctors(dummyDoctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleApprove = (doctorId) => {
    console.log(`Approved doctor with ID: ${doctorId}`);
//reminder: Iused put to change the doctor status, might change later if this was made an action 
    // axios.put(``)
    //   .then(response => console.log('Doctor approved:', response.data))
    //   .catch(error => console.error('Error approving doctor:', error));
    setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.id !== doctorId));
  };

  const handleDecline = (doctorId) => {
    console.log(`Declined doctor with ID: ${doctorId}`);
    // axios.put(``)
    //   .then(response => console.log('Doctor declined:', response.data))
    //   .catch(error => console.error('Error declining doctor:', error));  
    setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.id !== doctorId));
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Doctors Join requests</h2>

      <Grid container spacing={3}>
        {doctors.map((doctor) => (
          <Grid item xs={12} md={6} key={doctor.id}>
            <Card sx={{ backgroundColor: '#f9f9f9', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
              <CardContent>
                <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                  {doctor.name}
                </Typography>
                <Typography variant="body1"><strong>Specialization:</strong> {doctor.specialization}</Typography>
                <Typography variant="body1"><strong>Age:</strong> {doctor.age}</Typography>
                <Typography variant="body1"><strong>Gender:</strong> {doctor.gender}</Typography>
                <Typography variant="body1"><strong>Email:</strong> {doctor.email}</Typography>
                <Typography variant="body1"><strong>Contact Number:</strong> {doctor.contactNumber}</Typography>

                <Stack direction="row" spacing={2} sx={{ marginTop: '20px', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleApprove(doctor.id)}
                    sx={{ backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#45a049' } }}
                  >
                    Approve
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDecline(doctor.id)}
                    sx={{ backgroundColor: '#f44336', '&:hover': { backgroundColor: '#e53935' } }}
                  >
                    Decline
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {doctors.length === 0 && (
        <Typography variant="h6" style={{ textAlign: 'center', marginTop: '20px' }}>
          No unapproved doctors at the moment.
        </Typography>
      )}
    </div>
  );
};

export default DoctorApprove;
