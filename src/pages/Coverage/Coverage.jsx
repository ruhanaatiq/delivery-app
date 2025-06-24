import React from 'react';
import BangladeshMap from './BangladeshMap';
import { useLoaderData } from 'react-router-dom';

const Coverage = () => {
  const warehouses = useLoaderData();

  if (!Array.isArray(warehouses)) {
    return <p className="text-center text-red-500">Error: Warehouse data not available.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        We are available in 64 districts
      </h1>
      <BangladeshMap warehouses={warehouses} />
    </div>
  );
};

export default Coverage;
