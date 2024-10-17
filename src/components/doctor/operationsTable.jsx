import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const OperationsTable = () => {

  const operations = [
    {
      id: 1,
      patientName: 'John Doe',
      patientAge: 45,
      patientGender: 'Male',
      date: '2024-10-10',
      description: 'Appendectomy',
      department: 'Surgery',
      roomNumber: 203,
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      patientAge: 30,
      patientGender: 'Female',
      date: '2024-10-11',
      description: 'Gallbladder Removal',
      department: 'Gastroenterology',
      roomNumber: 105,
    },
    {
      id: 3,
      patientName: 'Albert Johnson',
      patientAge: 65,
      patientGender: 'Male',
      date: '2024-10-12',
      description: 'Hip Replacement',
      department: 'Orthopedics',
      roomNumber: 310,
    },
  ];


  const columns = [
    { field: 'patientName', headerName: 'Patient Name', type: 'text', width: 150 },
    { field: 'patientAge', headerName: 'Patient Age', type: 'number', width: 150 },
    { field: 'patientGender', headerName: 'Patient Gender', type: 'text', width: 150 },
    { field: 'date', headerName: 'Date', type: 'text', width: 150 },
    { field: 'description', headerName: 'Description', type: 'text', width: 150 },
    { field: 'department', headerName: 'Department', type: 'text', width: 150 },
    { field: 'roomNumber', headerName: 'Room Number', type: 'number', width: 150 },
  ];


  const rows = operations.map((operation) => ({
    id: operation.id,
    patientName: operation.patientName,
    patientAge: operation.patientAge,
    patientGender: operation.patientGender,
    date: new Date(operation.date).toLocaleDateString(), 
    description: operation.description,
    department: operation.department,
    roomNumber: operation.roomNumber,
  }));

  return (
    <Box sx={{
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px'
    }}>
      <h2 style={{ textAlign: 'center' }}>Doctor's Operations Table</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter
        autoHeight
      />
    </Box>
  );
}

export default OperationsTable;
