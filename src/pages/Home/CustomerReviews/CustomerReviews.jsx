import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    quote:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
    name: 'Awlad Hossin',
    role: 'Senior Product Designer',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: 2,
    quote:
      'I love how smooth and fast the delivery is. The customer service is also very responsive!',
    name: 'Nusrat Jahan',
    role: 'E-commerce Manager',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: 3,
    quote:
      'This courier service helped our business scale fast across the country. Reliable and affordable!',
    name: 'Tanvir Alam',
    role: 'Logistics Head',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
];

const CustomerReviews = () => {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const prevReview = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white rounded-[20px] shadow-md px-6 py-8 text-center max-w-md mx-auto relative">
      <FaQuoteLeft className="text-2xl text-teal-400 mb-4 mx-auto" />

      <p className="text-gray-700 text-sm mb-6">{review.quote}</p>

      <hr className="border-dashed border-t border-gray-300 mb-6" />

      <div className="flex items-center justify-center gap-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="text-left">
          <p className="text-sm font-semibold text-teal-900">{review.name}</p>
          <p className="text-xs text-gray-500">{review.role}</p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-1 mt-6">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? 'bg-teal-600' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <div className="flex justify-between items-center mt-6 absolute bottom-4 left-0 right-0 px-6">
        <button
          onClick={prevReview}
          className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-600 rounded-full p-2"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextReview}
          className="bg-lime-400 text-white hover:bg-lime-500 rounded-full p-2"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default CustomerReviews;
