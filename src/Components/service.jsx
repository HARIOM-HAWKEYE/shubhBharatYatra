const Services = () => {
    const services = [
      {
        title: "Customized Tour Packages",
        description: "Plan your dream vacation with tailor-made itineraries designed just for you.",
        icon: "✈️"
      },
      {
        title: "Hotel & Stay Booking",
        description: "Book comfortable and affordable stays at the best locations worldwide.",
        icon: "🏨"
      },
      {
        title: "24/7 Travel Support",
        description: "Enjoy a hassle-free journey with our round-the-clock customer support.",
        icon: "📞"
      }
    ];
  
    return (
      <section id="services" className="bg-white py-12 w-[80%] mx-auto">
        <div className="container mx-auto">
          <h1 className='text-left text-black text-4xl mb-10 font-semibold relative'>
            Our Services
            <span className="block w-40 h-1 bg-black mt-2 mb-6 animate-pulse"></span>
          </h1> 
          <div className="grid grid-cols-1  md:grid-cols-3 gap-8 text-center ">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-110 hover:rotate-3 hover:bg-[#101828] hover:text-yellow-400"
              >
                <div className="text-6xl mb-4 animate-spin-slow">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="tracking-wide leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  