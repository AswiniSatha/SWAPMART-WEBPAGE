import React from 'react'
import './Footer.css'
import logo  from '../Assets/logo_11.png';
import fb from '../Assets/facebook.png';
import instra from '../Assets/instagram.png';
import linkedin from '../Assets/linkedin.png';
import twitter from '../Assets/twitter.png';
function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer_sec1'>
        <div className='Footer_sec1_header'>
          <div className='Footer_sec1_header_content'>POPULAR LOCATIONS</div>
        <div className='Fotter_sec1_content'>Chennai</div>
        <div className='Fotter_sec1_content'>Kolkata</div>
        <div className='Fotter_sec1_content'>Mumbai</div>
        <div className='Fotter_sec1_content'>Pune</div>
        <div className='Fotter_sec1_content'>Hyderbad</div>
        <div className='Fotter_sec1_content'>Bangalore</div> 
        </div>
     
        <div className='Footer_sec1_header'>
        <div className='Footer_sec1_header_content'>TRENDING SEARCHES</div>
        <div className='Fotter_sec1_content'>Bikes</div>
        <div className='Fotter_sec1_content'>Watches</div>
        <div className='Fotter_sec1_content'>Laptop</div>
        <div className='Fotter_sec1_content'>Mobiles</div>
        <div className='Fotter_sec1_content'>Cars</div>
        <div className='Fotter_sec1_content'>Furniture</div> 
        </div>
        <div className='Footer_sec1_header'>
        <div className='Footer_sec1_header_content'>ABOUTS US</div>
        <div className='Fotter_sec1_content'>About SWAPMART Group</div>
        <div className='Fotter_sec1_content'>Careers</div>
        <div className='Fotter_sec1_content'>Contact US</div>
        <div className='Fotter_sec1_content'>SWAPMART People</div>
        <div className='Fotter_sec1_content'>WAAH JOBS</div>
        <div className='Fotter_sec1_content'>Press Release</div>  
        </div>
        <div className='Footer_sec1_header'>
        <div className='Footer_sec1_header_content'>SWAP MART</div>
        <div className='Fotter_sec1_content'>Help</div>
        <div className='Fotter_sec1_content'>SiteMap</div>
        <div className='Fotter_sec1_content'>Legacy &Privacy Information</div>
        <div className='Fotter_sec1_content'>Blog</div>
        <div className='Fotter_sec1_content'>SwapMART Autos Sell</div>
        <div className='Fotter_sec1_content'>SwapMart Car Sell</div>  
        </div>
        <div className='Footer_sec1_header'>
        <div className='Footer_sec1_header_content'>
          <img className="logo_img" src={logo}></img>
        </div>
        <div className='Footer_last_sec'>
          <img src={fb}></img>
          <img src={instra}></img>
          <img src={twitter}></img>
          <img src={linkedin}></img>
        </div>
        <div className="footer-brand-app-download">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" />
                </div>
        </div>

      </div>

    
    <div>Made with ❤️ by  SWAPMART</div>
    </div>
  )
}

export default Footer