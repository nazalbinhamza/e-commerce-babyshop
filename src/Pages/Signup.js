import React, { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
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
import signup from'./signup.css';

function Signup() {
  const {login,SetLogin} = useContext(AuthContext)
  const btn = useNavigate()
  const inputRef = useRef(null)
  const submitHandler = (e)=>{
  e.preventDefault()
  let password = inputRef.current.password.value
  let cPassword = inputRef.current.cPassword.value
  let email = inputRef.current.email.value
  if (login.find((item)=>item.email==email)){
    toast.info('Already have Account , login continue....')
    setTimeout(function(){
      btn('/login')
    },1600)
   
  }else if(password===cPassword){
    SetLogin([...login,{username:inputRef.current.username.value,email:email,password:password,cart:[]}])
    btn('/login')
  }else{
    toast.error('Password not match')
  }
  }
  console.log(login);
  return (
    <>
    <br /><br /><br />
    <div className='main-div'>
      <br />
    <form ref={inputRef} onSubmit={submitHandler}>
    <div className='maindiv  ' style={{width:"100%",height:"100vh",display:"flex", justifyContent:"center",alignItems:"center"}} >
      <div className='sec-div' style={{width:"330px",height:"450px", borderRadius:"30px" ,boxShadow:'5px 5px 10px #47272b'}} >
      <h4 style={{color:'#47272b',textAlign:'center',marginTop:'20px'}}>Create Account</h4>
       <MDBContainer className="p-3 my-5 d-flex flex-column w-100">

      <MDBInput required wrapperClass='mb-4' name='username' label='User name' id='form3' type='text' style={{color:'#47272b'}} />
      <MDBInput required wrapperClass='mb-4' name='email' label='Email address' id='form4' type='email' style={{color:'#47272b'}}/>
      <MDBInput required wrapperClass='mb-4' name='password' label='Password' id='form1' type='password' style={{color:'#47272b'}} />
      <MDBInput required wrapperClass='mb-4' name='cPassword' label='Confirm password' id='form2' type='password' style={{color:'#47272b'}}/>



   <div className='container' style={{display:"flex",justifyContent:"center"}} >   
   <MDBBtn type='submit' className="mb-4" style={{borderRadius:'20px',border:'0',color:'white',background:'#47272b',width:'110px',height:'40px',}} >Submit</MDBBtn>
   </div>
      </MDBContainer>
      </div>
          </div>
          <ToastContainer />
          </form>
          </div>
          </>
        
  )
}

export default Signup