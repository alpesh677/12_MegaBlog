import { useState } from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import './App.css'
import { useState, useEffect } from 'react'
import { logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.'
import Header from './components/Header/Header'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) =>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (
    <div>
      <div>
        <Header/>
        <main>
          TODO : <Outlet/>
        </main>
        <Footer/>
      </div>
    </div> 
  ) : null
}

export default App
