
import './App.css'

import RegistrationForm from './components/registeration/registrationForm'
import LoginForm from './components/registeration/loginForm'
import PatientRegisterForm from './components/patient/patientRegisterForm'
import OperationsTable from './components/doctor/operationsTable'
import DepartmentForm from './components/admin/department/departmentForm'
import RoomStatus from './components/admin/room/roomStatus'
import DoctorApprove from './components/admin/doctorRegisteration/doctorApprove'

function App() {


  return (
    <>
  <RegistrationForm/>
  <LoginForm/>
  <h1>admin</h1>
  <DepartmentForm/>
  <RoomStatus/>
  <DoctorApprove/>
  <h1>patient</h1>
  <PatientRegisterForm/>
  <h1>doctor</h1>
  <OperationsTable/>
    </>
  )
}

export default App
