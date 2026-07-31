import React from 'react'

const Student = () => {
  return (
    <div style={{}}>
      <div style={{backgroundColor:'olive',border:'2px solid yellow',height:'300px',width:'300px', display:'flex', alignItems:'center', gap:'20px', flexDirection:'column'}}>
        <h2 style={{color:'white'}}>Student Info</h2>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqyUf1K0zFut46i3Mt0AjdQ7aIj6NXqPYIifVzWgSyD8QT_fVycJ93h0e&s=10'height={'150'}  width={'150'} backgroundColor={'white'}></img>
        <h3>Student Name: Parth Gupta</h3>
        <h4>B.Tech Data Science Student</h4>
      </div>
    </div>
  )
}

export default Student