import React from 'react';
import background from "../assets/home_bg.jpg";
import "../styles/home.css";

const myStyle={
    backgroundImage:`url(${background})`,
    
    height:'105vh',
    marginTop:'-55px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    };
const Home = () => {
return (
	<div class="home" style={myStyle}>
        <div className='welcome_heading'>
            <h2>Text to Speech Data Collection Platform</h2>
            <p></p>
        </div>
	</div>
      );
    }


export default Home;