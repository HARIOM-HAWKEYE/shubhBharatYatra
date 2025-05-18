import { useState } from 'react';
import serviceFrontPage from "../assets/image/Services/servicesFrontPage.avif";
import goaImage from "../assets/image/Goa/DudhSagar.avif";

const BlogPage = () => {
  const initialBlogs = [
    {
      title: "Exploring the Enchanting Beauty of Goa: A Tropical Paradise",
      author: "Aditi Sharma",
      date: "April 22, 2025",
      image: goaImage,
      description: "Discover why Goa is India's favorite beach destination with its stunning beaches, vibrant culture, and delicious cuisine.",
      fullContent: {
        introduction: "Goa, India's smallest state, is a mesmerizing blend of sun-kissed beaches, vibrant culture, and Portuguese heritage. Known for its laid-back vibe, thrilling nightlife, and delectable seafood, Goa attracts millions of tourists every year.",
        whyVisit: {
          title: "Why Visit Goa?",
          points: [
            "Stunning Beaches: From the popular Baga and Calangute to the serene Palolem and Agonda.",
            "Rich History: Explore Portuguese-era churches, forts, and colorful architecture.",
            "Vibrant Nightlife: Famous beach clubs, shacks, and full-moon parties.",
            "Adventure Sports: Parasailing, jet-skiing, scuba diving, and more.",
            "Delicious Food: A mix of Konkani, Portuguese, and global flavors."
          ]
        },
        topPlaces: {
          title: "Top Places to Visit in Goa",
          sections: [
            {
              name: "North Goa – The Party Hub",
              places: [
                "Baga Beach: Famous for water sports and nightlife.",
                "Anjuna Flea Market: A shopper's paradise.",
                "Fort Aguada: A 17th-century Portuguese fort with breathtaking views."
              ]
            },
            {
              name: "South Goa – Peace & Serenity",
              places: [
                "Palolem Beach: A crescent-shaped beach perfect for relaxation.",
                "Colva Beach: Known for its white sands and clear waters.",
                "Dudhsagar Falls: A majestic waterfall amidst lush greenery."
              ]
            },
            {
              name: "Old Goa – The Historical Side",
              places: [
                "Basilica of Bom Jesus: A UNESCO World Heritage Site.",
                "Se Cathedral: One of Asia's largest churches.",
                "Chapora Fort: Made famous by the movie Dil Chahta Hai."
              ]
            }
          ]
        },
        mustTryExperiences: {
          title: "Must-Try Experiences in Goa",
          experiences: [
            "Sunset Cruise on the Mandovi River",
            "Dolphin Spotting at Sinquerim Beach",
            "Spice Plantation Tour in Ponda",
            "Casino Hopping in Panjim",
            "Yoga & Wellness Retreats in Arambol"
          ]
        },
        goanCuisine: {
          title: "Goan Cuisine: A Food Lover's Delight",
          dishes: [
            "Fish Curry Rice – The staple Goan meal.",
            "Pork Vindaloo – A spicy, tangy Portuguese-inspired dish.",
            "Bebinca – A traditional Goan layered dessert.",
            "Feni – A local cashew or coconut-based liquor."
          ]
        },
        bestTimeToVisit: {
          title: "Best Time to Visit Goa",
          seasons: [
            "Peak Season (Nov-Feb): Pleasant weather, perfect for beach activities.",
            "Off-Season (Jun-Sep): Lush greenery, fewer crowds, and budget-friendly stays."
          ]
        },
        travelTips: {
          title: "Travel Tips for Goa",
          tips: [
            "Rent a scooter or bike for easy exploration.",
            "Bargain at flea markets for the best deals.",
            "Respect local customs, especially near religious sites.",
            "Stay hydrated and use sunscreen—Goa's sun can be harsh!"
          ]
        },
        conclusion: "Goa is a dream destination that offers a perfect mix of relaxation, adventure, and culture. Whether you're dancing at a beach party, exploring ancient churches, or simply lounging by the sea, Goa promises memories that last a lifetime."
      }
    }
  ];

  const [blogs, setBlogs] = useState(initialBlogs);
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center overflow-hidden mb-8 md:mb-12" 
           style={{ backgroundImage: `url(${serviceFrontPage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Travel Blog & Stories
          </h1>
          <p className="text-white text-lg sm:text-xl text-center max-w-2xl">
            Discover inspiring travel experiences and expert tips from our adventures
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className='text-3xl sm:text-4xl font-semibold mb-6 md:mb-8 relative'>
          Recent Travel Stories
          <span className="block w-40 h-1 bg-black mt-2 animate-pulse"></span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-105" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm">{blog.date}</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 hover:text-blue-600 cursor-pointer line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">By {blog.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Blog Details */}
        {selectedBlog && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-10 md:mt-12 border border-gray-200">
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6 sm:p-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedBlog.title}
                  </h2>
                  <div className="text-white/90">
                    <span>By {selectedBlog.author} • {selectedBlog.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-8 text-gray-700">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {selectedBlog.description}
              </p>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Introduction</h3>
                <p className="text-gray-600 leading-relaxed">{selectedBlog.fullContent.introduction}</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">{selectedBlog.fullContent.whyVisit.title}</h3>
                <ul className="space-y-3">
                  {selectedBlog.fullContent.whyVisit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 mr-2"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">{selectedBlog.fullContent.topPlaces.title}</h3>
                {selectedBlog.fullContent.topPlaces.sections.map((section, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">{section.name}</h4>
                    <ul className="list-disc ml-5 text-gray-600 space-y-1">
                      {section.places.map((place, idy) => (
                        <li key={idy}>{place}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">{selectedBlog.fullContent.mustTryExperiences.title}</h3>
                <ul className="list-disc ml-5 space-y-1 text-gray-600">
                  {selectedBlog.fullContent.mustTryExperiences.experiences.map((exp, idx) => (
                    <li key={idx}>{exp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">{selectedBlog.fullContent.goanCuisine.title}</h3>
                <ul className="list-disc ml-5 space-y-1 text-gray-600">
                  {selectedBlog.fullContent.goanCuisine.dishes.map((dish, idx) => (
                    <li key={idx}>{dish}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">{selectedBlog.fullContent.bestTimeToVisit.title}</h3>
                <ul className="list-disc ml-5 space-y-1 text-gray-600">
                  {selectedBlog.fullContent.bestTimeToVisit.seasons.map((season, idx) => (
                    <li key={idx}>{season}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">{selectedBlog.fullContent.travelTips.title}</h3>
                <ul className="list-disc ml-5 space-y-1 text-gray-600">
                  {selectedBlog.fullContent.travelTips.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Conclusion</h3>
                <p className="text-gray-600">{selectedBlog.fullContent.conclusion}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;
