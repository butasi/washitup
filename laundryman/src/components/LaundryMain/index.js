


import './index.css'


import {useState} from 'react'



import BookService from '../BookService/bookservice.js'

import AddClothes from '../AddClothes/addClothes'

import Success from  '../Success/success'

import Washing from '../Washing/washing'



const changeComponents={
  success:"SUCCESS",
  bookService:"BOOK_SERVICE",
  washClothes:"WASH_CLOTHES",
  washing:"WASHING"
}

function LaundryNav() {
   
      const [service,setService] = useState(changeComponents.washClothes)

      const [time,setTime] = useState(0)


      const bookService = () => {
        setService(changeComponents.success)
      }
      
      const washClothes = () => {
        setService(changeComponents.bookService)
      }
       
      const washing = () =>{
        setService(changeComponents.washing)
      }
       
      const getTime = (id) =>{
             setTime(id)
      }

      

      const navcontentshamberger = () =>{
         const navcontents=document.getElementById("contents")
         console.log(navcontents)
         navcontents.classList.toggle("donotshow")
      }

      return (
        <div className="background1-con">
          <div className="bar" bg="#b8dde3" variant="light">
            <div className="navbarcontainer">
              <div href="#home" className="main-head">Logo Space</div>
               <div id="contents" className="navbar-nav donotshow">
                <div  href="#home" className="home">Home</div>
                <div href="#features">About us</div>
                <div href="#pricing">Courses</div>
                <div href="#pricing">Mock tests</div>
                <div href="#pricing" className='blog'>Blog</div>
                <div href="#pricing"><button className='but'>Contact us</button></div>
              </div>
            </div>
            <div className='hamburger' >
                <svg onClick={navcontentshamberger} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11ZM21 4H3C2.44772 4 2 4.44772 2 5C2 5.55228 2.44772 6 3 6H21C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4ZM3 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H3C2.44772 18 2 18.4477 2 19C2 19.5523 2.44772 20 3 20Z" fill="#0F1621"/>
                </svg>
            </div>  
          </div>
          <div className='content122'>
              <img className="cyancon" src="./cyan.png" alt="cyancon"/>
              <p className='head'>Get The Best <br/> Laundry Service <br/> At Your <span className='sp'>Door Step</span></p>
                 <p className="para1123">Book laundry service with our app in just few & easy steps</p>
              <button className="butt2">Started<svg className="fa" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.39011 0.549296C8.11973 0.815871 8.09437 1.2371 8.31601 1.53265L8.38259 1.60993L12.9583 6.25004L1.25 6.25004C0.835787 6.25004 0.5 6.58583 0.5 7.00004C0.5 7.38239 0.786114 7.69792 1.15592 7.7442L1.25 7.75004H12.9583L8.38259 12.3902C8.11601 12.6605 8.09663 13.0821 8.32245 13.3745L8.39011 13.4508C8.66049 13.7174 9.08204 13.7367 9.37442 13.5109L9.45074 13.4433L15.2841 7.5266C15.548 7.25892 15.57 6.84245 15.3501 6.54997L15.2841 6.47348L9.45074 0.556818C9.15994 0.261855 8.68507 0.258488 8.39011 0.549296Z" fill="white"/>
                    </svg>
              </button>
            </div>
            {(service === changeComponents.washClothes) ? <AddClothes wash={washClothes}/>:(service === changeComponents.bookService)?<BookService book={bookService} time={time} getTime={getTime}/>:(service === changeComponents.success)?<Success washing={washing}/>:<Washing time={time}/>}
          <img className='impink' src="./pinkcon.png" alt="pinkcon"/>
        </div>
        
      );
    
    
  
}

export default LaundryNav;