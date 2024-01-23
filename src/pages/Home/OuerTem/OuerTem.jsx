import React, { useEffect, useState } from 'react';

const OuerTem = () => {
    const [team, setTeam] = useState([])
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeam(data))
    }, [])
    return (
        <div className='my-12 bg-gray-100'>
            <h1 className="text-orange-500 text-center my-12 text-4xl font-bold">Our Team</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
                {
                    team.map(item => (
                        <div className="stat bg-slate-300 rounded">
                            <div className="stat-figure text-secondary">
                                <div className="avatar ">
                                    <div className="w-20 rounded-full">
                                        <img src={item.img} />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-value">{item.name}</div>
                            <div className="font-bold text-gray-500">Age: {item.age}</div>
                            <p>{item.title}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default OuerTem;