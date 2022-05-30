import React from "react";
import aboutimage from '../images/about.png';

function About(){
    return(
        <div id='about'>
            <div className='about-text' >
                <h1>Upcoming Events</h1>

                <p>Happy New Year 2022 party <br/>
                   Makar Sankranti <br/>
                   Basant Panchmi <br/>
                   </p>
                   <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
        </div>
    )
}
export default About;