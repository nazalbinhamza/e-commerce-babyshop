import React from 'react';
import {
  MDBCard,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';





function Home() {
 
    
  return (
    <>
    <br /><br /><br />
    <div className='container-fluid'>
    <MDBCarousel showControls interval={3000}>
      <MDBCarouselItem itemId={1} interval={1000}>
        <img src='https://obori.in/cdn/shop/files/banner_1_1800x.png?v=1701329589' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://obori.in/cdn/shop/files/banner_2_1800x.png?v=1700305973' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://obori.in/cdn/shop/files/banner_3_1_1800x.png?v=1700306035' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>

    {/* <div className='container-fluid'>
      <div className='row p-5' style={{background:'#e6c5c3'}}>
        <div className='col-3 text-center'>
          <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/4.png?v=1629206294'className='p-3'/>
    
       
        </div>
        <div className='col-3 text-center'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/1.png?v=1629206830' className='p-3'/>
      
       
        </div>
        <div className='col-3 text-center'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/2.png?v=1629206854'className='p-3'/>
        
        
        </div>
        <div className='col-3 text-center'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/5.png?v=1629206906'className='p-3'/>
        
       
        </div>
      </div>
    </div> */}
    
    <div className='container' style={{display:'flex',justifyContent:'center',marginTop:'70px'}}>
        <h1 style={{fontFamily:" Gelasio, serif",color:'black',fontSize:'35px'}}>New Arrivals</h1>
    </div>
    <div className='container' style={{display:'flex',justifyContent:'center'}}>
        <h5 style={{fontFamily:"sans-serif",fontSize:'18px'}}>Shope The Drop</h5>
    </div>

    <div className='container-fluid g-3 p-5'>
      <div className='row g-5 '>
        <div className='col-3'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/281A3247_360x.png?v=1629207791' className='img-fluid shadow-4 p-0 w-100 ' alt='...' style={{borderRadius:'10px'}} />
        </div>
        <div className='col-3'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/281A3407_360x.png?v=1629207762' className='img-fluid shadow-4 p-0 w-100' alt='...' style={{borderRadius:'10px'}}/>
        </div>
        <div className='col-3'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/281A3170_360x.png?v=1629207777' className='img-fluid shadow-4 w-100' alt='...' style={{borderRadius:'10px'}}/>
        </div>
        <div className='col-3'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/281A3447_360x.png?v=1629207858' className='img-fluid shadow-4 w-100' alt='...' style={{borderRadius:'10px'}}/>
        </div>
      </div>
    </div>


   <MDBRow className='row-col-1 rowcols-md-12 '>
    <MDBCol>
    <MDBCard>
    <video autoPlay loop muted playsInline  >
        <source  src="https://cdn.shopify.com/videos/c/o/v/db2543402179449eaa2d267e4ff4f685.mov" type="video/mp4" />
      </video>
    </MDBCard>
    </MDBCol>
   </MDBRow>

   <img src='https://obori.in/cdn/shop/files/Sleepwear_1_1800x.jpg?v=1652098767' className='img-fluid shadow-4 w-100' alt='...' />
   
    {/* <img src='https://obori.in/cdn/shop/files/Sleepwear_1_1800x.jpg?v=1652098767'/>
    <img src='https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/316-1713378600-mc_webbanner_1920x650_ss24apr.jpg' className='img-fluid shadow-4' alt='...' />
    <img class='home-img' src='https://obori.in/cdn/shop/files/banner_1_1800x.png?v=1701329589'/> */}
    </div>

    </>
  );
}

export default Home;








// <div className='container' style={{display:'flex',justifyContent:'left'}}>
// <img className='hopscotch-img' src='https://static.hopscotch.in/fstatic/product/202402/c6aa62d0-0e2a-4534-ad16-917f47871a85_full.jpg?version=1708431409446&tr=w-480,c-at_max,dpr-2,n-medium' />
// <img className='grabsparks-img' src='https://grabsparks.com/wp-content/uploads/2015/10/No-Kidding-Sale-Offers-Baby-Care.jpg' />
// <img className='pin-img' src='https://i.pinimg.com/736x/08/e8/6c/08e86c367bdd5860681fc9f897638484.jpg' />
// </div>
// <Slideshow />


// <br /><br />
// <div className={"container"} style={{background:'white'}}>
// <h3 style={{textAlign:'center',color:'black'}}><BiSolidOffer style={{color:'red',marginTop:'-5px'}} />𝘽𝙚𝙨𝙩 𝙎𝙚𝙡𝙡𝙚𝙧𝙨</h3>
// </div>
// <br /><br />
// <div className='container card-div'>
// <MDBCard className='card-shadow' onClick={()=>nnav('shop/dress')}>
// <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//   <MDBCardImage className='img-card' src='https://images.prod.babyshopgroup.io/images/PM-55657%23a/512x512.jpeg' fluid alt='...' />
//   <a>
//     <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//   </a>
// </MDBRipple>
// <MDBCardBody>
//   <MDBCardTitle>Mini A Ture</MDBCardTitle>
//   <MDBCardText>
//     Wisti SnowSuit
//   </MDBCardText>
// </MDBCardBody>
// </MDBCard>
// <MDBCard className='card-shadow crd2'>
// <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//   <MDBCardImage className='img-card' src='https://images.prod.babyshopgroup.io/images/PM-51459%23A/512x512.jpeg' fluid alt='...' />
//   <a>
//     <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//   </a>
// </MDBRipple>
// <MDBCardBody>
//   <MDBCardTitle>Kuling</MDBCardTitle>
//   <MDBCardText>
//     Abisko SnowSuit
//   </MDBCardText>
// </MDBCardBody>
// </MDBCard>
// <MDBCard className='card-shadow'>
// <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//   <MDBCardImage className='img-card' src='https://images.prod.babyshopgroup.io/images/PM-53276%23a/512x512.jpeg' fluid alt='...' />
//   <a>
//     <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//   </a>
// </MDBRipple>
// <MDBCardBody>
//   <MDBCardTitle>Didriksons</MDBCardTitle>
//   <MDBCardText>
//     Bjornen SnowSuit
//   </MDBCardText>
// </MDBCardBody>
// </MDBCard>
// <MDBCard className='card-shadow'>
// <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//   <MDBCardImage className='img-card' src='https://miarcus.com/cdn/shop/files/8904351976866_1_460x.webp?v=1706868365' fluid alt='...' />
//   <a>
//     <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//   </a>
// </MDBRipple>
// <MDBCardBody>
//   <MDBCardTitle>Peanut Snoopy</MDBCardTitle>
//   <MDBCardText>
//     Melange Sweeter Blue
//   </MDBCardText>
// </MDBCardBody>
// </MDBCard>
// <MDBCard className='card-shadow'>
// <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//   <MDBCardImage className='img-card' src='https://images.prod.babyshopgroup.io/images/PM-59507%23a/512x512.jpeg' fluid alt='...' />
//   <a>
//     <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//   </a>
// </MDBRipple>
// <MDBCardBody>
//   <MDBCardTitle>Molo</MDBCardTitle>
//   <MDBCardText>
//     Gots Chikako Purple
//   </MDBCardText>
// </MDBCardBody>
// </MDBCard>
// <MDBCard className='card-shadow'>
// <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//   <MDBCardImage className='img-card' src='https://images.prod.babyshopgroup.io/images/PM-59351%23a/512x512.jpeg' fluid alt='...' />
//   <a>
//     <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//   </a>
// </MDBRipple>
// <MDBCardBody>
//   <MDBCardTitle>Molo</MDBCardTitle>
//   <MDBCardText>
//    T-shirt Yang Horses
//   </MDBCardText>
// </MDBCardBody>
// </MDBCard>
// </div>
// <br />
// <h1 style={{textAlign:'center',color:'black',fontFamily:'italic'}}><b>Shope By Age</b></h1>
// <br />
// <div className='container' style={{display:'flex',justifyContent:'center'}}>
// <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/170445219292624.webp' style={{height:'140px'}} />  
// <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/170445599592629.webp' style={{height:'140px',marginLeft:'80px'}} />
// <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/170445619492630.webp' style={{height:'140px',marginLeft:'80px'}} />
// <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/170445637792632.webp' style={{height:'140px',marginLeft:'80px'}} />
// </div>
// <br />
// <h1 style={{textAlign:'center',color:'black',fontFamily:'italic'}}><b>Shope By Category</b></h1>
// <br />
// <div className='container' style={{display:'flex',justifyContent:'center'}}>
// <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/170445769792625.webp' style={{height:'190px'}} />  
// <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/170445747092637.webp' style={{height:'190px',marginLeft:'80px'}} />
// <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/170445752492639.webp' style={{height:'190px',marginLeft:'80px'}} />
// <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/170445755292644.webp' style={{height:'190px',marginLeft:'80px'}} />
// </div>
// <br /><br />
// <Container>
// <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
//   <video className='gif-img' src='https://www.mamypoko.co.in/img/video/product-world-gif.webm' autoPlay loop />
//   <img className='img2-div' src='https://www.menmoms.in/cdn/shop/files/Image_5.jpg?v=1701088240&width=1800' alt='responsive' />   
// </div>
// </Container>
// <br />
// <div className='container' style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
// <img onClick={()=>nnav('/shop/diaper')} className='kimmy-img' src='https://www.babyamore.in/wp-content/uploads/2024/01/KK-Banners-2048x512.jpg' />
// </div>
// <br /><br />


// <img className='mamy-img' src='https://www.mamypoko.co.in/_next/image?url=https%3A%2F%2Fmamypoko.s3.ap-south-1.amazonaws.com%2Fdocuments%2Fec5cb221-4cb7-4751-b255-fef37ad51762.gif&w=640&q=75' alt='mamy' />
// <div className='container'>
// <img src="https://breeze-media.vega.co.in/media/catalog/category/Pacifiers_Teethers.jpg.webp" class="img-fluid" alt="Wild Landscape" />
// </div>