import { list } from 'postcss';
import React from 'react';
import Features from './Features/Features';

const PriceCard = ({price}) => {
    // console.log(price);

    return (
        <div className='bg-indigo-300 mt-4 p-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold '>{price?.price}
</span>
<span className='text-2xl font-bold text-center text-white'>/mon</span>
             </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{ price?.name}</h5>
            <p className='font-bold text-white underline'>Features:</p> 
        {
           
        price?.features?.map((feature,idx) =><Features
        key={idx}
        feature={feature}
        ></Features>)
        
        }
        <button className="w-full bg-green-500 py-2 rounded-md hover:bg-green-900 text-white font-bold mt-auto">Buy Now</button>
        </div>
    );
};

export default PriceCard;