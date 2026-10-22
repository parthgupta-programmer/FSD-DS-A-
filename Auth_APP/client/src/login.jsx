import { useNavigate } from "react-router-dom";

const login = () => {


    const [uname,setUname]=useState("");
    const [pass,setPass]=useState("");

    const [error,setError]=useState("");
    
    const navigate=useNavigate();

    function handleLogin(e){
        e.preventDefault();

        if (uname==='admin' && pass==='manager'){
            navigate('/admin')

        }
        else if(uname==='user' && pass==='abes'){
            navigate('/user')
        } 
        else{
            setError('Authentication Error:Check user Credentials.')
            navigate('/')

        }
    }
  return (

    <div className='login'>

        <h1>SignIn Here</h1>
        <h2 style={{color:'red'}}>{error}</h2>

        <form onSubmit={handleLogin}>

            UserName:<input type='text' value={uname} placeholder="Enter UserName" onChange={(e)=>setUname(e.target.value)}/>

            <br/>

            Password:<input type='password' value={pass} placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)}/>

            <br/>

            <button>SignIn</button>
            <button>Reset</button>

        </form>

    </div>
  )
}

export default login
