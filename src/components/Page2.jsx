import React from 'react'
import kedarnath1 from '../assets/kedarnath1.jpg';
import './Page.css';
import Navbar from './Navbar';

const Page2 = () => {
  return (
    
    <div className='full-screen-1' style={{ backgroundImage: `url(${kedarnath1})` }}>
        <Navbar></Navbar>
        
        <div className="container-1">
            <div className="heading">
                <h1>THE KEDARNATH</h1>
            </div>
            <div className="content">
                <p>Kedarnath Temple is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India. Due to extreme weather conditions, the temple is open to the general public only between the months of April (Akshaya Tritiya) and November (Kartik Purnima, the autumn full moon).</p>
                <p>
                During the winters, the vigraha of the temple is carried down to Ukhimath to be worshipped for the next six months. Kedarnath is seen as a homogenous form of Shiva, the 'Lord of Kedarkhand', the historical name of the region..
                </p>
            </div>
        </div>
    </div>
  )
}

export default Page2