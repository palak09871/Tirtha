import React from 'react'
import ramesh from '../assets/ramesh.jpg';
import './Page.css';
import Navbar from './Navbar';

const Page3 = () => {
  return (
    
    <div className='full-screen-1' style={{ backgroundImage: `url(${ramesh})` }}>
        <Navbar></Navbar>
        
        <div className="container-1">
            <div className="heading">
                <h1>THE DWARKADHISH TEMPLE</h1>
            </div>
            <div className="content">
                <p>The Dwarkadhish temple, also known as the Jagat Mandir and occasionally spelled Dwarakadheesh, is a Hindu temple dedicated to Krishna, who is worshiped here by the name Dwarkadhish (Dvārakādhisha), or 'King of Dwarka'. The temple is located at Dwarka city of Gujarat, India, which is one of the destinations of Char Dham, a Hindu pilgrimage circuit. The main shrine of the five-storied building, supported by 72 pillars, is known as Jagat Mandir or Nija Mandir.</p>
                <p>
                Archaeological findings suggest the original temple was built in 200 BCE at the earliest.The temple was rebuilt and enlarged in the 15th-16th century.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Page3
