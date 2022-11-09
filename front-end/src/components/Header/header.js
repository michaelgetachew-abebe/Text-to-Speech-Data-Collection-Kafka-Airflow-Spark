import React from 'react';
import './header.css';
// Import an image for logo here

const Header = () =>(
    <div className='headerStyle'>
        <div className=''>
            <h1 className=''>Amharic Text to Speech Data Collection Platform</h1>
            <h1 className=''>የአማርኛ ንግግርን መሰብሰቢያ ገፅ</h1>

            <p>This is a Data collection platform that will be used to prepare text-to-speech corpuses for the Amharic language!!!</p>
            
            <div className=''>
                {/* <button type="button">Audit Previous Recordings</button> */}
            </div>
        </div>
    </div>

);
export default Header;
