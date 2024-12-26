import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './components/Signup/Signup';
import LoginPage from './pages/LoginPage/LoginPage'
import { useContext, useEffect } from 'react';
import {AuthentContext} from "./context/UsersContext"
import { getAuth, onAuthStateChanged } from 'firebase/auth';


function App() {
  const {setUser} = useContext(AuthentContext)

  const auth = getAuth();
  
  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
    setUser(user)
    // console.log(user.displayName,"display name")
   })
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