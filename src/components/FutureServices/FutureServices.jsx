import React, { useEffect, useState } from 'react';

const FutureServices = () => {
    const [team, setTeam] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setTeam(data))
    }, [])
    return (
        <>
            <div className='my-12 bg-gray-100'>
                <h1 className="text-orange-800 text-center my-12 text-4xl font-bold">Future Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
                    {
                        team.map(item => (
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src={item.img} alt="Shoes" /></figure>
                                <div className="card-body mt-8 text-center items-center">
                                    <h2 className="card-title font-bold text-3xl">{item.title}</h2>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default FutureServices;