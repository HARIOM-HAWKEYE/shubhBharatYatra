import { useState } from 'react';
import serviceFrontPage from "../assets/image/Services/servicesFrontPage.avif";
import goaImage from "../assets/image/Goa/DudhSagar.avif"
const BlogPage = () => {
  const initialBlogs = [
    {
      title: "Exploring the Enchanting Beauty of Goa: A Tropical Paradise",
      author: "Aditi Sharma",
      date: "May 27, 2025",
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
    <section className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-cover bg-center overflow-hidden mb-12" style={{ backgroundImage: `url(${serviceFrontPage})` }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Hero Content if needed */}
        </div>
      </div>

      {/* Blog Section */}
      <h1 className='text-left w-[80%] mx-auto text-black text-4xl font-semibold relative mb-8'>
        Recent Travel Stories
        <span className="block w-40 h-1 bg-black mt-2 animate-pulse"></span>
      </h1>
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            onClick={() => setSelectedBlog(blog)}
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 hover:text-blue-500 cursor-pointer">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <div className="text-sm text-gray-500">
                <span>By {blog.author} • {blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Blog Details */}
      {selectedBlog && (
        <div className="bg-gray-100 rounded-2xl w-[80%] mx-auto p-8 mt-12">
          <h2 className="text-3xl font-bold mb-4">{selectedBlog.title}</h2>
          <p className="text-gray-700 mb-6">{selectedBlog.description}</p>
          <div className="text-sm text-gray-500 mb-8">
            <span>By {selectedBlog.author} • {selectedBlog.date}</span>
          </div>

          {/* Full Blog Content */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Introduction</h3>
              <p>{selectedBlog.fullContent.introduction}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">{selectedBlog.fullContent.whyVisit.title}</h3>
              <ul className="list-disc list-inside">
                {selectedBlog.fullContent.whyVisit.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">{selectedBlog.fullContent.topPlaces.title}</h3>
              {selectedBlog.fullContent.topPlaces.sections.map((section, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="text-xl font-semibold mb-2">{section.name}</h4>
                  <ul className="list-disc list-inside">
                    {section.places.map((place, placeIdx) => (
                      <li key={placeIdx}>{place}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">{selectedBlog.fullContent.mustTryExperiences.title}</h3>
              <ul className="list-disc list-inside">
                {selectedBlog.fullContent.mustTryExperiences.experiences.map((experience, idx) => (
                  <li key={idx}>{experience}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">{selectedBlog.fullContent.goanCuisine.title}</h3>
              <ul className="list-disc list-inside">
                {selectedBlog.fullContent.goanCuisine.dishes.map((dish, idx) => (
                  <li key={idx}>{dish}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">{selectedBlog.fullContent.bestTimeToVisit.title}</h3>
              <ul className="list-disc list-inside">
                {selectedBlog.fullContent.bestTimeToVisit.seasons.map((season, idx) => (
                  <li key={idx}>{season}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">{selectedBlog.fullContent.travelTips.title}</h3>
              <ul className="list-disc list-inside">
                {selectedBlog.fullContent.travelTips.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Conclusion</h3>
              <p>{selectedBlog.fullContent.conclusion}</p>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <div className="bg-gray-100 rounded-2xl p-12 mt-16 text-center">
  <h2 className="text-3xl font-bold mb-4">Join Our Travel Community</h2>
  <p className="text-gray-700 mb-6">Get exclusive travel tips and destination guides right in your inbox.</p>
  <div className="flex justify-center">
    <input
      type="email"
      placeholder="Enter your email"
      className="p-3 w-1/2 bg-white border border-gray-300 rounded-l-full focus:outline-none text-black"
    />
    <button className="bg-yellow-500 text-white px-6 py-3 rounded-r-full hover:bg-yellow-600 transition duration-300">
      Subscribe
    </button>
  </div>
</div>


    </section>
  );
};

export default BlogPage;
