import React from "react";

function Header(){
    return(
        <div id ='main'>
            <div className='header-heading'>
                <h3>It is Great Time for A Good Taste of Burger</h3>
                
                <h1><span>BURGER</span> For<br/>WEEK </h1>
                <p className='details' >Burger's are So yummy,you should try it.</p>
                <div className='header-btns'>
                    <a href='#' className='header-btn'>Order </a>

                </div>

            </div>

        </div>
    )
}

export default Header ;