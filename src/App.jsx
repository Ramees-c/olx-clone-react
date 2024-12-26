import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './components/Signup/Signup';
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  useEffect(() => {
    console.log("user")
  },[])
  
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
    </>
  )
}

export default App