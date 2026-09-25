import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'

<style>

</style>
function Home() {
  return (
      <div style={} ><h1>Home Page</h1></div>
  )
}

function About() {
  return (
      <div><h1>About Page</h1></div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to='/'>
        HOME
        </Link>

        <Link to='/about'>
        ABOUT US
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App
