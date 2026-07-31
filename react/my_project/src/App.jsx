import React from 'react'
// import Student from './components/Student'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/body'


const App = () => {
  return (
    <div style={{display:'flex'}}>
       <Header />
       <Body />
       <Footer/>
    </div>
  )
}

export default App
