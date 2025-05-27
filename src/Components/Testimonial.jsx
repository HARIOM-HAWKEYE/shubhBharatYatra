import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import quotation from "../assets/image/icons/quotation.png";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';

const reviews = [
  {
    name: 'Aarav Sharma',
    role: 'Software Engineer',
    feedback: 'Shubh Bharat Yatra made my trip unforgettable. The arrangements were top-notch. Highly recommended!',
    image: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Sharma'
  },
  {
    name: 'Ishita Verma',
    role: 'Travel Blogger',
    feedback: 'Absolutely loved the experience! From the scenic locations to the excellent service, every moment was memorable.',
    image: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Ishita%20Verma'
  },
  {
    name: 'Rohan Gupta',
    role: 'Entrepreneur',
    feedback: 'A perfect blend of adventure and relaxation. Kudos to the team for organizing such a wonderful trip.',
    image: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Rohan%20Gupta'
  },
  {
    name: 'Meera Iyer',
    role: 'Teacher',
    feedback: 'The cultural tours were so well-planned. I felt so connected to the heritage and history of our country. Thank you!',
    image: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Meera%20Iyer'
  },
  {
    name: 'Aditya Nair',
    role: 'Photographer',
    feedback: 'Every destination was a visual treat. The travel support was incredible and made capturing moments so easy and enjoyable.',
    image: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Nair'
  }
];

export default function App() {
  return (
    <div className="max-w-[80%] mx-auto h-auto min-h-[400px] bg-white flex flex-col items-start justify-center py-6 sm:py-10">
      <h1 className='text-left text-black text-3xl sm:text-4xl font-semibold relative'>
        Our Happy Customers
        <span className="block w-40 h-1 bg-black mt-3 mb-6 animate-pulse"></span>
      </h1>
      
      <Swiper
        slidesPerView={1}           // default for mobile - 1 slide
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full max-w-6xl order-2"
        style={{ paddingBottom: '60px' }}
        breakpoints={{
          640: {
            slidesPerView: 2,      // from 640px and up show 2 slides per view
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="bg-black text-white rounded-lg overflow-hidden shadow-lg p-6 relative"
          >
            <blockquote className="italic flex gap-2 relative">
              <img src={quotation} alt="quotation" className='w-6 h-6' />
              <p className="flex-1">{review.feedback}</p>
              <img
                src={quotation}
                alt="quotation"
                className='w-6 h-6 absolute bottom-[105px] right-10 rotate-180'
              />
            </blockquote>
            <div className="flex items-center pt-[40px]">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4 bg-white p-1"
              />
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: black;
          width: 12px;
          height: 12px;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: blue;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}