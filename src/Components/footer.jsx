import React from "react";
import Whatsapp from "../assets/image/icons/whatsapp.png"
import Twitter from "../assets/image/icons/twitter.avif"
import Instagram from "../assets/image/icons/instagram.webp"
import facebook from "../assets/image/icons/facebook.png"
const Footer=()=>{
return (
    <>
  <footer className="bg-black text-white py-12">
  <div className="container max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
    {/* Logo and Description */}
    <div>
      <h2 className="text-3xl font-extrabold tracking-wide">Shubh Bharat Yatra</h2>
      <p className="text-sm mt-4">Discover the beauty of India with Shubh Bharat Yatra. Explore unforgettable destinations, enjoy exceptional travel services, and make memories that last a lifetime.</p>
      <p className="text-sm mt-4">📞 +91 - 8766224544</p>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-lg font-semibold">Quick Links</h3>
      <ul className="mt-2 space-y-2">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">Destinations</a></li>
        <li><a href="#" className="hover:text-gray-400">Tours</a></li>
        <li><a href="#" className="hover:text-gray-400">Gallery</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h3 className="text-lg font-semibold">Join Our Newsletter</h3>
      <p className="text-sm mt-2">Stay updated with our latest tour packages and travel insights. Subscribe now!</p>
      <div className="flex mt-4">
        <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-l-lg bg-white text-black focus:outline-none" />
        <button className="bg-[#D98324] text-black px-6 py-3 rounded-r-lg hover:bg-[#FFB22C] transition">Subscribe</button>
        </div>
      <div className="flex justify   space-x-4 mt-6">
        <a href="https://twitter.com/shubhbharatyatr" className="hover:text-gray-400" aria-label="Twitter"><img src={Twitter} alt="Twitter" className="w-10 h-10" /></a>
       <a href="https://www.instagram.com/shubhbharatyatra" className="hover:text-gray-400" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
  <img src={Instagram} alt="Instagram" className="w-10 h-10" />
</a>

        <a href="https://wa.me/918766224544" className="hover:text-gray-400" aria-label="WhatsApp"><img src={Whatsapp} alt="WhatsApp" className="w-10 h-10" /></a>
<a href="https://www.facebook.com/share/154TYcE81p/?mibextid=wwXIfr" className="hover:text-gray-400" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
  <img src={facebook} alt="Facebook" className="w-10 h-10" />
</a>
      </div>
    </div>
  </div>
  <div className="text-center text-sm text-gray-500 mt-12">&copy; Shubh Bharat Yatra 2025 - All Rights Reserved</div>
</footer>






    </>

 
   
  

    
)

}
export default Footer;