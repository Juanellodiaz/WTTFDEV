import { Navigate, Route, Routes } from 'react-router-dom'
import { BrandingStudio } from './pages/BrandingStudio'
import { DevHome } from './pages/DevHome'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DevHome />} />
      <Route path="/studio" element={<BrandingStudio />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
