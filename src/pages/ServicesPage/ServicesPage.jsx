import React from 'react';
import Services from '../Home/Services/Services';
import { Helmet } from 'react-helmet';
import FutureServices from '../../components/FutureServices/FutureServices';

const ServicesPage = () => {
    return (
        <div>
            <Helmet>
                <title>Bike Services || Services</title>
            </Helmet>
            <Services></Services>
            <FutureServices></FutureServices>
        </div>
    );
};

export default ServicesPage;