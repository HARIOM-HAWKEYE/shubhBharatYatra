import React, { useState, useRef, useEffect } from 'react';
import ceo from '../assets/image/ceoImage.jpeg';
import ceo2 from '../assets/image/ceo2.jpg';
import about from '../assets/image/abouttourimage.avif';

const About = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const activeFAQRef = useRef(null);
  
    useEffect(() => {
      if (activeFAQRef.current) {
        activeFAQRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, [openIndex]);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    const services = [
        {
          number: '1',
          title: 'Discover New Horizons',
          description: 'Embark on unforgettable journeys to hidden gems and popular destinations, tailored just for you.'
        },
        {
          number: '2',
          title: 'Luxury Stays',
          description: 'Experience the ultimate comfort with our handpicked accommodations featuring modern amenities and exquisite designs.'
        },
        {
          number: '3',
          title: 'Adventurous Activities',
          description: 'Get your adrenaline pumping with thrilling outdoor activities, from water sports to mountain treks.'
        },
        {
          number: '4',
          title: 'Culinary Experiences',
          description: 'Indulge in a variety of gourmet dishes and local delicacies curated by top chefs.'
        },
        {
          number: '5',
          title: 'Cultural Exploration',
          description: 'Immerse yourself in the rich traditions and heritage of the places you visit.'
        },
        {
          number: '6',
          title: 'Personalized Packages',
          description: 'Design your dream vacation with customized itineraries and dedicated travel experts.'
        }
      ];
      const faqs = [
        {
          question: 'What are the check-in and check-out times?',
          answer: 'Check-in is from 2 PM, and check-out is until 11 AM.'
        },
        {
          question: 'Do you provide complimentary breakfast?',
          answer: 'Yes, a complimentary breakfast is included with your stay.'
        },
        {
          question: 'Do you have parking facilities?',
          answer: 'Yes, we offer free on-site parking for all our guests.'
        },
        
      
        {
          question: 'Is airport transfer available?',
          answer: 'Yes, we provide airport transfer services with prior booking.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'Cancellations made up to 48 hours before check-in are free of charge. After that, one night’s stay is charged.'
        },
        
        {
          question: 'Do you offer guided tours?',
          answer: 'Yes, we offer guided tours to popular local attractions. Please inquire at reception for details.'
        }
      ];
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <section className="bg-black text-center py-40 shadow-md">
          <h1 className="text-5xl font-bold mb-4 w-4/5 mx-auto text-white animate-fadeIn">
            Discover the Heart of India with ShubhBharatYatra
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-300 animate-fadeIn delay-200">
            At ShubhBharatYatra, we believe every journey is a story waiting to be told. Our mission is to
            connect travelers with the rich cultural heritage, scenic beauty, and hidden gems of India.
            We curate personalized travel experiences designed to leave you with unforgettable memories.
          </p>
        </section>

        <section className="py-5 w-4/5 mx-auto grid grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Where Every Stay Feels Like Home</h2>
          <p className="mb-6">We are dedicated to ensuring that every guest feels at home while being surrounded by the natural beauty of the hills. Whether you're here for a peaceful retreat or a joyful vacation with loved ones, we strive to create an atmosphere of calm and comfort, where your well-being is our priority.</p>
          <p className="mb-6">Our 8 luxury double rooms are designed to provide a peaceful rest, with attention to every detail ensuring that your stay is both comfortable and memorable. From the cozy interiors to the breathtaking views of the surrounding hills, every aspect of Divine Homestay reflects our commitment to excellence.</p>
        </div>
        <img
          src={about}
          alt="Scenic India"
          className="rounded-2xl shadow-lg w-full h-80 object-cover"
        />
      </section>
      <section className="py-10 w-4/5 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision & Values</h2>
          <p className="text-lg mb-8 animate-fadeIn">
            We aim to revolutionize the travel industry by offering top-notch personalized travel services.
            Our core values are customer-centricity, integrity, and the pursuit of excellence.
          </p>
        </section>

        <section className="text-white bg-black py-0 w-4/5 mx-auto text-center rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold mb-4">Discover What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-black text-white">
            
      {services.map((service) => (
        <div
          key={service.number}
          className="p-6 border border-white rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-black"
        >
          <div className="text-3xl font-bold mb-4">{service.number}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-sm">{service.description}</p>
        </div>
      ))}
    </div>
        </section>
{/* 
        <section className="bg-white text-black py-20 w-4/5 mx-auto text-center rounded-2xl shadow-md animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <div className="flex justify-center space-x-8">
            <div className="bg-gray-200 p-6 rounded-2xl">
              <img
                src={ceo}
                alt="Team member"
                className="rounded-full mx-auto w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Rajesh Sharma</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-2xl">
              <img
                src={ceo2}
                alt="Team member"
                className="rounded-full mx-auto w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Priya Mehta</h3>
              <p>Travel Consultant</p>
            </div>
          </div>
        </section> */}

       

        <section className="py-30 w-4/5 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-red-500">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 ">Explore the beauty of India with ShubhBharatYatra. Let’s plan your next adventure!</p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-2xl hover:bg-blue-600 animate-pulse">
            Contact Us
          </button>
        </section>
        <section className="py-0 w-4/5 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="bg-black text-white   overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} ref={openIndex === index ? activeFAQRef : null} className="mb-4">
              <div
                className="border border-white p-4 flex justify-between items-center hover:bg-[#8D0B41] cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && <div className="p-6 bg-white text-black border-t border-white">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
