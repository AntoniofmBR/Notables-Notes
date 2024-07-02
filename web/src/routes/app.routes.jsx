import { Routes, Route } from "react-router-dom"

import Home from '../pages/home/home'
import Profile from "../pages/profile/profile"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
  )
}