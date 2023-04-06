import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Pricelist = () => {
    const[prices,setPrices]=useState([]);
    useEffect(()=>{
        fetch("prices.json")
        .then(res => res.json())
        .then(data =>setPrices(data))
    },[])
    return (
        <div className='mx-12'>
            <h2 className='font-bold bg-purple-400 p-4 text-center text-5xl'>Awesome affordable prices</h2>
         
        <div className='grid md:grid-cols-3 gap-3 '>
        { 
           
           prices.map(price=><PriceCard key={price.id}
            price={price}

          > </PriceCard>)
           }
        </div>
           </div>

    );
};

export default Pricelist;