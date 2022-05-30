import React from "react";
import Productbox from './Productbox';

import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

function Products(){
    return(
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
            <p>Home Delivery is also Available</p>
            <div className='a-container'>
                <Productbox image={pimage1} title="Large Burger"/>
                <Productbox image={pimage2} title="Aloo tikke Burger"/>
                <Productbox image={pimage1} title="Special Large Burger"/>
                

            </div>

        </div>
    )

}
export default Products;