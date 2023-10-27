import React from 'react'
import golden from '../assets/golden-1.webp';
import './Page.css';
import Navbar from './Navbar';

const Page1 = () => {
  return (
    
    <div className='full-screen-1' style={{ backgroundImage: `url(${golden})` }}>
       <Navbar></Navbar> 
        
        <div className="container-1">
            <div className="heading">
                <h1>THE GOLDEN TEMPLE</h1>
            </div>
            <div className="content">
                <p>The Golden Temple also known as the Harimandir Sahib (lit.'abode of God'), is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur, and Gurdwara Janam Asthan in Nankana Sahib.</p>
                <p>
                The man-made pool on the site of the temple was completed by the fourth Sikh Guru, Guru Ram Das, in 1577.In 1604, Guru Arjan Dev, the fifth Sikh Guru, placed a copy of the Adi Granth in Harmandir Sahib and is the prominent figure in the development of gurudwara who built it in the 16th century.The Gurdwara was repeatedly rebuilt by the Sikhs after it became a target of persecution and was destroyed several times by the Mughal and invading Afghan armies.Maharaja Ranjit Singh, after founding the Sikh Empire, rebuilt it in marble and copper in 1809, and overlaid the sanctum with gold leaf in 1830. This has led to the name the Golden Temple.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Page1