import React from 'react';

const Subscribr = () => {
    return (
        <div className='grid my-24 h-52 text-center items-center bg-gray-900 text-white grid-cols-4 gap-5 md:gap-20'>
            <div>
                <h1 className='text-3xl text-orange-600 font-bold'>5K</h1>
                <p>Subscribe</p>
            </div>
            <div>
                <h1 className='text-3xl text-orange-600 font-bold'>10K</h1>
                <p>Customers</p>
            </div>
            <div>
                <h1 className='text-3xl text-orange-600 font-bold'>4K</h1>
                <p>Like</p>
            </div>
            <div>
                <h1 className='text-3xl text-orange-600 font-bold'>2K</h1>
                <p>Comments</p>
            </div>

        </div>
    );
};

export default Subscribr;