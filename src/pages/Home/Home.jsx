import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import LogosMarquee from './LogosMarquee/LogosMarquee';
import ParcelTracking from './ParcelTracking/ParcelTracking';
import BeMerchant from './BeMerchant/BeMerchant';
import CustomerReviews from './CustomerReviews/CustomerReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <LogosMarquee></LogosMarquee>
            <ParcelTracking></ParcelTracking>
            <BeMerchant></BeMerchant>
            <CustomerReviews></CustomerReviews>
   </div>
    );
};

export default Home;