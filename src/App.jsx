import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
