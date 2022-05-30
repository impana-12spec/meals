import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Home = () => {
    const options = { 
        responsive: {
          0: {
              items: 1,
          },
          700: {
              items: 1,
          },
          1000: {
              items: 1,
    
          }, 
      },
      loop:true ,
      nav:true  ,
      margin:8,
      autoplay: true,
      autoplaySpeed:5000,
      autoplayTimeout:10000,
     /*  smartSpeed:3000, */
      }    
  return (
    <div>
        <div className="home-header" style={{backgroundColor:'black'}}>   
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-xs-12 col-md-12 "  >
                    <OwlCarousel {...options}  className="owl-theme"  > 
                    <div style={{ backgroundImage: "url(" + "images/food1.jpg" + ")",  }} className='home-sliders'  > 
                    <div className="container pt-2">
                    <h3 style={{fontSize:'40px',color:'	#F5DEB3',fontWeight:'bold',marginTop:'160px',marginLeft:'280px'}}>Tasty khana</h3>
                    </div>
                    </div>
                    <div style={{ backgroundImage: "url(" + "images/familydinner.webp" + ")",}} className='home-sliders'  > 
                    <div className="container pt-2">
                    <h3 style={{fontSize:'60px',color:'white',fontWeight:'bold',marginTop:'120px',marginLeft:'220px'}}>A recipe is a story that ends with a good meal.</h3>
                    </div>
                    </div>
                    <div style={{ backgroundImage: "url(" + "images/serve.jpg" + ")",}} className='home-sliders'  > 
                    <div className="container pt-2">
                    <h3 style={{fontSize:'40px',color:'#F5DEB3',fontWeight:'bold',marginTop:'120px',marginLeft:'200px'}}>Pull up a chair.Take a taste.Come join us.Life is so endlessly delicious.</h3>
                    </div>
                    </div>
               
                    </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
{/* 
<div className="wrapper">
        <div class="container">
  <img src="img_avatar.png" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
</div> */}
    
    {/* <div className="abt-gcredo mt-5">
                <div className="container">
                    <div className="row">
                        <h1 className='content-heading'>WHY G-CREDO</h1>
                        <div className="col-xs-12 col-md-12">
                            <ul>
                                <li>G-CREDO, Global Credentialing Office, is the world's first certification boards aggregator, with a vision to bring globally reputed and respected certification boards under one roof to simplify the access for training providers.                                </li>

                                <li>Partnering with G-CREDO will give your organization access to all the portfolio certifications offered by the prestigious certification bodies in the business today.                               </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="" style={{backgroundColor:'black'}}> 
                <div className="container" style={{backgroundColor:'black'}}>
                    <div className="row">
                    <div className="col-xs-12 col-md-4 ">
                                                <div className="card mt-3 mb-3" style={{ width: '23rem', height: '15rem' }}>
                                                  <div className="card-body">
                                                    <img src="images/serve.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">About Us--></div>
   
  </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-md-4 ">
                                                <div className="card mt-3 mb-3" style={{ width: '23rem', height: '15rem' }}>
                                                    <div className="card-body">
                                                    <img src="images/ab3.png" alt="Avatar" class="image1"/>
  <div class="over">
 <div className="text">We serve delicious home-cooked food on a subscription basis by leveraging a vast home chef network. The food we serve is prepared in home kitchens by passionate home chefs around us who share a love for food and a passion for cooking.</div>
  </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-md-4 ">
                                                <div className="card mt-3 mb-3" style={{ width: '23rem', height: '15rem' }}>
                                                    <div className="card-body">
                                                    <img src="images/ab2.jpg" alt="Avatar" class="image2"/>
  <div class="over2">
   <div className="text">Every plate of food served by MealBox is prepared using the freshest, top-quality ingredients based on authentic, regional recipes. Our food is also free from any kind of chemical-based colourants, taste enhancers or preservatives.</div>
  </div>
</div>
                                                </div>
                                            </div>
                            
                                            
                        
                        
                        
                                            </div>

                                            <h1 class="mt-3" style={{color:'white'}}>MealBox</h1>
                                            <p style={{color:'white'}}>Born from a quest for alternatives closer to the home and heart than eating out and ordering in, MealBox is all about door delivering home-cooked meals and homemade delicacies. Each plate of food served through Masala Box is prepared using fresh, locally sourced produce in a home kitchen just like yours with authentic, regional recipes by real people with a passion for cooking.</p>
                    </div>
        

            </div>

     
           
    </div>
  )
}

export default Home;