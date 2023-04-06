import React from 'react';
import {CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div className='flex'>
             <CheckCircleIcon className="h-6 w-6 text-green-500 " />
            <span className='pl-4'>{feature}</span>
        </div>
    );
};

export default Features;