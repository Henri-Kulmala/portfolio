
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProjectPreview from './pages/ProjectPreview'


function App() {


  return (
    <Routes>
      <Route path = "/" element = {<LandingPage />}/>
      <Route path = "/projects/:slug" element = {<ProjectPreview />}/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
      
    
  )
}

export default App
