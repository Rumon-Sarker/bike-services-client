import React from 'react';
import { Helmet } from 'react-helmet';
import FutureServices from '../../components/FutureServices/FutureServices';

const ServicesPage = () => {
    return (
        <div>
            <Helmet>
                <title>Bike Services || Services</title>
            </Helmet>
            <FutureServices></FutureServices>
        </div>
    );
};

export default ServicesPage;