import React, { useContext, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import './Navbar.css';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import { FaUserSlash } from "react-icons/fa";


export default function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);
  const {user,setUser,search,setSearch,products} = useContext(AuthContext)
  const nav = useNavigate()
  const logoutHandler = ()=>{
    setUser(null)
    nav('/')
  }
  const loginHandler = ()=>{
    nav('/Login')
  }

  const searchInput = (e)=>{
    e.preventDefault()
    console.log(e);
    let inputword = products.filter((x) => x.title.toLowerCase().includes(e.target.value.toLowerCase()));
    if(e.target.value.length==0){
      setSearch(null)
    }
      else if(inputword){
        setSearch(inputword)
        nav("/shop")
      }
    
  }
  // background:'rgba(255,255,255,.4)'
  return (
    <MDBNavbar expand='lg' style={{background:'white'}} fixed='top'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' style={{paddingTop:'7px'}}>
        <img style={{height:'60px'}} src="https://seeklogo.com/images/B/baby-logo-6ABC3EF92F-seeklogo.com.png" />
          <NavLink to={"/"}>
            <h2 style={{color:'#561C24',letterSpacing:'2px',fontFamily:'italic'}}>Babi<span style={{color:'black'}}>fy</span></h2>
            </NavLink>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0' >

            <MDBNavbarItem className='nav-pg'>
              <MDBNavbarLink >
                <NavLink to={"/"} className={'col-nav'}>
                Home
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem >
              <MDBNavbarLink >
                <NavLink to={"Shop"} className={'col-nav'}>
                Shop
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem >
              <MDBNavbarLink >
                <NavLink to={"About"} className={'col-nav'}>
                About Us
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem >
              <MDBNavbarLink >
                <NavLink to={"Contact"} className={'col-nav'}>
                Contact Us
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
           
          </MDBNavbarNav>
            <input type='search' className='form-control' placeholder='Search products...' onChange={searchInput} aria-label='Search' style={{width:'200px',marginRight:'40px'}} />
           
           <div onClick={!user?loginHandler:logoutHandler} className={'col-nav'}>
           { !user?<FaUser className='log-icon' />:<>
           <FaUserSlash className='user-icon'  />
           <p style={{marginLeft:'30px',marginTop:'15px'}}>{user.username}</p>
           </>
           }
            </div>
            <NavLink to={user?"addcart":"login"}>
            <FaCartPlus className={'col-nav addcart'} />
            </NavLink>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}