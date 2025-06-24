import React from 'react';
import liveTracking from '../../../assets/live-tracking.png';
import bigDeliveryman from '../../../assets/big-deliveryman.png';
import safeDelivery from '../../../assets/safe-delivery.png';

const trackingData = [
  {
    id: 1,
    image: liveTracking,
    title: "Live Parcel Tracking",
    description: "Your parcel has been dispatched and is en route to the hub.",
  },
  {
    id: 2,
    image: bigDeliveryman,
    title: "100% Safe Delivery",
    description: "Your parcel is in transit to your local center.",
  },
  {
    id: 3,
    image: safeDelivery,
    title: "24/7 Call Center Support",
    description: "The parcel is out for delivery today.",
  },
];

const ParcelTracking = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Live Parcel Tracking</h2>

        {/* Vertically stacked cards */}
        <div className="flex flex-col gap-6">
          {trackingData.map(({ id, image, title, description }) => (
            <div
              key={id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-4"
            >
              <img src={image} alt="tracking" className="w-20 h-20 object-cover rounded-md" />

              <div className="flex flex-col">
                <h2 className="text-gray-800 font-semibold text-base mb-1">{title}</h2>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParcelTracking;
