import { useState } from 'react'
import './App.css'
import DepartmentForm from './components/department/departmentForm'
import RegistrationForm from './components/registeration/registrationForm'
import LoginForm from './components/registeration/loginForm'

function App() {


  return (
    <>
  <DepartmentForm/>
  <RegistrationForm/>
  <LoginForm/>
    </>
  )
}

export default App
