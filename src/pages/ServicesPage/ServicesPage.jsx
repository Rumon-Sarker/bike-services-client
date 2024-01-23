import React from 'react';
import Services from '../Home/Services/Services';
import { Helmet } from 'react-helmet';

const ServicesPage = () => {
    return (
        <div>
            <Helmet>
                <title>Bike Services || Services</title>
            </Helmet>
            <Services></Services>
        </div>
    );
};

export default ServicesPage;