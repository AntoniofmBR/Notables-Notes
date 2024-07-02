import { Routes, Route } from "react-router-dom"

import Login from '../pages/login/login'
import Register from '../pages/register/register'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  )
}