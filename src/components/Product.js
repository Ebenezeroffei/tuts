import React from 'react'


const Product = ({id,name,price,description}) => {
    return (
        <div key={id} className='shadow-md p-5 mx-4 my-8 hover:bg-gray-200 border cursor-pointer rounded-2xl'>
            <p className='text-xl font-light'>{name}</p>
            <p className='font-semibold text-blue-400'>GHC; {price.toFixed(2)}</p>
            <p className='text-gray-400 mt-2'>
                <p className='text-gray-600 font-semibold'>Description</p>
                {description}
            </p>
        </div>
    );
}

export default Product;