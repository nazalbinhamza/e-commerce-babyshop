import React, { useContext, useRef } from 'react'
import login from './Login.css';
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { AuthContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {
  const {login,user,setUser} = useContext(AuthContext)
  const inputRef = useRef(null)
    const btn = useNavigate()
  const submitHandler =(e)=>{
    e.preventDefault()
    let email = inputRef.current.email.value 
    let password = inputRef.current.password.value 
    let userData = login.find((item)=>item.email===email)
    if(email=="admin@gmail.com" && password == 1234){
      btn('/admin')
    }
    else if(userData && userData.password === password){ 
      toast.success('Login Successfully')
      setUser(userData)
      setTimeout(function(){
        btn('/')
    },1000)
     
    }else{
      toast.warning("you don't have an account , signup to continue....")
      setTimeout(() => {
        btn('/Signup')
      },1000);
      
    }
  }
  return (
    <>
    <br /><br /><br />
    <div className='fst-div'>
      <div className='container'>
     <br /><br />
    <form ref={inputRef}  onSubmit={submitHandler}>

    <div className='maindiv' style={{width:"100%",height:"100vh",display:"flex", justifyContent:"center",alignItems:"center"}} >
      <div className='sec-div' style={{width:"330px",height:"350px" , borderRadius:"30px" ,boxShadow:'5px 5px 10px #47272b',color:'white'}} >
      <h4 style={{color:'#47272b',textAlign:'center',marginTop:'20px'}}>Login.</h4>
       <MDBContainer className="p-3 my-5 d-flex flex-column w-100">

      <MDBInput required wrapperClass='mb-4' name='email' label='Email address' id='form1' type='email' style={{color:'#47272b'}} />
      <MDBInput required wrapperClass='mb-4' name='password' label='Password' id='form2' type='password' style={{color:'#47272b'}}/>


   <div className='container' style={{display:"flex",justifyContent:"center"}} >   <MDBBtn type='submit' className="mb-4" style={{borderRadius:'20px',border:'0',color:'white',background:'#47272b',width:'110px',height:'40px',}} >Sign in</MDBBtn></div>

      <div className="text-center">
        <p style={{color:'#47272b'}}>Not a member? <a className='sign-ms' onClick={()=>{btn('/Signup')}} style={{color:'black',textDecoration:'underline'}}>Sign Up</a> </p>
      </div>

      </MDBContainer>
      </div>
      <ToastContainer />
          </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default Login









// import React from 'react'
// import { Container } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'

// function Login() {

//     const btn = useNavigate()

//   return (
//     <div>
//         <Container  style={{background:'#67729D',width:'450px',height:'350px',marginTop:'150px',marginLeft:'530px',borderRadius:'20px',boxShadow:'0 0 30px rgb(0, 0, 0)'}}>
//             
//         <form>
//             <label style={{color:'white',marginLeft:'50px',letterSpacing:'.9px'}}>Username :</label>
//             <input required type='text' placeholder='Enter your username' style={{paddingLeft:'5px',marginTop:'50px',marginLeft:'20px',borderRadius:'5px',border:'0',width:'250px',height:'30px'}} />
//             <br />
//             <br />
//             <label style={{color:'white',marginLeft:'50px',letterSpacing:'.9px'}}>Password :</label>
//             <input required type='password' placeholder='Enter your password' style={{paddingLeft:'5px',marginTop:'20px',marginLeft:'20px',borderRadius:'5px',border:'0',width:'253px',height:'30px'}} />
//             <br />
//             <br />
//             <button onClick={()=>{btn('/')}} type='submit' style={{marginTop:'10px',marginLeft:'170px',,borderRadius:'20px',border:'0',color:'#67729D'}}>Login</button>
//         </form>
//         </Container>
//     </div>
//   )
// }

// export default Login

// 